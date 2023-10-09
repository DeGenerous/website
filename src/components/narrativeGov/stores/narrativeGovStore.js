import { writable } from "svelte/store";

export const NarrativeGovStore = writable({ votedOption: null });

export const updateStore = (value) => {
  NarrativeGovStore.set({ votedOption: value });
};
