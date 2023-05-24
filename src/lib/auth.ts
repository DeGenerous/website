import { with_signer } from "@lib/ether";

const url = import.meta.env.PUBLIC_BACKEND;

const get_nonce = async (): Promise<Nullable<string>> => {
    const contracts = await with_signer();

    const response = await fetch(`${url}/nonce`, {
        method: "POST",
        body: JSON.stringify({
            wallet: await contracts?.with_signer?.signer?.getAddress()
        })
    });

    if (!response.ok) {
        alert(`Server responded with status: ${response.status}\nError: ${await response.text()}`);
        return null;
    }

    return await response.text();
}


export const login = async () => {
    const contracts = await with_signer();

    const nonce = await get_nonce();
    if (nonce === null) { return; }

    const signature = await contracts?.with_signer?.signer.signMessage(nonce) as string;

    const response = await fetch(`${url}/login`, {
        method: "POST",
        body: JSON.stringify({
            wallet: await contracts?.with_signer?.signer?.getAddress(),
            signature: signature
        })
    });

    if (!response.ok) {
        alert(`Server responded with status: ${response.status}\nError: ${await response.text()}`);
        return;
    }
}

export const loggedIn = async (): Promise<boolean> => {
    const response = await fetch(`${url}/logged-in`, {
        method: "POST",
    });

    return response.ok;
}