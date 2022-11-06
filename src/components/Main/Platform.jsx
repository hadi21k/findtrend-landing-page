import Social1 from "../../assets/social media1.svg";
import Social2 from "../../assets/social media2.svg";
import Social3 from "../../assets/social media3.svg";
import Social4 from "../../assets/social media4.svg";
import Social5 from "../../assets/social media5.png";
import Social6 from "../../assets/social media6.png";
import Social7 from "../../assets/social media7.png";
import Social8 from "../../assets/social media8.png";
import Tweet1 from "../../assets/tweet 1.webp";
import Tweet2 from "../../assets/tweet 2.webp";
import Tweet3 from "../../assets/tweet 3.webp";
import Title from "../../ui/Title";

const Platform = () => {
  return (
    <div id="solution" className="bg-gray-3 py-12">
      <div className="container mx-auto grid place-items-center space-y-6">
        <Title text="All platform in one place" />
        <div className="px-12">
          <div className="grid grid-cols-4 gap-10 lg:grid-cols-8">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-2xl bg-white">
              <img
                src={Social8}
                alt="social icon"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div className="grid h-[80px] w-[80px] place-items-center rounded-2xl bg-primary">
              <img
                src={Social7}
                alt="social icon"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div className="grid h-[80px] w-[80px] place-items-center rounded-2xl bg-white">
              <img
                src={Social6}
                alt="social icon"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div className="grid h-[80px] w-[80px] place-items-center rounded-2xl bg-white">
              <img
                src={Social5}
                alt="social icon"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div className="grid h-[80px] w-[80px] place-items-center rounded-2xl bg-white">
              <img
                src={Social4}
                alt="social icon"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div className="grid h-[80px] w-[80px] place-items-center rounded-2xl bg-white">
              <img
                src={Social3}
                alt="social icon"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div className="grid h-[80px] w-[80px] place-items-center rounded-2xl bg-white">
              <img
                src={Social2}
                alt="social icon"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div className="grid h-[80px] w-[80px] place-items-center rounded-2xl bg-white">
              <img
                src={Social1}
                alt="social icon"
                className="h-[50px] w-[50px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-20 lg:px-32">
          <img src={Tweet1} alt="tweet" />
          <img src={Tweet2} alt="tweet" />
          <img src={Tweet3} alt="tweet" />
        </div>
      </div>
    </div>
  );
};

export default Platform;
