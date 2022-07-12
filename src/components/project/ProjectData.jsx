import boredApe from "../../assets/bored-ape.png";
import greeter from "../../assets/greeter.png";
import nft from "../../assets/nft.png";
import codeProject from "../../assets/solidity-code.png";

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
      "The idea was to create a community where NFT's can be customized, minted, and traded. If I could, I would build a 3D/VR space... maybe next project. For now, I built a front-end web app capable of customizing the color of a cute alien I found online. My biggest challenge was incorporating the 3D canvas inside of the react-dom 'pages'. I was unable to. As of 2022, this one project is technically two because I deployed things seperately.",
    details:
      "To connect this app to any blockchain, I would have to create + deploy a smart-contract. Then, I can create a user interface with functions that will call methods from my contract on the blockchain. First, I will have to plan out how the community will behave.",
    glink: "https://github.com/dhaedream/minting-app-front-end",
    dlink: "https://custom-mint-front-end-13m140z6d-paintincode.vercel.app/",
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
    img: codeProject,
    title: "AI CLONE",
    tech: "React",
    description:
      "With a nice understanding of the blockchain, I have been coding Smart Contracts using solidity on test networks.",
    details: "",
    glink: "https://github.com/dhaedream/modern-ui-clone/settings",
    dlink: "",
  },
];

export default ProjectData;
