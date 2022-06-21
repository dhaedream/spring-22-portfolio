import boredApe from "../../assets/bored-ape.png";

const Project = () => {
  return (
    <div className="projects_single-container">
      <img className="projects_img" src={boredApe} alt="boredApe" />
      <div className="projects_description-wrapper">
        <h3>BORED APE CLONE</h3>
        <p>
          This is a clone of a very popular NFT website. Built using React, just
          like this website;-)
        </p>
      </div>
    </div>
  );
};

export default Project;
