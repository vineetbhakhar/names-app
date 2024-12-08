import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Name } from "./filteredNamesList";
import { Skeleton } from "./ui/skeleton";


interface NameCardProps {
  name: Name;
}

const NameCard = ({ name }: NameCardProps) => {
  return (
    <div className="">
      <Card className="m-4 p-3 shadow-md">
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

export function LoadingNameCard() {
  return (
    <Card className="m-4 p-3 shadow-md">
      <CardHeader>
        <CardTitle className="text-base"><Skeleton className="h-8 w-1/2"></Skeleton></CardTitle>
        <CardDescription className="line-clamp-2"><Skeleton className="h-10 w-full"></Skeleton></CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        <Skeleton className="h-20"></Skeleton>
      </CardContent>
    </Card>
  )
}

export default NameCard;
