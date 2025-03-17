import { writable } from 'svelte/store';

export const showModal = writable<boolean>(false);
export const member = writable<Nullable<Member>>(null);
