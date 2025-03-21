import type { NextPage } from "next";
import CircleLayout from "@/app/components/CircleLayout/CircleLayout";
import Toggle from "@/app/components/ToggleTheme/ToggleTheme";

const Home: NextPage = () => {
  return (
    <>
      <Toggle />
      <CircleLayout />
    </>
  );
};

export default Home;
