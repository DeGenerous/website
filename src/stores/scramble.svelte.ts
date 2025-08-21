import { writable } from "svelte/store";

export const scrambleVisible = writable<boolean>(true);

export const showScramble = () => scrambleVisible.set(true);
