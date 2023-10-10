import { writable } from "svelte/store";

export const NarrativeGovStore = writable({
  votedOption: null,
  nftSelected: [],
});
