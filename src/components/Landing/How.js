import React from "react";
import card from "../../assets/card.png";

const items = [
  {
    id: 1,
    heading: "Record Screen",
    text: "Click the 'Start Recording' button in our extension. Choose which part of your screen to capture and who you want to send it to.",
    logo: `${card}`,
  },
  {
    id: 2,
    heading: "Share Your Recording",
    text: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
    logo: `${card}`,
  },
  {
    id: 3,
    heading: "Learn Effortlessly",
    text: "Recipients can access your video effortlessly through the provided link with our user-friendly interface suitable for everyone.",
    logo: `${card}`,
  },
];

const How = () => {
  return (
    <div className="px-6 bg-white pb-2">
      <h1 className="bluetext font-semibold text-4xl text-center mt-20 pt-14">
        How it works
      </h1>
      <div className="grid md:grid-cols-3 my-16 gap-5 md:px-12 md:pb-8 ">
        {items.map((item) => (
          <div
            key={item.id}
            className="service-card flex flex-col justify-center items-center p-6 text-center m-bottom"
          >
            <span className="text-white bg w-12 h-12 pt-2 text-xl font-semibold rounded-full mb-4">
              {item.id}
            </span>
            <h2 className="text-xl mb-4 bluetext font-semibold">
              {item.heading}
            </h2>
            <p className="text-base greytext mb-5">{item.text}</p>
            <img src={item.logo} alt="" className="mb-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
