import { writable } from "svelte/store";
import { HomeSection } from "@types/homepage.ts";

export const state = writable<HomeSection>(HomeSection.Potentials);
