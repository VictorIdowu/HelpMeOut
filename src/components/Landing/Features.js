import React from "react";
import video from "../../assets/Video.png"
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";

const features = [
  {
    id: 1,
    logo: `${home1}`,
    heading: "Simple Screen Recording",
    text: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
  },
  {
    id: 2,
    logo: `${home2}`,
    heading: "Easy-to-Share URL",
    text: "Share your recordings instantly with a single link. No attachments, no downloads.",
  },
  {
    id: 3,
    logo: `${home3}`,
    heading: "Revisit Recordings",
    text: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
  },
];

const Features = () => {
  return (
    <div className="px-6 mt-20 bg-white">
      <div className="flex gap-2 flex-col justify-center items-center">
        <h1 className="bluetext font-bold text-3xl mt-16">Features</h1>
        <p className="greytext ">Key Highlights of Our Extension</p>
      </div>
      <div className=" pb-12 flex gap-14 flex-col md:flex-row justify-center items-center text-center md:text-left mt-14 md:mt-2 md:pr-16 md:pl-16 ">
        <div className="md:w-1/2 flex flex-col gap-14">
          {features.map((feature) => (
            <div key={feature.id} className=" md:flex gap-4 m-bottom">
              <div className="center-image-container">
                <img
                  src={feature.logo}
                  alt="icon"
                  className="center-images mb-3 w-8 h-8"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="bluetext text-xl font-medium">
                  {feature.heading}
                </h1>
                <p className="text-base greytext">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2  md:py-8 md:mt-12">
          <img className="" src={video} alt="vid-img" />
        </div>
      </div>
    </div>
  );
};

export default Features;