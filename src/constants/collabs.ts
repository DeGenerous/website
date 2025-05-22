const mediaURL = (collabName: string, type: "logo" | "bg" = "logo") =>
  `/collabs/subpages/${collabName}/${type}.webp`;

const tilePictureURL = (collabName: string, picture: string) =>
  `/collabs/subpages/${collabName}/${picture}.webp`;

const storyURL = "https://conexus.degenerousdao.com/sections/Collabs";

const collabs: Map<string, Collab> = new Map();

collabs.set('glmr-apes', {
  name: "GLMR Apes",
  description: "GLMR Apes is a community-driven NFT initiative on the Moonbeam network, featuring a collection of 1001 pixel-art apes. As the first sold-out NFT collection on Moonbeam, GLMR Apes established the network's inaugural DAO, empowering holders with governance rights through the \"Apemocracy.\" The project has expanded to include a second NFT series, GLMR Jungle, and launched \"The Great Escape,\" a web3 play-to-earn game.",
  logo: mediaURL("glmr-apes"),
  background: mediaURL("glmr-apes", "bg"),
  stories: [
    {
      picture: tilePictureURL("glmr-apes", "glmr-apes"),
      title: "GLMR Apes",
      link: `${storyURL}/GLMR%20Apes?id=89`,
    }
  ],
  website: "https://www.glmrapes.com/",
  twitter: "https://x.com/GLMRApes",
  telegram: "https://t.me/+ziGQHawfZ3ZhYTk0",
  discord: "https://discord.com/invite/keJS7k8MUT"
})

collabs.set('anyone', {
  name: "ANyONe",
  description: "Anyone is a decentralized privacy network that routes internet traffic through encrypted, multi-hop circuits using incentivized relays. It offers a modular privacy layer for applications and users, ensuring anonymity without relying on centralized options.",
  logo: mediaURL("anyone"),
  background: mediaURL("anyone", "bg"),
  stories: [
    {
      picture: tilePictureURL("anyone", "the-relay-guide"),
      title: "The Relay Guide",
      link: `${storyURL}/The%20Relay%20Guide?id=95`,
    },
    {
      picture: tilePictureURL("anyone", "router-mode"),
      title: "Router Mode - Anyone’s Hotspot",
      link: `${storyURL}/Router%20Mode%20-%20Anyone's%20Hotspot?id=93`,
    },
    {
      picture: tilePictureURL("anyone", "the-anon-uprising"),
      title: "The Anon Uprising",
      link: `${storyURL}/The%20Anon%20Uprising?id=94`,
    }
  ],
  website: "https://www.anyone.io/",
  twitter: "https://x.com/AnyoneFDN",
  telegram: "https://t.me/anyoneprotocol",
  discord: "https://discord.com/invite/anyoneprotocol",
  youtube: "http://youtube.com/@anyoneprotocol"
})

export default collabs;