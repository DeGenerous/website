const data = [
  {
    name: "$5M+",
    description: "raised for charity with the content we produced and marketed",
    color: (opacity: number = 1) => `rgba(255, 60, 64, ${opacity})`, // red
    image: "/icons/heart.svg",
  },
  {
    name: "3",
    description: "global service missions funded by DGRS",
    color: (opacity: number = 1) => `rgba(56, 117, 250, ${opacity})`, // blue
    image: "/icons/globe.svg",
  },
  {
    name: "Millions",
    description: "of viewers following our AI stories across platforms",
    color: (opacity: number = 1) => `rgba(60, 171, 90, ${opacity})`, // green
    image: "/icons/people.svg",
  },
  {
    name: "Thousands",
    description: "of active players, creators, and learners using DGRS tech",
    color: (opacity: number = 1) => `rgba(160, 120, 255, ${opacity})`, // purple
    image: "/icons/growth.svg",
  },
  {
    name: "First-of-their-kind",
    description: "partnerships with NGOs, museums, and enterprises",
    color: (opacity: number = 1) => `rgba(255, 140, 0, ${opacity})`, // orange
    image: "/icons/handshake.svg",
  },
];

export default data;
