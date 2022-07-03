import boredApe from "../../assets/bored-ape.png";
import greeter from "../../assets/greeter.png";
import nft from "../../assets/nft.png";
import codeProject from "../../assets/solidity-code.png";

const ProjectData = [
  {
    key: 0,
    img: boredApe,
    title: "BORED APE CLONE",
    tech: "React",
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
    tech: "React, React-Three-Fiber, GLFT Models",
    description:
      "I plan to import 3d models that can be customized and minted as an NFT. I am currently working on the front end.",
    details: "",
    glink: "https://github.com/dhaedream/minting-app-front-end",
    dlink: "",
  },
  {
    key: 2,
    img: greeter,
    title: "GREETER DAPP",
    tech: "React, Hardhat, Ethers.js, Typescript, Tailwind",
    description:
      "Greeter Dapp is a decentralized application built with react, and hardhat. A standard greeter smart contract was deployed to the Goereli testnet at : {##} . With every deployment, hardhat auto generates ABI + Bytecode files . I used the ABI file to call methods from the contract. The front-end was built for anyone connected to Goerili on Metamask to retrieve and update the state of the contract on the Goerili test Ethereum Blockchain.",
    details:
      "For the fron end, I envisioned a futuristic space station with a block chain generator. That estetic came togather with a vibrant + dark background that moves through space. Adding just a little transparency to the main card enhances the futuristic ui . I may update the DApp to allow light sensitive users to freeze the background.",
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
