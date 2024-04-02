import { type FC } from "react";
import { User } from "@/lib/re-export";

const user: User = {
  name: "John",
  age: 30,
};

const Home: FC = () => {
  console.log(user);

  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
      </div>
    </div>
  );
};

export default Home;
