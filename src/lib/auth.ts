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

const message = (nonce: string) => `
Sign this message to prove you're an Inception Ark NFT holder.

It will not cause a blockchain transaction, nor any gas fees.

Nonce:
${nonce}`;

export const login = async () => {
    const contracts = await with_signer();

    const nonce = await get_nonce();
    if (nonce === null) { return; }

    const signature = await contracts?.with_signer?.signer.signMessage(message(nonce)) as string;

    const response = await fetch(`${url}/login`, {
        method: "POST",
        body: JSON.stringify({
            wallet: await contracts?.with_signer?.signer?.getAddress(),
            signature: signature
        })
    });

    login_changed(response.ok);

    if (!response.ok) {
        alert(`Server responded with status: ${response.status}\nError: ${await response.text()}`);
        return;
    }
}

export const loggedIn = async (): Promise<boolean> => {
    const response = await fetch(`${url}/logged-in`, {
        method: "POST",
    });

    login_changed(response.ok);

    return response.ok;
}

export const logout = async (): Promise<void> => {
    await fetch(`${url}/logout`, {
        method: "POST",
    });

    login_changed(false);
}

type LoginCallback = (state: boolean) => void

let callbacks: {callback: LoginCallback, once: boolean}[] = [];

export const register_login_action = (callback: LoginCallback, once = false) => {
    callbacks.push({callback, once});
}

function get_cookie(cookie_name: string): string {
    const c_name = cookie_name + "=";
    const cookie_decoded = decodeURIComponent(document.cookie);
    const cookie_parts = cookie_decoded.split(';');
    
    for(const c of cookie_parts) {
        c.trim();
        if (c.indexOf(c_name) === 0) {
            return c.substring(c_name.length, c.length);
        }
    }
    return "";
}

let logged_in = get_cookie("logged") === "true";

const login_changed = (state: boolean) => {
    logged_in = state;
    callbacks.forEach(({callback}) => callback(state));
    callbacks = callbacks.filter(c => !c.once);
}

export const has_logged_in = (): boolean => {
    return logged_in;
}

export const ready = (callback: () => void) => {
    if (logged_in) {
        callback();
    } else {
        register_login_action(callback, true)
    }
}