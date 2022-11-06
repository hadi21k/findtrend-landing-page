import Tab5 from "../../assets/tab5.png";
import Arrow from "../../assets/arrow black.svg";

const NewTab = () => {
  return (
    <div
      id="how-it-works"
      className="flex min-h-screen items-center bg-primary py-6"
    >
      <div className="flex w-full flex-col items-center space-y-20">
        <h1 className="pt-8 text-center text-4xl font-bold text-black md:text-6xl">
          Open new tabs is sh*t
        </h1>
        <div className="relative grid h-[190px] w-full place-items-center rounded-lg bg-white sm:w-[502px]">
          <img src={Tab5} alt="tab5" className="h-20" />
          <div className="absolute top-full left-6 flex h-24 w-24 -translate-y-1/2 flex-col items-center md:top-1/2 md:-left-24">
            <img src={Arrow} alt="arrow" className="h-7 -rotate-90" />
            <span className="mr-4 rotate-12 text-center font-maybe text-xs">
              solution for discover a trend
            </span>
          </div>
          <div className="absolute top-0 right-6 flex h-24 w-24 -translate-y-1/2 flex-col items-start md:top-1/2 md:-right-28">
            <span className="mr-4 rotate-12 text-center font-maybe text-xs">
              You just need one tab now
            </span>
            <img src={Arrow} alt="arrow" className="h-7 rotate-90" />
          </div>
        </div>
        <div className="max-w-2xl text-center text-sm font-bold text-black">
          <p>
            A solution for your browser tabs and don’t make your device get
            slower over time. Get ease and faster to discover a trend with just
            one tab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewTab;
