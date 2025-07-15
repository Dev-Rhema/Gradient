import RewardBox from "./Components/RewardBox";
import rewardGreen from "./assets/reward_green.svg";
import rewardPurple from "./assets/reward_purple.svg";
import infoIcon from "./assets/info_icon.svg";
import purpleRibbon from "./assets/big_ribbon.svg";
import RewardsGraph from "./Components/RewardsGraph";
import { NavLink } from "react-router-dom";

export default function Overview() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-10 max-lg:text-3xl max-md:text-2xl max-md:mb-4">
        GM, Dev Rhema!👋🏼
      </h1>
      <section className="grid grid-rows-5 gap-6 rounded-3xl h-full max-lg:gap-4">
        <div className="grid grid-cols-3 row-span-2 gap-6 max-md:grid-cols-1 max-md:gap-0 max-lg:gap-4">
          <div className="col-span-2 w-full h-full  grid grid-cols-2 gap-6 max-md:text-base max-md:gap-2 max-lg:gap-4">
            <div className=" rounded-3xl bg-white  border border-[#e4e4e4] p-5 flex flex-col justify-between max-md:gap-6 max-lg:p-4 ">
              <div className="flex items-center gap-2 max-lg:gap-1.5">
                <img
                  src={rewardGreen}
                  alt=""
                  className="size-10 bg-lime-200 p-2 rounded-full max-md:size-8 max-lg:size-8 "
                />
                <p className="text-xl max-md:text-base max-sm:text-sm max-lg:text-base">
                  Season 1 Rewards
                </p>
                <img
                  src={infoIcon}
                  alt=""
                  className="size-6 opacity-50 max-sm:hidden max-lg:size-4"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold max-md:text-2xl">31.15</h1>
                <p className="text-gray-400">Points</p>
              </div>
            </div>

            <div className=" rounded-3xl bg-white  border border-[#e4e4e4] p-5 flex flex-col justify-between max-lg:p-4">
              <div className="flex items-center gap-2">
                <img
                  src={rewardPurple}
                  alt=""
                  className="size-10 bg-purple-200 p-2 rounded-full  max-lg:size-8"
                />
                <p className="text-xl max-md:text-base max-sm:text-sm max-lg:text-base">
                  Daily Rewards
                </p>
                <img
                  src={infoIcon}
                  alt=""
                  className="size-6 opacity-50 max-sm:hidden max-lg:size-4"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold max-md:text-2xl">6.5</h1>
                <p className="text-gray-400">Points</p>
              </div>
            </div>
          </div>

          <div className=" rounded-3xl bg-white  border border-[#e4e4e4] p-5 flex justify-between flex-col max-sm:text-sm max-md:mt-4 max-lg:gap-2 max-lg:p-4">
            <div className="flex justify-between items-center">
              <p className="text-xl max-lg:text-base">Node Status</p>
              <NavLink
                to={"/my-nodes"}
                className="bg-gray-200 px-4 py-1.5 rounded-full"
              >
                Manage
              </NavLink>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center border border-[#e4e4e4] px-4 py-2 rounded-full w-full opacity-60 ">
                <p>Nodes</p>
                <p className="w-1/2  text-center max-lg:w-full max-lg:text-right max-lg:text-base">
                  Sentry Node
                </p>
              </div>
              <div className="flex justify-between items-center bg-[#f1f1f1] px-4 py-2 rounded-full ">
                <p className="font-semibold">Total:</p>
                <p className="font-bold text-xl w-1/2  text-center max-md:text-right max-md:text-base max-lg:w-full max-lg:text-right">
                  34
                </p>
              </div>
              <div className="flex justify-between items-center bg-[#f1f1f1] px-4 py-2 rounded-full ">
                <p className="font-semibold">Connected:</p>
                <p className="font-bold text-xl w-1/2  text-center max-md:text-right max-md:text-base max-lg:w-full max-lg:text-right">
                  2
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 h-full w-full grid-cols-3 grid gap-6 max-md:grid-cols-1 max-md:gap-0">
          <div className=" h-full w-full col-span-2 rounded-3xl bg-white  border border-[#e4e4e4] p-4 flex flex-col justify-between">
            <div>
              <p className="text-2xl flex items-center gap-2 max-md:text-xl max-md:gap-1">
                Rewards Stats{" "}
                <img
                  src={infoIcon}
                  alt=""
                  className="w-6 opacity-50 max-md:w-4 "
                />
              </p>
            </div>
            <div>
              <RewardsGraph
                labels={[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                  "Jan",
                ]}
                data={[10, 20, 5, 16, 18, 40, 30, 50, 10, 20, 5, 35, 26]}
              />
            </div>
          </div>
          <div className="  h-full rounded-3xl bg-white  border border-[#e4e4e4] p-5 max-md:mt-4">
            <div className="flex items-center flex-col bg-[#f1f1f1] rounded-2xl h-full w-full px-5 py-4 gap-1">
              <p className="w-full items-start ">TIme-Limited</p>
              <img
                src={purpleRibbon}
                className="w-[200px] max-md:w-[120px]"
                alt=""
              />
              <h3 className="text-purple-600 font-semibold text-2xl max-md:text-xl">
                Get 1,000 EXP
              </h3>
              <p className="max-md:text-sm">Follow us on X(Twitter)</p>
              <button className="w-full bg-black text-white py-2 rounded-full ma">
                Click to join
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
