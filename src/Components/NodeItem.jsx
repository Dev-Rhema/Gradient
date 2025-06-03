import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NODES from "./Nodes.jsx";
import eyePlain from "../assets/eye_plain.svg";
import rewardGreen from "../assets/reward_green.svg";
import rewardPurple from "../assets/reward_purple.svg";
import disconnectedIcon from "../assets/disconnected.svg";
import connectedIcon from "../assets/connected.svg";
import infoIcon from "../assets/info_icon.svg";
import leftArrow from "../assets/left_arrow.svg";
import RewardsGraph from "./RewardsGraph.jsx";

export default function NodeItem() {
  const { nodeId } = useParams();
  const navigate = useNavigate();
  const node = NODES.find((n) => n.id === nodeId);

  if (!node) {
    return <p>Node not found</p>;
  }

  return (
    <>
      <NavLink to={"/"}>
        <button
          className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={leftArrow} className="size-4" alt="" />
          <p className="text-[16px] font-semibold">Back</p>
        </button>
      </NavLink>
      <section className="grid grid-cols-5 h-full gap-6 mt-6 w-full max-lg:grid-cols-1 max-lg:gap-0 ">
        <div className="col-span-2 w-full bg-white border border-[#e4e4e4] h-full flex flex-col gap-5 rounded-3xl overflow-hidden p-8 max-lg:p-6 max-lg:gap-4">
          <div className="flex items-center gap-2">
            <span
              className={
                node.status == "Connected"
                  ? "w-16 h-16 bg-lime-200 flex items-center justify-center rounded-2xl"
                  : "w-16 h-16 bg-red-200 flex items-center justify-center rounded-2xl"
              }
            >
              <img src={eyePlain} className="w-10 opacity-60" alt="" />
            </span>
            <span>
              <h2 className="text-xl font-semibold max-lg:text-base max-lg:font-bold">
                {node.name}
              </h2>
              <span className="flex items-center gap-1">
                <img
                  className="w-5"
                  src={
                    node.status == "Disconnected"
                      ? disconnectedIcon
                      : connectedIcon
                  }
                  alt=""
                />
                <p>{node.status}</p>
                <img src={infoIcon} className="w-5 opacity-50" alt="" />
              </span>
            </span>
          </div>
          <div className=" rounded-3xl  border border-[#e4e4e4] p-4 flex flex-col justify-between gap-8 ">
            <div className="flex items-center gap-2">
              <img
                src={rewardGreen}
                alt=""
                className="size-8  bg-lime-200 p-2 rounded-full"
              />
              <p className="text-m font-semibold">Season 1 Rewards</p>
              <img src={infoIcon} alt="" className="size-5 opacity-50" />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold max-lg:text-2xl">
                {node.points}
              </h1>
              <p className="text-gray-400">Points</p>
            </div>
          </div>
          <div className=" rounded-3xl  border border-[#e4e4e4] p-4 flex flex-col justify-between gap-8 ">
            <div className="flex items-center gap-2">
              <img
                src={rewardGreen}
                alt=""
                className="size-8  bg-purple-200 p-2 rounded-full"
              />
              <p className="text-m font-semibold">Today's Rewards</p>
              <img src={infoIcon} alt="" className="size-5 opacity-50" />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold max-lg:text-2xl">
                {node.points}
              </h1>
              <p className="text-gray-400">Points</p>
            </div>
          </div>
          <div className=" rounded-3xl bg-[#f2f2f2] p-4 flex flex-col justify-between gap-8 ">
            <span className="flex justify-between opacity-50">
              <p className="flex items-center">
                Total Data Transmitted:{" "}
                <img src={infoIcon} alt="" className="size-5 " />
              </p>
              <p> 1 mb</p>
            </span>
            <span className="flex justify-between opacity-50">
              <p className="flex items-center">
                IP Address: <img src={infoIcon} alt="" className="size-5 " />
              </p>
              <p>{node.ip}</p>
            </span>
          </div>
          <div className=" rounded-3xl bg-[#f2f2f2] p-4 flex flex-col justify-between gap-8 ">
            <span className="flex justify-between opacity-50">
              <p className="flex items-center">
                Node ID: <img src={infoIcon} alt="" className="size-5 " />
              </p>
              <p>{node.id}</p>
            </span>
            <span className="flex justify-between opacity-50">
              <p className="flex items-center">
                Activation Date:{" "}
                <img src={infoIcon} alt="" className="size-5 " />
              </p>
              <p>{node.date}</p>
            </span>
          </div>
        </div>
        <div className="col-span-3 grid grid-row-2 w-full h-full overflow-hidden gap-6">
          <div className="w-full bg-white border border-[#e4e4e4] rounded-3xl overflow-hidden row-span-2  p-8 justify-between flex flex-col max-lg:mt-6">
            <span>
              <p className="flex items-center">
                Uptime: <img src={infoIcon} alt="" className="size-5 " />
              </p>
            </span>
            <div className="h-full w-full">
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
          <div className="w-full bg-white border border-[#e4e4e4] rounded-3xl overflow-hidden row-span-1  p-8 justify-between flex flex-col">
            <span>
              <p className="flex items-center">
                Taps Received: <img src={infoIcon} alt="" className="size-5 " />
              </p>
            </span>
            <div className="h-full w-full">
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
                data={[1, 2, 5, 6, 8, 4, 3, 5, 1, 2, 5, 3, 2]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
