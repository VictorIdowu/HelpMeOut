import Features from "../components/Landing/Features";
import Footer from "../components/Landing/Footer";
import Works from "../components/Landing/Works";
import Hero from "../components/Landing/Hero";
import Navbar from "../components/Landing/Navbar";

const Landing = () => {
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Hero />
      <Features />
      <Works />
      <Footer />
    </div>
  );
};


export default Landing;