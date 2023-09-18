import { writable } from "svelte/store";

const Store = writable([
  {
    id: 1,
    title: "Distribute Inception Arks",
    text: "Spend some time alone and get to know who you really are, your values, and what you truly want from life",
    top: 80,
    left: 19,
    isDone: true,
  },
  {
    id: 2,
    title:
      "Start planning the service trips and distribution of $125 000 to charity",
    text: "Build meaningful relationships with others and open yourself up to their perspectives and insights.",
    top: 75,
    left: 32,
    isDone: true,
  },
  {
    id: 3,
    title: "Launch Conexus beta - AI-powered interactive storytelling ",
    text: "Spend time outside and appreciate the beauty and power of the natural world.",
    top: 70,
    left: 52,
    isDone: true,
  },
  {
    id: 4,
    title: "Launch the Ark Entertainment System ",
    text: "Pursue activities that you deeply enjoy, such as sports, hobbies, art, music, etc",
    top: 58,
    left: 67,
    isDone: false,
  },
  {
    id: 5,
    title: "lore-based mini-games ",
    text: "Travel, explore, and try out new and exciting things",
    top: 55,
    left: 52,
    isDone: true,
  },
  {
    id: 6,
    title:
      "Go multi-chain and unlock the Potentials out of Arks - avatar art reveal",
    text: "Learn, challenge yourself, and become the best version of yourself",
    top: 54,
    left: 42,
    isDone: false,
  },
  {
    id: 7,
    title:
      "Launch the Dischordian Saga - weekly story nodes generating traits and shaping the narrative based on community voting",
    text: "Find a purpose and work towards something that gives your life meaning",
    top: 39,
    left: 51,
    isDone: false,
  },
  {
    id: 8,
    title:
      "Launch the Multiverse Bifrost - connector to different metaverses and games",
    text: "Find faith and practice it, whether it be spiritual, religious, or philosophical.",
    top: 26,
    left: 41,
    isDone: false,
  },
  {
    id: 9,
    title: "Launch the Module - allowing NFT staking, IMGR burning",
    text: "Find faith and practice it, whether it be spiritual, religious, or philosophical.",
    top: 20,
    left: 32,
    isDone: false,
  },
  {
    id: 10,
    title: "Launch IMGR - ERC20 utility token",
    text: "Find faith and practice it, whether it be spiritual, religious, or philosophical.",
    top: 17,
    left: 51,
    isDone: false,
  },
  {
    id: 11,
    title: "Launch weekly gaming & metaverse lore-based events",
    text: "Find faith and practice it, whether it be spiritual, religious, or philosophical.",
    top: 10,
    left: 60,
    isDone: false,
  },
  {
    id: 12,
    title: "Set up a multi-sig charity wallet that anyone can donate to",
    text: "Find faith and practice it, whether it be spiritual, religious, or philosophical.",
    top: 10,
    left: 68,
    isDone: false,
  },
  {
    id: 13,
    title: "Form a decentralized charity fundraising platform",
    text: "Find faith and practice it, whether it be spiritual, religious, or philosophical.",
    top: 3,
    left: 83,
    isDone: false,
  },
]);

export default Store;
