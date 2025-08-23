const callToAction: CTA[] = [
  {
    name: "play",
    color: (opacity: number = 1) => `rgba(60, 171, 90, ${opacity})`, // green
    image: "/icons/play.svg",
    title: "Hero mode engaged",
    description:
      "CoNexus drops you into branching, interactive stories where every choice reshapes the plot in real time. Become the main character, forge paths no one else will ever walk, and replay for endlessly unique endings.",
    buttons: [
      {
        name: "Launch CoNexus",
        link: "https://conexus.degenerousdao.com/",
        target: "_blank",
      },
      {
        name: "Join Discord",
        link: "http://degenerousdao.com/join",
        target: "_blank",
      },
    ],
  },
  {
    name: "create",
    color: (opacity: number = 1) => `rgba(56, 117, 250, ${opacity})`, // blue
    image: "/icons/palette.svg",
    title: "Connecting ink with algorithm",
    description:
      "CoNexus imposes no limits - anyone can create, publish, and monetize quality stories with a single prompt. You get fair revenue splits, programmable IP rights, and a seamless interface, alongside one-click novel-to-CYOA ports, built‑in social tools, and diverse monetization options with an audience hungry for fresh content.",
    buttons: [
      {
        name: "Launch CoNexus",
        link: "https://conexus.degenerousdao.com/",
        target: "_blank",
      },
      {
        name: "Pursue Collabs",
        link: "/",
      },
    ],
  },
  {
    name: "build",
    color: (opacity: number = 1) => `rgba(255, 140, 0, ${opacity})`, // orange
    image: "/icons/hammer.svg",
    title: "Founder mode activated",
    description:
      "Our tech powers apps, games, franchises, and education. Whether you tap into our CoNexus API, partner with our Film Studio, or build directly on DGRS - we deliver the end‑to‑end foundation to launch, scale, and evolve digital experiences.",
    buttons: [
      {
        name: "Contact us",
        link: "mailto:biz@degenerousdao.com",
      },
      {
        name: "See more",
        link: "/enterprise",
      },
    ],
  },
  {
    name: "invest",
    color: (opacity: number = 1) => `rgba(160, 120, 255, ${opacity})`, // purple
    image: "/icons/growth.svg",
    title: "Bridging vision with capital",
    description:
      "Potentials are 1,000 dynamic NFTs that evolve on‑chain with governance votes and grant privileged platform accounts, exclusive content drops, and direct influence over CoNexus features. Secure your NFT to gain partner airdrops, first rights to our upcoming token, and a seat at the table in shaping AI‑powered storytelling.",
    buttons: [
      {
        name: "Unlock Your Potential",
        link: "https://magiceden.io/collections/ethereum/potentials-eth",
        target: "_blank",
      },
      {
        name: "See more",
        link: "/investors",
      },
    ],
  },
  {
    name: "give",
    color: (opacity: number = 1) => `rgba(255, 60, 64, ${opacity})`, // red
    image: "/icons/heart.svg",
    title: "Time to make a difference",
    description:
      "Activate your company’s purpose through fully branded service missions with Lions Clubs International, where we handle logistics, partnerships, and both Web2 and blockchain donation flows so 100% of contributions reach those in need. Every mission is organized with local volunteers and documented for transparency - driving over 10 million views, raising millions more, and putting your brand’s values front and center.",
    buttons: [
      {
        name: "Contact us",
        link: "mailto:charity@degenerousdao.com",
      },
      {
        name: "See more",
        link: "/enterprise",
      },
    ],
  },
];

export default callToAction;
