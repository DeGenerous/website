import { BigNumber, ethers } from "ethers";
import detectProvider from '@metamask/detect-provider';
import { CLAIM, USDC, EXOSAMA, NFT, GOVERNANCE } from "./constants";
import additional from "./additional.json";

type ContractList = {
    claim: ethers.Contract,
    usdc: ethers.Contract,
    governance: ethers.Contract,
    nft: ethers.Contract,
}

type Contracts = {
    provider: ethers.providers.Web3Provider,

    with_signer: Nullable< {
        signer: ethers.providers.JsonRpcSigner,
    } & ContractList >
} & ContractList

let contracts: Nullable<Contracts> = null;
let selected_token: Nullable<BigNumber> = null;

export const get_provider = async (): Promise<Nullable<ethers.providers.Web3Provider>> => {
    const provider = await detectProvider();

    if (provider === null) {
        return null;
    }

    return new ethers.providers.Web3Provider(provider, "any");
}

export const get_contracts = async (): Promise<Nullable<Contracts>> => {
    if (contracts !== null) { return contracts; }

    const provider = await get_provider();
    if (provider === null) { return null }

    const claim = new ethers.Contract(CLAIM.address, CLAIM.ABI, provider);
    return contracts = { 
        provider,
        claim,
        usdc: new ethers.Contract(await claim.USDCAddress(), USDC.ABI, provider),
        governance: new ethers.Contract(GOVERNANCE.address, GOVERNANCE.ABI, provider),
        nft: new ethers.Contract(NFT.address, NFT.ABI, provider),
        with_signer: null
    };
}

export const with_signer = async (): Promise<Nullable<Contracts>> => {
    contracts = await get_contracts();

    if (contracts === null) { return null; }
    if (contracts.with_signer !== null) { return contracts; }

    await contracts.provider.send("eth_requestAccounts", []);

    const signer = contracts.provider.getSigner();
    contracts.with_signer = { 
        signer,
        claim: contracts.claim.connect(signer),
        usdc: contracts.usdc.connect(signer),
        governance: contracts.governance.connect(signer),
        nft: contracts.nft.connect(signer)
    };

    return contracts;
}

export const get_data = async () : Promise<[number, number, string]> => {
    if (contracts === null || contracts.with_signer === null) { return [0, 0, "0"]; }

    const { claim, with_signer, usdc } = contracts;

    const address = await with_signer.signer.getAddress();

    const claimed = (await claim.claimed(address)).toNumber() +( additional[address] ?? 0);
    const sum = (await claim.whitelist(address)).toNumber() + (additional[address] ?? 0);
    const price = ethers.utils.formatUnits(await claim.price(), await usdc.decimals());

    return [claimed, sum - claimed, price];
}

export const check_network = async (): Promise<boolean> => {
    const provider = await get_provider();
    if (provider === null) { return false; }

    const hex = (await provider.getNetwork()).chainId.toString(16);
    return `0x${hex}` === EXOSAMA.chainId;
}

export const add_network = async ():Promise<void> => {
    const provider = await get_provider();
    if (provider === null) { return; }

    provider.provider.request?.({
        method: "wallet_addEthereumChain",
        params: [EXOSAMA],
    });
}

export const approve_claim = async (number: number): Promise<void> => {
    if (contracts === null || contracts.with_signer === null) { return; }

    const { claim, with_signer } = contracts;

    const price = (await claim.price()).mul(number);
    const tx: ethers.ContractTransaction = await with_signer.usdc.approve(CLAIM.address, price);
    await tx.wait();
}

export const get_allowence = async (): Promise<number> => {
    if (contracts === null || contracts.with_signer === null) { return 0; }

    const { claim, with_signer } = contracts;

    const address = await with_signer.signer.getAddress();
    return (await with_signer.usdc.allowance(address, CLAIM.address)).div(await claim.price()).toNumber();
}

export const claim = async (number: number): Promise<void> => {
    if (contracts === null || contracts.with_signer === null) { return; }

    const { with_signer } = contracts;

    const tx: ethers.ContractTransaction = await with_signer.claim.claim(number);
    await tx.wait();
}

export enum state {
    MISSING = "missing",
    WRONG_NETWORK = "wrong-network",
    LOCKED = "locked",
    READY = "ready",
}

export const get_state = async (): Promise<state> => {
    const provider = await get_provider();
    if (provider === null) { return state.MISSING }

    const accounts = await provider.listAccounts();
    if (! (await check_network())) { return state.WRONG_NETWORK; }

    const contracts = accounts.length > 0 ? await with_signer() : await get_contracts();

    if (contracts === null) { return state.MISSING; }
    if (accounts.length === 0) { return state.LOCKED; }

    return state.READY;
}

export const change_listener = async (callback: () => void) => {
    const provider = await get_provider();
    if (provider === null) { return; }

    provider.on("accountsChanged", callback)
    provider.on("network", callback);
}

type StroyNode = {
    end_date: Date,
    options: string[],
    description: string,
    vote: Nullable<number>
}

export const get_tokens = async (): Promise<BigNumber[]> => {
    if (contracts === null || contracts.with_signer === null) { return []; }

    const address = await contracts.with_signer.signer.getAddress();
    return await contracts.nft.tokensOfOwner(address)
}

export const set_selected_token = (token: Nullable<BigNumber>) => { selected_token = token; }
export const get_selected_token = (): Nullable<BigNumber> => { return selected_token; }

const get_decision = async (story: number): Promise<Nullable<number>> => {
    if (contracts === null || contracts.with_signer === null || selected_token === null) { return null; }
    const { with_signer } = contracts;

    const decision = (await with_signer.governance.decisions(story, get_selected_token())).toNumber()
    return (decision > 0)? decision - 1 : null;
}

export const get_nodes = async (): Promise<StroyNode[]> => {
    if (contracts === null || contracts.with_signer === null || selected_token === null) { return []; }

    const { with_signer } = contracts;

    return await Promise.all((await with_signer.governance.getStoryNodes())
        .map(async ([end_timestamp, options, description] : [BigNumber, string[], string], index: number): Promise<StroyNode> => ({
            end_date: new Date(end_timestamp.toNumber() * 1000),
            options,
            description,
            vote: await get_decision(index)
        }))
    );
}
