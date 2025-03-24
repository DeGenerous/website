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