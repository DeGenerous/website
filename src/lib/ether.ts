import { ethers } from "ethers";

declare global {
    interface Window { ethereum: any; }
}

const CLAIM_ABI = Object.freeze([
    "function claim(uint256, uint256)",
    "function DECIMALS() view returns (uint256)",
    "function owner() view returns (address)",
    "function PreSaleIsActive() view returns (bool)",
    "function PRICE() view returns (uint256)",
    "function teamWallet() view returns (address)",
    "function USDC() view returns (address)",
    "function whitelist(address) view returns (uint256)",
    "function claimed(address) view returns (uint256)"
])

const USDC_ABI = Object.freeze([
    "function name() view returns (string)",
    "function approve(address,uint256) returns (bool)",
    "function decimals() view returns (uint8)"
]);

const CLAIM_ADDRESS = "0x0F6A493A50A75dFEB9AE12c7e34691D65BB5Dc41";

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

export const get_contracts = async () => {
    if (contracts !== null) { return contracts; }

    if (typeof window.ethereum === "undefined") {
        console.log("Please install Metamask");

        return null;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const claim = new ethers.Contract(CLAIM_ADDRESS, CLAIM_ABI, provider);
    const usdc = new ethers.Contract(await claim.USDC(), USDC_ABI, provider);

    return contracts = { provider, claim, usdc, with_signer: null };
}

export const with_signer = async () => {
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
    const price = ethers.utils.formatUnits(await claim.PRICE(), await usdc.decimals());

    return [claimed, sum - claimed, price];
}

export const approve_claim = async () => {
    if (contracts === null || contracts.with_signer === null) { return; }

    const { claim, with_signer } = contracts;
    await with_signer.usdc.approve(CLAIM_ADDRESS, await claim.PRICE());
}

export const claim = async (number: number) => {
    if (contracts === null || contracts.with_signer === null) { return; }

    const { claim, with_signer } = contracts;
    await with_signer.claim.claim(number, number * (await claim.PRICE()));
}
