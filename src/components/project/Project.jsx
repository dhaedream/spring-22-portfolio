import boredApe from "../../assets/bored-ape.png";

const Project = (props) => {
  return (
    <div className="projects_single-container">
      <img className="projects_img" src={boredApe} alt="boredApe" />
      <div className="projects_description-wrapper">
        <h3>{props.details.title}</h3>
        <p>{props.details.description}</p>
      </div>
    </div>
  );
};

export default Project;
