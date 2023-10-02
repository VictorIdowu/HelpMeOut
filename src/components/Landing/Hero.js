import { Icon } from "@iconify/react";
import grid1 from "../../assets/grid.136a9256d16888900db1.svg"
import grid2 from "../../assets/grid.136a9256d16888900db0.svg.svg";
import hero1 from "../../assets/imgs/hero1.png"
import hero2 from "../../assets/imgs/hero2.png";
import hero3 from "../../assets/imgs/woman-using-smartphone-technology 2.png";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-12 mt-[3px] relative md:py-[158px] md:px-[100px] px-6 py-12 items-center bg-customWhite">
      <aside className="md:text-left z-30">
        <h1 className="md:text-xl lg:text-6xl font-bold mb-[20px]">
          Show Them Don't Just Tell
        </h1>
        <p className="text-[20px] mb-[48px]">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="text-customWhite mx-auto md:mx-0 flex gap-3 items-center bg-customBlue py-[22px] px-[24px] rounded-xl">
          Install HelpMeOut <Icon icon="solar:arrow-left-outline" rotate={2} />
        </button>
      </aside>
      <aside className="z-30 grid grid-cols-2 grid-rows-2 gap-[20px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={hero1}
          alt="hero1"
        />
        <img
          className="row-start-2 w-full h-full object-cover rounded-xl"
          src={hero2}
          alt="hero2"
        />
        <img
          className="col-start-2 row-span-2 w-full h-full object-cover rounded-xl"
          src={hero3}
          alt="hero3"
        />
      </aside>
      <aside className="flex flex-col ">
        <img
          className="hidden md:block absolute right-10 top-[100px] bottom-[73px]"
          src={grid1}
          alt="grid"
        />
        <img
          className="-translate-x-full hidden md:block absolute right-36 top-[380px] bottom-[73px]"
          src={grid2}
          alt="grid2"
        />
      </aside>
    </section>
  );
};

export default Hero;