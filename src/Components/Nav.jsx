import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import overview_icon from "../assets/overview.svg";
import nodes_icon from "../assets/nodes.svg";
import rewards_icon from "../assets/rewards.svg";
import referrals_icon from "../assets/referrals.svg";
import profile_icon from "../assets/profile.svg";
import x_icon from "../assets/x_icon.svg";
import discord_icon from "../assets/discord.svg";
import gradient_icon from "../assets/gradient_icon.svg";

export default function Nav() {
  const NAVLINKS = [
    {
      path: "",
      label: "Overview",
      icon: overview_icon,
    },
    {
      path: "my-nodes",
      label: "My Nodes",
      icon: nodes_icon,
    },
    {
      path: "rewards",
      label: "Rewards",
      icon: rewards_icon,
    },
    {
      path: "referrals",
      label: "Referrals",
      icon: referrals_icon,
    },
    {
      path: "profile",
      label: "Profile",
      icon: profile_icon,
    },
  ];

  const SOCIALS = [
    {
      label: "X(twitter)",
      icon: x_icon,
    },
    {
      label: "Discord",
      icon: discord_icon,
    },
    {
      label: "Website",
      icon: gradient_icon,
    },
  ];

  return (
    <div className="fixed bg-white h-screen w-[300px] flex flex-col justify-between box-border p-5 pb-32 text-[18px]  z-50 max-lg:hidden max-xl:w-[100px] max-xl:items-center  ">
      <span>
        <img src={logo} alt="" className="w-[200px]  max-xl:hidden" />
        <img src={gradient_icon} alt="" className="hidden max-xl:block" />
      </span>

      <nav>
        <p className="max-xl:hidden mb-3">Menu</p>
        {NAVLINKS.map((navlink) => (
          <NavLink
            key={navlink.path}
            to={`/${navlink.path}`}
            className={({ isActive }) =>
              isActive
                ? "text-black bg-[#f2f2f2] flex items-center w-full rounded-[10px]  no-underline pl-[10px] p-[10px] mb-2"
                : "flex items-center w-full rounded-[10px] text-[#757575] no-underline pl-[10px] p-[10px] bg-transparent mb-2 hover:bg-[#f8f8f8]"
            }
          >
            <span className="flex justify-center items-center gap-3 text-xl ">
              <img src={navlink.icon} alt="" className="size-5 max-xl:size-6" />
              <p className="max-xl:hidden">{navlink.label}</p>
            </span>
          </NavLink>
        ))}
      </nav>

      <nav className="flex flex-col gap-[12px] text-xl ">
        {SOCIALS.map((social) => (
          <span className="flex justify-start bg items-center gap-3 hover:cursor-pointer mb-2">
            <img src={social.icon} alt="" className="size-5 max-xl:size-6" />
            <p className="max-xl:hidden">{social.label}</p>
          </span>
        ))}
      </nav>
    </div>
  );
}
