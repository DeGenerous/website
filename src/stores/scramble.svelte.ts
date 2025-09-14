import { writable } from "svelte/store";

export const scrambleVisible = writable<boolean>(true);
export const transitionVisible = writable<boolean>(false);

// export const showScramble = () => scrambleVisible.set(true);
export const showScramble = () => transitionVisible.set(true);
export const hideScramble = () => transitionVisible.set(false);
