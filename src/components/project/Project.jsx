const Project = (props) => {
  return (
    <div className="projects_single-container">
      <img className="projects_img" src={props.details.img} alt="boredApe" />
      <div className="projects_description-wrapper">
        <h3>{props.details.title}</h3>
        <p>{props.details.description}</p>
      </div>
    </div>
  );
};

export default Project;
