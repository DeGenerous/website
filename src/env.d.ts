/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Nullable<T> = null | T;

interface Goal {
  name: string;
  description: string;
  done: boolean;
}

interface Member {
  name: string;
  secondName?: string;
  picture: string;
  position: string;
  twitter?: string;
  email?: string;
  description: string[];
}

interface Collab {
  name: string;
  description: string;
  logo?: string;
  background?: string;
  stories: StoryTile[];
  website: string;
  twitter?: string;
  tiktok?: string;
  telegram?: string;
  discord?: string;
  warpcast?: string;
  youtube?: string;
}

interface StoryTile {
  picture: string;
  title: string;
  link: string;
}
