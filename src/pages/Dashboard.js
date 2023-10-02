import Files from "../components/Dashboard/Files";
import Hero from "../components/Dashboard/Hero";

const Dashboard = () => {
  return (
    <div className="">
      <Hero />
      <div className="border-t-[1px] border-gray-300 "></div>
      <Files />
    </div>
  );
};

export default Dashboard;