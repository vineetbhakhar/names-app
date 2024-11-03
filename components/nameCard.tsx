import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Name } from "../app/page";
import { Label } from "./ui/label";


interface NameCardProps {
  name: Name;
}

const NameCard = ({ name }: NameCardProps) => {
  return (
    <div className="">
      <Card className="name-card shadow-md">
        <CardHeader>
          <CardTitle className="text-base">{name.name}</CardTitle>
          <CardDescription className="line-clamp-2">{name.meaning}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Gender</Label>
              <div>{name.gender}</div>
            </div>
            <div className="grid gap-2">
              <Label>Origin</Label>
              <div>{name.origin}</div>
            </div>

            <div className="grid gap-2 col-span-2">
              <Label>Languages</Label>
              <div>{name.languages.join(", ")}</div>
            </div>
            <div className="grid gap-2 col-span-2">
              <Label>Qualities</Label>
              <div>{name.qualities.join(", ")}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div >
  );
};

export default NameCard;
