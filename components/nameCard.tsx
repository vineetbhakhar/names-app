import { Car } from "lucide-react";
import { Name } from "../app/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface NameCardProps {
  name: Name;
}

const NameCard = ({ name }: NameCardProps) => {
  return (
    <div className="w-96 box-border">
      <Card className="m-4 p-3">
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
      </Card>
    </div>
  );
};

export default NameCard;
