import Bg from "../assets/Bg-hero/Ornament-1.svg";

const BgImage = () => {
  return (
    <img
      src={Bg}
      alt="bg"
      className="absolute -top-[65px] inset-0 z-0 h-screen w-full object-cover lg:px-5"
    />
  );
};

export default BgImage;
