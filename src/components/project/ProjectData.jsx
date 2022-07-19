import boredApe from "../../assets/bored-ape.png";
import greeter from "../../assets/greeter.png";
import nft from "../../assets/nft.png";
// import codeProject from "../../assets/solidity-code.png";
import portfolio from "../../assets/portfolio1.png";

const ProjectData = [
  {
    key: 0,
    img: boredApe,
    title: "BORED APE CLONE",
    tech: "React ... Thats It.",
    description:
      "This is a clone of a very popular NFT website. Built using React, just like this website;-)",
    details: "",
    glink: "https://github.com/dhaedream/bored-ape-clone",
    dlink: "https://ugc0ob.csb.app/",
  },
  {
    key: 1,
    img: nft,
    title: "CUSTOM 3D MODEL",
    tech: "React, React-Router-Dom, React-Three-Fiber, GLFT Models",
    description:
      "I imported a 3D model to this react app. The original project used react router-dom to have multiple pages. That conflicted with my 3D canvas and after (breaking) re-creating the project many times, I deployed the 3d canvas page seperate from the react-dom pages.",
    details: "",
    // "3D Art Credit : `https://sketchfab.com/3d-models/cute-alien-68d4df606f73431db8b443e9ee138558`",
    glink: "https://github.com/dhaedream/minting-app-front-end",
    // https://custom-mint-front-end-2.vercel.app/
    // dlink: "https://custom-mint-front-end-deus9l1d1-paintincode.vercel.app/",
    dlink: "https://custom-mint-front-end-2.vercel.app/",
  },
  {
    key: 2,
    img: greeter,
    title: "GREETER DAPP",
    tech: "React, Hardhat, Ethers.js, Typescript, Tailwind",
    description: "",
    // "Greeter Dapp is a decentralized application built with react, and hardhat. A standard greeter smart contract was deployed to the Goereli testnet at : 0xaf5d64DD1e1056A627AD4F1b2b5a01afee0e67a8 . With every deployment, hardhat auto generates ABI + Bytecode files . I used the ABI file to call methods from the contract. The front-end was built for anyone connected to Goerili on Metamask to retrieve and update the state of the greeting.",
    details:
      "My design process always start with imagination! I envisioned a futuristic space station with a blockchain generator. That aesthetic came togather with a vibrant + dark background that moves through space. Adding just a little transparency to the main card enhances the futuristic vibe. I may update the DApp to allow light sensitive users to freeze the background.",
    glink: "https://github.com/dhaedream/greet-1",
    dlink: "https://dhaedream.github.io/greet-1/",
  },
  {
    key: 3,
    img: portfolio,
    title: "MY FIRST PORTFOLIO",
    tech: "HTML, CSS, Javascript",
    description:
      "This is my original portfoio from this past Winter. A super basic website I had to reimagine by Spring 2022. As an artist, I must note, there is nothing spactacular about this original portfolio's design or code. It's here to prove how much I've learned in about 6 months of hard (independent) work. I did not feel like a developer 6 months ago creating my original portfolio. Today, I am confident and hopeful to join a fabulous team.",
    details: "",

    glink: "https://github.com/dhaedream/Portfolio",
    dlink: "https://portfolio-three-sandy-75.vercel.app/",
  },
];

export default ProjectData;
