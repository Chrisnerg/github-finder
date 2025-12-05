import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
  return (
    <Card className="bg-base-100 flex gap-x-0 items-center w-4/5 border-none">
      <CardHeader>
        <Avatar className="w-16 h-auto">
          <AvatarImage src={user.avatar_url} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <p className="text-white text-xl">{user.login}</p>
        <Link to="/user">
          <p className="text-sm text-gray-500 hover:text-gray-600">
            View profile
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};

export default UserCard;
