import Button from "../../ui/Button";
import Arrow from "../../assets/arrow white.svg";
import Tab1 from "../../assets/tab1.png";
import Tab2 from "../../assets/tab2.png";
import Tab3 from "../../assets/tab3.png";
import Tab4 from "../../assets/tab4.png";
import BgImage from "../../ui/BgImage";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const animation = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child1 = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };

  const child2 = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative min-h-[calc(100vh-40px)] pb-[40px] pt-[65px]">
      <BgImage />
      <div className="flex flex-col items-center space-y-12 pt-12">
        <motion.ul
          variants={animation}
          initial="hidden"
          animate="show"
          className="z-40 space-y-4"
        >
          <motion.li
            variants={child1}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center text-4xl font-bold text-white md:text-5xl lg:text-7xl"
          >
            Minimize your tabs.
          </motion.li>
          <motion.li
            variants={child2}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center text-4xl font-bold text-white md:text-5xl lg:text-7xl"
          >
            Find the trends!
          </motion.li>
          <p className="px-2 text-center text-xs font-semibold text-gray sm:text-sm">
            Don't let your computer memories consumes all of those browser tabs.
            <br />
            Findtrend let you gathers all of your favorite websites into one
            place.
          </p>
        </motion.ul>
        <div className="relative">
          <Link to="/login">
            <Button text="Get started" color="primary" />
          </Link>
          <div className="max-md:hidden">
            <img
              src={Arrow}
              alt="arrow"
              className="absolute top-1 -right-12 rotate-90 transform"
            />
            <div className="absolute -right-32 -top-6 rotate-[15deg] transform text-xs font-bold tracking-widest text-white">
              All research <br /> start from here
            </div>
          </div>
        </div>
        <div className="flex flex-col max-md:-space-y-4 md:bottom-6 md:flex-row md:-space-x-14">
          <img
            src={Tab1}
            alt="tab1"
            className="z-30 h-20 transform md:h-16 md:-rotate-[8deg] lg:h-20"
          />
          <img
            src={Tab2}
            alt="tab2"
            className="z-20 h-20 transform md:h-16 md:rotate-[4deg] lg:h-20"
          />
          <img
            src={Tab3}
            alt="tab3"
            className="z-10 h-20 transform md:h-16 md:rotate-[-4deg] lg:h-20"
          />
          <img
            src={Tab4}
            alt="tab4"
            className="h-20 transform md:h-16 md:rotate-[8deg] lg:h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
