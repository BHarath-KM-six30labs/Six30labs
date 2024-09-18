
import { useLocation } from "react-router-dom";

const ViewMore = () => {
  const location = useLocation();
  const { project } = location.state || {};

  if (!project) {
    return <div>No project details available.</div>;
  }

  return (
    <div className="p-4">
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.name} />
      <p>{project.description}</p>
      <p>{project.details}</p>
    </div>
  );
};

export default ViewMore;
