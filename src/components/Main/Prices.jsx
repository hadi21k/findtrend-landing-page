import Radio from "../../ui/Radio";
import Title from "../../ui/Title";
import { CheckIcon } from "@heroicons/react/20/solid";
import Button from "../../ui/Button";

const Prices = () => {
  const date = [
    {
      type: "Personal",
      description: "Special first packet for all",
      price: 8,
      features: [
        "Up to 5 page each group",
        "Up to 10 group page",
        "5 Days group page saved",
      ],
      buttonColor: "bg-primary",
      bg: "bg-white",
      text: "text-black",
    },
    {
      type: "Regular",
      description: "Recommended for personal pro",
      price: 20,
      features: [
        "Up to 15 page each group",
        "Download page up to 20 page",
        "Up to 10 group page",
        "15 Days group page saved",
      ],
      buttonColor: "bg-black",
      bg: "bg-primary",
      text: "text-white",
    },
    {
      type: "Premium",
      description: "Packet for Startup & Company",
      price: 48,
      features: [
        "Unlimited group pages",
        "Unlimited download page",
        "Unlimited page each group",
        "Customize sorting group pages",
        "Customize group page name",
        "30 Days group page saved",
      ],
      buttonColor: "bg-primary",
      bg: "bg-white",
      text: "text-black",
    },
  ];
  return (
    <div id="pricing" className="bg-black py-16 text-white">
      <div className="container mx-auto space-y-6 px-10">
        <Title text="Get your best deal" />
        <div className="flex items-center justify-center space-x-3">
          <h1 className="text-lg">Monthly</h1>
          <Radio />
          <h1 className="text-lg">Yearly</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {date.map(
            (
              { type, description, price, features, buttonColor, bg, text },
              index
            ) => (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-lg py-5 px-3 text-black ${bg}`}
              >
                <div>
                  <div className="space-y-2 border-b border-gray pb-8">
                    <h1 className="text-3xl font-bold">{type}</h1>
                    <p className="text-xs font-semibold">{description}</p>
                  </div>
                  <div className="space-y-10 px-3 pt-6">
                    <h1 className="text-5xl font-bold">
                      ${price}{" "}
                      <span className="text-sm font-semibold">/Month</span>
                    </h1>
                    <div className="space-y-2 font-semibold">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <CheckIcon className="h-4 w-4" />
                          <p className="text-xs font-semibold">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex items-center justify-center">
                  <button
                    className={`w-3/4 rounded-2xl py-3 ${buttonColor} ${text}`}
                  >
                    Start free trial
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Prices;
