import exitIcon from "./assets/exit.svg";
import xIcon from "./assets/x_icon.svg";
import discord from "./assets/discord.svg";
import connectedIcon from "./assets/connected.svg";

export default function Profile() {
  return (
    <>
      <section className="h-full bg-white p-6 rounded-3xl flex flex-col gap-12 max-lg:gap-6 max-lg:px-2 max-lg:py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 max-lg:gap-2">
            <p
              className="flex bg-gradient-to-br from-yellow-300 to-orange-600 size-20 text-3xl rounded-full
           text-white items-center justify-center font-bold max-lg:size-12 max-lg:text-xl"
            >
              R
            </p>
            <div>
              <p className="text-2xl max-lg:text-base max-lg:font-semibold">
                Rhema Chidube
              </p>
              <p className="text-xs">reymarmcoc@gmail.com</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-gray-200 px-4 rounded-full py-2 max-lg:px-2 max-lg:py-1 max-lg:text-sm max-lg:gap-0">
            Log Out{" "}
            <img src={exitIcon} className="size-6 max-lg:size-4" alt="" />
          </button>
        </div>
        <div className=" bg-orange-100 border border-orange-300 p-6 rounded-3xl w-3/5 max-xl:w-full max-lg:p-4">
          <div className="flex flex-col justify-between w-full gap-12 max-lg:gap-6">
            <div className="flex justify-between w-1/2 max-lg:w-full">
              <div className="flex flex-col gap-1">
                <p className="opacity-80">Current Status</p>
                <p className="text-2xl font-semibold">Gold</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="opacity-80">Current Boost</p>
                <p className="text-2xl font-semibold">6%</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="font-semibold">47000 / 54000</p>
              <div className="w-3/5 h-2 bg-amber-300 border-r-[80px] border-r-gray-100 rounded-2xl max-xl:w-full"></div>
              <p>Exp to Platinum</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-3/5 max-xl:w-full ">
          <p>Socials</p>
          <div className="w-full flex gap-4 max-xl:flex-col">
            <div className="flex gap-10 p-6 rounded-xl bg-gray-100 w-1/2 flex-col max-xl:w-full max-xl:p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 max-lg:gap-1">
                  <span className="border border-gray-400 p-1.5 rounded-full">
                    <img src={xIcon} className="size-2.5 " alt="" />
                  </span>
                  <p className="max-lg:text-base">The_Rhemaaa</p>
                </div>
                <span className="flex items-center gap-2 p-2 bg-white rounded-full max-lg:gap-1">
                  <img src={connectedIcon} alt="" />
                  <p className="max-lg:text-sm">Connected</p>
                </span>
              </div>
              <div className="w-full">
                <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white">
                  Disconnect
                </button>
              </div>
            </div>
            <div className="flex gap-10 p-6 rounded-xl bg-gray-100 w-1/2 flex-col max-xl:w-full max-xl:p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 max-lg:gap-1">
                  <span className="border border-gray-400 p-1.5 rounded-full">
                    <img src={discord} className="size-2.5 " alt="" />
                  </span>
                  <p className="max-lg:text-base">The_Rhemaaa</p>
                </div>
                <span className="flex items-center gap-2 p-2 bg-white rounded-full max-lg:gap-1">
                  <img src={connectedIcon} alt="" />
                  <p className="max-lg:text-sm">Connected</p>
                </span>
              </div>
              <div className="w-full">
                <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white">
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full gap-6 flex flex-col">
          <p>Password</p>
          <div className="w-full flex gap-6 max-lg:flex-col max-lg:gap-2">
            <button className="bg-gray-200 px-6 py-2 rounded-full hover:bg-gray-700 hover:text-white">
              Change Password
            </button>
            <button className="bg-gray-200 px-6 py-2 rounded-full hover:bg-gray-700 hover:text-white">
              Forgot Password
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
