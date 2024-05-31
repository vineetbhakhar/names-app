import { Name } from "../app/page";

interface NameCardProps {
  name: Name;
}

const NameCard: React.FC<NameCardProps> = ({ name }) => {
  return (
    <div className="name-card">
      <h2>
        <b>{name.name}</b>
      </h2>{" "}
      {/* Display the name */}
      <p>Gender: {name.gender}</p> {/* Display the gender */}
      <p>Origin: {name.origin}</p> {/* Display the origin */}
      {/* Display the languages as a comma-separated list */}
      <p>Languages: {name.languages.join(", ")}</p>
      {/* <p>Meaning: {name.meaning}</p> {/* Display the meaning */}
      {/* Display the qualities as a comma-separated list */}
      <p>Qualities: {name.qualities.join(", ")}</p>
    </div>
  );
};

export default NameCard;
