/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Nullable<T> = null | T;

type Roadmap = {
  section: string;
  goals: {
    name: string;
    description: string;
  }[];
};

type TeamMember = {
  name: string;
  picture?: string;
  position: string;
  description: string;
};

type StoryTile = {
  picture: string;
  title: string;
  link: string;
};

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
  image: string;
  description: string;
};

type App = {
  name: string;
  description: string;
  image?: string;
  href: string;
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
