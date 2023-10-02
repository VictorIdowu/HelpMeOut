import Features from "../components/Landing/Features";
import Footer from "../components/Landing/Footer";
import How from "../components/Landing/How";
import Hero from "../components/Landing/Hero";
import Navbar from "../components/Landing/Navbar";

const Landing = () => {
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Hero />
      <Features />
      <How />
      <Footer />
    </div>
  );
};

export default Landing;
