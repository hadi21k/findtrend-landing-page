import Brand1 from "../../assets/brand1.png";
import Brand2 from "../../assets/brand2.png";
import Brand3 from "../../assets/brand3.png";
import Brand4 from "../../assets/brand4.png";
import Brand5 from "../../assets/brand5.png";
import Brand6 from "../../assets/brand6.png";
import Brand7 from "../../assets/brand7.png";
import Brand8 from "../../assets/brand8.png";
import Brand9 from "../../assets/brand9.png";
import Brand10 from "../../assets/brand10.png";
import Brand11 from "../../assets/brand11.png";
import Brand12 from "../../assets/brand12.png";
import Brand13 from "../../assets/brand13.png";
import Brand14 from "../../assets/brand14.png";
import Brand15 from "../../assets/brand15.png";
import Brand16 from "../../assets/brand16.png";
import Title from "../../ui/Title";

const Companies = () => {
  return (
    <div className="bg-white pb-20">
      <div className="container mx-auto grid place-items-center space-y-6">
        <Title text="Findtrend make +1000 Startup grow" />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand1} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand2} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand3} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand4} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand5} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand6} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand7} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand8} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand9} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand10} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand11} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand12} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand13} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand14} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand15} alt="brand" className="h-[30px]" />
          </div>
          <div className="grid place-items-center rounded-lg bg-gray-3 px-12 py-4">
            <img src={Brand16} alt="brand" className="h-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
