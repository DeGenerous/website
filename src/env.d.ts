/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Nullable<T> = null | T;

type HeaderTab = {
  name: string;
  links?: {
    name: string;
    href: string;
    target: string;
  }[];
};

type Roadmap = {
  section: string;
  goals: {
    name: string;
    description: string;
  }[];
};

type Goal = {
  name: string;
  description: string;
};

type Section = {
  section: string;
  goals: Goal[];
};

type SectionTab = {
  label: string;
  id: string;
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
  image: string;
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

type ImpactData = {
  name: string;
  description: string;
  image: string;
  color: (opacity?: number) => string;
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

type Modal = {
  content: string;
  button: string;
  buttonFunc: () => void;
  buttonClass: string;
};

// Globals for GTranslate widget
interface Window {
  gtranslateSettings?: any;
  doGTranslate?: (langPair: string) => void;
}
