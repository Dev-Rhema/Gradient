import infoIcon from "./assets/info_icon.svg";
import upTrend from "./assets/trendup.svg";
import refIcon from "./assets/ref_icon.svg";
import giftIcon from "./assets/gift.svg";
import earnIcon from "./assets/earn.svg";
import trophyIcon from "./assets/trophy.svg";
import searchIcon from "./assets/search.svg";

const REFGRID = [
  {
    id: "01",
    title: "Share the Love",
    icon: refIcon,
    desc: "Sign up and invite your friends with your referral code.",
  },
  {
    id: "02",
    title: "Stay Online",
    icon: searchIcon,
    desc: "Your referral will become qualified once your referee achieves 72 hours of uptime.",
  },
  {
    id: "03",
    title: "Get Rewarded",
    icon: trophyIcon,
    desc: "20 points will be awarded for both parties of a qualified referral.",
  },
  {
    id: "04",
    title: "Unlimited Bonus",
    icon: earnIcon,
    desc: "Earn a perpetual 10% bonus on all your referees' rewards with no upper limit!",
  },
];

export default function Referrals() {
  return (
    <>
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <div className=" rounded-3xl bg-white  border border-[#e4e4e4] p-5 flex flex-col justify-between gap-16">
            <div className="flex items-center gap-2">
              <img
                src={upTrend}
                alt=""
                className="size-10 bg-purple-200 p-2 rounded-full  max-lg:size-8"
              />
              <p className="text-xl  max-lg:text-base">Season 1 Rewards</p>
              <img
                src={infoIcon}
                alt=""
                className="size-6 opacity-50  max-lg:size-4"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-400 text-xl  max-lg:text-base">Total</p>
                <h1 className="text-4xl font-bold  max-lg:text-2xl">31.15</h1>
                <p className="text-gray-400 text-xl  max-lg:text-base">
                  Points
                </p>
              </div>
              <div className="flex flex-col text-left  w-1/2">
                <p className="text-gray-400 text-xl  max-lg:text-base">Today</p>
                <h1 className="text-4xl font-bold  max-lg:text-2xl">7.06</h1>
                <p className="text-gray-400 text-xl  max-lg:text-base">
                  Points
                </p>
              </div>
            </div>
          </div>
          <div className=" rounded-3xl bg-white  border border-[#e4e4e4] p-5 flex flex-col justify-between gap-16  max-lg:p-4">
            <div className="flex items-center gap-2 ">
              <img
                src={refIcon}
                alt=""
                className="size-10 bg-lime-200 p-2 rounded-full max-lg:size-8"
              />
              <p className="text-xl  max-lg:text-base">Referrals</p>
              <img
                src={infoIcon}
                alt=""
                className="size-6 opacity-50 max-lg:size-4"
              />
            </div>
            <div className="grid grid-cols-3 justify-between">
              <div>
                <p className="text-gray-400 flex gap-1 items-center text-xl  max-lg:text-sm">
                  Qualified
                  <img
                    src={infoIcon}
                    className="size-6 opacity-50  max-lg:hidden"
                    alt=""
                  />
                </p>
                <h1 className="text-4xl font-bold  max-lg:text-2xl">2</h1>
              </div>
              <div>
                <p className="text-gray-400 flex gap-1 items-center text-xl  max-lg:text-sm">
                  Pending
                  <img
                    src={infoIcon}
                    className="size-6 opacity-50  max-lg:hidden"
                    alt=""
                  />
                </p>
                <h1 className="text-4xl font-bold max-lg:text-2xl">0</h1>
              </div>
              <div>
                <p className="text-gray-400 flex gap-1 items-center text-xl max-lg:text-sm">
                  Referral Code
                  <img
                    src={infoIcon}
                    className="size-6 opacity-50 max-lg:hidden"
                    alt=""
                  />
                </p>
                <h1 className="text-4xl font-bold max-lg:text-2xl">0K2EU3</h1>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className=" rounded-3xl bg-white  border border-[#e4e4e4] p-4 grid gap-6 justify-between grid-cols-2 max-lg:grid-cols-1">
          <div className="bg-gradient-to-br from-lime-200 via-[#dddddd] to-purple-300 rounded-3xl px-6 py-20 flex flex-col gap-6 max-lg:px-4 max-lg:py-16 max-lg:gap-4">
            <h1 className="text-5xl font-semibold text-purple-800 max-lg:text-2xl">
              Get 20 Points
            </h1>
            <p className="text-purple-800 text-3xl max-lg:text-xl">
              +10% Bonus Rewards
            </p>
            <form className="w-full flex gap-6 max-lg:flex-col max-lg:gap-4">
              <input
                type="text"
                placeholder="Freind's Email Address"
                className="bg-white px-6 py-2 w-full rounded-full"
              />
              <button className="bg-black text-white rounded-full px-6 py-2">
                Send
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-4 px-6 py-8 max-lg:px-4 max-lg:py-6">
            <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-200 size-10 rounded-full max-lg:size-10">
              <img src={giftIcon} className="" alt="" />
            </div>
            <p className="text-3xl text-gray-600 max-lg:text-2xl">
              Both parties get{" "}
              <span className="text-purple-500">20 points</span> for every
              qualified referral & The referer earns{" "}
              <span className="text-purple-500">a perpetual 10% bonus</span>{" "}
              from all referees' rewards.
            </p>
            <p className="text-xl max-lg:text-base">
              Drop your friend's email on the left and we're happy to invite
              them with your unique referral code.
            </p>
          </div>
        </div>
        <div className="  grid gap-6 justify-between grid-cols-2 max-lg:grid-cols-1">
          {REFGRID.map((gridItem) => (
            <div className="flex rounded-3xl bg-white  border border-[#e4e4e4] py-12 px-10 items-center max-lg:py-4 max-lg:px-4">
              <span className="text-7xl text-gray-200 mr-12 max-lg:text-6xl max-lg:mr-2">
                {gridItem.id}
              </span>
              <div className="gap-2 flex flex-col">
                <span className="flex items-center text-purple-500 text-2xl gap-2 max-lg:text-xl">
                  <img
                    src={gridItem.icon}
                    className="size-6 opacity-60 max-lg:size-4"
                    alt=""
                  />
                  <p>{gridItem.title}</p>
                </span>
                <p className="text-xl max-lg:text-base">{gridItem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
