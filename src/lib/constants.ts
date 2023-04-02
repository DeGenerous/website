export const CLAIM = Object.freeze({
    address: "0x533C98bDbd1511c3521F8b46f63E99C4902D66cA",
    ABI: [
        "function claim(uint256)",
        "function claimed(address) view returns (uint256)",
        "function price() view returns (uint256)",
        "function USDCAddress() view returns (address)",
        "function whitelist(address) view returns (uint256)"
    ]
});

export const USDC = Object.freeze({
    ABI: [
        "function approve(address,uint256) returns (bool)",
        "function allowance(address,address) view returns (uint256)",
        "function decimals() view returns (uint8)"
    ]
});

export const GOVERNANCE = Object.freeze({
    address: "0xa61d685Edb4d32c2718903956A8b433E474f5c74",
    ABI: [
        "function ChooseYourDestiny(uint256,uint256,uint256)",
        "function decisions(uint256,uint256) view returns (string)",
        "function getStoryNodes() view returns (tuple(uint256,string[],string)[])"
    ]
});

export const EXOSAMA = Object.freeze({
    chainName: "Exosama",
    rpcUrls: ["https://rpc.exosama.com"],
    chainId: "0x83d",
    nativeCurrency: {
        name: "SAMA",
        symbol: "SAMA",
        decimals: 18
    },
    blockExplorerUrls: ["https://explorer.exosama.com"]
});
