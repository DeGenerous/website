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

type Link = {
  name: string;
  link: string;
  target?: string;
};

type CTA = {
  name: string;
  color: (opacity?: number) => string;
  title: string;
  description: string;
  buttons: Link[];
};

type TypewriterInstance = {
  promise: Promise<void>;
  abort: () => void;
};

type BuiltProject = {
  title: string;
  category: string;
  img: string;
  desc: string;
};

type FooterSocial = {
  icon: string;
  href: string;
  alt: string;
};

type FooterLink = {
  title: string;
  anchors: {
    label: string;
    href: string;
    target: string;
  }[];
};
