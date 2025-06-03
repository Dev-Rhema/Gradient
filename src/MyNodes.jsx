import infoIcon from "./assets/info_icon.svg";
import eyePlain from "./assets/eye_plain.svg";
import disconnectedIcon from "./assets/disconnected.svg";
import connectedIcon from "./assets/connected.svg";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NODES from "./Components/Nodes";

export default function MyNodes() {
  return (
    <>
      <section className="flex flex-col h-full gap-6 mt-6 ">
        <div className="grid  w-full grid-cols-11 justify-between bg-white  border border-[#e4e4e4] py-2 px-4 rounded-full max-md:hidden">
          <p className="text-xl font-semibold col-span-2 max-lg:text-base">
            Name
          </p>
          <p className="text-xl font-semibold  col-span-2 max-lg:text-base">
            Status
          </p>
          <p className="text-xl font-semibold flex items-center justify-center col-span-2 max-lg:text-base">
            <img
              src={infoIcon}
              className="w-6 opacity-50 hidden max-lg:text-base"
              alt=""
            />{" "}
            Today's Uptime
          </p>
          <p className="text-xl font-semibold flex items-center justify-center  col-span-2 max-lg:text-base">
            <img
              src={infoIcon}
              className="w-6 opacity-50 max-lg:hidden"
              alt=""
            />{" "}
            Today's Taps
          </p>
          <div className="col-span-2 flex justify-end">
            <p className="text-xl font-semibold   max-lg:text-base">
              Today's Rewards
            </p>
          </div>
          <span className="w-full  flex justify-end ">
            <img
              src={eyePlain}
              className=" col-span-1 w-6 max-lg:text-base"
              alt=""
            />
          </span>
        </div>
        <ul className="flex flex-col gap-4 max-md:hidden">
          {NODES.map((node_item) => (
            <NavLink
              to={node_item.id}
              key={node_item.id}
              className="grid w-full grid-cols-11 justify-between items-center bg-white  border border-[#e4e4e4] py-4 px-4 rounded-2xl hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 ease-in-out"
            >
              <div className="col-span-2 flex items-center gap-2">
                <span
                  className={
                    node_item.status == "Connected"
                      ? "w-10 h-10 bg-green-200 flex items-center justify-center rounded-full"
                      : "w-10 h-10 bg-red-200 flex items-center justify-center rounded-full"
                  }
                >
                  <img src={eyePlain} className="w-5" alt="" />
                </span>
                <span className="text-[14px]">
                  <p className=" font-semibold">{node_item.name}</p>
                  <p className="text-gray-500">{node_item.ip}</p>
                </span>
              </div>
              <div className="col-span-2 flex items-center gap-1">
                <img
                  src={
                    node_item.status == "Connected"
                      ? connectedIcon
                      : disconnectedIcon
                  }
                  alt=""
                />
                <p className="text-[14px] font-semibold">{node_item.status}</p>
              </div>
              <div className="flex w-full col-span-2 items-center justify-center ">
                <p
                  className={
                    node_item.status === "Disconnected"
                      ? "bg-red-50 border-red-200 border text-[14px] font-semibold py-2 px-4 rounded-full"
                      : "bg-green-50 border-green-200 border text-[14px] font-semibold py-2 px-4 rounded-full"
                  }
                >
                  {node_item.uptime}
                </p>
              </div>
              <div className="flex w-full col-span-2 items-center justify-center">
                <p className="text-xl font-bold">{node_item.taps}</p>
              </div>

              <div className="col-span-2 flex flex-col items-end ">
                <p className="text-xl font-bold">
                  + {node_item.points}{" "}
                  <span className="text-[14px] text-gray-500">pts</span>
                </p>
                <p className="text-[14px] text-gray-500">
                  Season 1 : {node_item.points}pts
                </p>
              </div>
              <span className="w-full  flex justify-end ">
                <img src={eyePlain} className=" col-span-1 w-6" alt="" />
              </span>
            </NavLink>
          ))}
        </ul>
        <ul className=" flex-col max-md:block hidden">
          {NODES.map((node_item) => (
            <div
              to={node_item.id}
              key={node_item.id}
              className="flex flex-col  bg-white  border border-[#e4e4e4]   rounded-2xl hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 ease-in-out gap-2 mb-4"
            >
              <div className="px-4 py-4 gap-2 flex flex-col">
                <div className=" flex items-center gap-2">
                  <span
                    className={
                      node_item.status == "Connected"
                        ? "w-10 h-10 bg-green-200 flex items-center justify-center rounded-full"
                        : "w-10 h-10 bg-red-200 flex items-center justify-center rounded-full"
                    }
                  >
                    <img src={eyePlain} className="w-5" alt="" />
                  </span>
                  <span className="text-[14px]">
                    <p className=" font-bold">{node_item.name}</p>
                    <p className="text-gray-500">{node_item.ip}</p>
                  </span>
                </div>
                <div className="flex justify-between items-center gap-1">
                  <p className="opacity-50">Status:</p>
                  <div className="flex gap-1">
                    <img
                      src={
                        node_item.status == "Connected"
                          ? connectedIcon
                          : disconnectedIcon
                      }
                      alt=""
                    />
                    <p className="text-[14px] font-semibold">
                      {node_item.status}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="opacity-50">Today's Uptime:</p>

                  <p
                    className={
                      node_item.status === "Disconnected"
                        ? "bg-red-50 border-red-200 border text-[14px] font-semibold py-1 px-2 rounded-full"
                        : "bg-green-50 border-green-200 border text-[14px] font-semibold py-1 px-2 rounded-full"
                    }
                  >
                    {node_item.uptime}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="opacity-50">Taps Received Today:</p>

                  <p>{node_item.taps}</p>
                </div>
              </div>
              <NavLink
                to={node_item.id}
                key={node_item.id}
                className="w-full flex items-center justify-center p-4 border-t border-gray-200 font-bold"
              >
                More Details
              </NavLink>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
}
