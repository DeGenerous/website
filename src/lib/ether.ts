import { ethers } from "ethers";

declare global {
    interface Window { ethereum: any; }
}

const CLAIM_ABI = Object.freeze([
    "function claim(uint256)",
    "function transferOwnership(address)",
    "function claimed(address) view returns (uint256)",
    "function decimals() view returns (uint256)",
    "function PreSaleIsActive() view returns (bool)",
    "function price() view returns (uint256)",
    "function USDCAddress() view returns (address)",
    "function whitelist(address) view returns (uint256)"
])

const USDC_ABI = Object.freeze([
    "function approve(address,uint256) returns (bool)",
    "function allowance(address,address) view returns (uint256)",
    "function decimals() view returns (uint8)"
]);

const CLAIM_ADDRESS = "0x533C98bDbd1511c3521F8b46f63E99C4902D66cA";

const EXOSAMA = Object.freeze({
    chainName: "Exosama",
    rpcUrls: ["https://rpc.exosama.com"],
    chainId: "0x83d",
    nativeCurrency: {
        name: "SAMA",
        symbol: "SAMA",
        decimals: 18
    },
    blockExplorerUrls: ["https://explorer.exosama.com"]
})

interface Contracts {
    provider: ethers.providers.Web3Provider,
    claim: ethers.Contract,
    usdc: ethers.Contract,

    with_signer: Nullable<{
        signer: ethers.providers.JsonRpcSigner,
        claim: ethers.Contract,
        usdc: ethers.Contract,
    }>;
}

let contracts: Nullable<Contracts> = null;

export const get_provider = (): Nullable<ethers.providers.Web3Provider> => {
    if (typeof window.ethereum === "undefined") {
        return null;
    }

    if (contracts != null) {
        return contracts.provider;
    }

    return new ethers.providers.Web3Provider(window.ethereum, "any");
}

export const get_contracts = async (): Promise<Nullable<Contracts>> => {
    if (contracts !== null) { return contracts; }

    const provider = get_provider();
    if (provider === null) { return null }

    const claim = new ethers.Contract(CLAIM_ADDRESS, CLAIM_ABI, provider);
    const usdc = new ethers.Contract(await claim.USDCAddress(), USDC_ABI, provider);

    return contracts = { provider, claim, usdc, with_signer: null };
}

export const with_signer = async (): Promise<Nullable<Contracts>> => {
    contracts = await get_contracts();

    if (contracts === null) { return null; }
    if (contracts.with_signer !== null) { return contracts; }

    await contracts.provider.send("eth_requestAccounts", []);

    const signer = contracts.provider.getSigner();
    const claim = contracts.claim.connect(signer);
    const usdc = contracts.usdc.connect(signer);

    contracts.with_signer = { signer, claim, usdc };

    return contracts;
}

export const get_data = async () : Promise<[number, number, string]> => {
    if (contracts === null || contracts.with_signer === null) { return [0, 0, "0"]; }

    const { claim, with_signer, usdc } = contracts;

    const address = with_signer.signer.getAddress();

    const claimed = (await claim.claimed(address)).toNumber();
    const sum = (await claim.whitelist(address)).toNumber();
    const price = ethers.utils.formatUnits(await claim.price(), await usdc.decimals());

    return [claimed, sum - claimed, price];
}

export const check_network = async (): Promise<boolean> => {
    const provider = get_provider();
    if (provider === null) { return false; }

    const hex = (await provider.getNetwork()).chainId.toString(16);
    return `0x${hex}` === EXOSAMA.chainId;
}

export const add_network = async ():Promise<void> => {
    window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [EXOSAMA]
    });
}

export const approve_claim = async (number: number): Promise<void> => {
    if (contracts === null || contracts.with_signer === null) { return; }

    const { claim, with_signer } = contracts;

    const tx: ethers.ContractTransaction = await with_signer.usdc.approve(CLAIM_ADDRESS, (await claim.price()).mul(number));
    await tx.wait()
}

export const get_allowence = async (): Promise<number> => {
    if (contracts === null || contracts.with_signer === null) { return 0; }

    const { claim, with_signer } = contracts;

    const address = with_signer.signer.getAddress();
    return (await with_signer.usdc.allowance(address, CLAIM_ADDRESS)).div(await claim.price()).toNumber();
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
    const provider = get_provider();
    if (provider === null) {
        return state.MISSING
    }

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (! (await check_network())) {
        return state.WRONG_NETWORK;
    }

    const contracts = accounts.length > 0 ? await with_signer() : await get_contracts();

    if (contracts === null) {
        return state.MISSING;
    }

    if (accounts.length === 0) {
        return state.LOCKED;
    }

    return state.READY;
}

export const change_listener = (callback: () => void) => {
    const provider = get_provider();
    if (provider === null) { return }

    window.ethereum.on("accountsChanged", callback)
    provider.on("network", callback);
}
