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

export default function MobileNav() {
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

  return (
    <>
      <nav className="flex justify-between bg-white px-10 py-4 max-lg:px-4 max-md:py-2">
        {NAVLINKS.map((navlink) => (
          <NavLink
            key={navlink.path}
            to={`/${navlink.path}`}
            className={({ isActive }) =>
              isActive
                ? "text-black bg-[#f2f2f2] flex items-center  p-4  no-underline rounded-xl "
                : "flex items-center  rounded-xl text-[#757575] no-underline p-4 bg-transparent  hover:bg-[#f8f8f8]"
            }
          >
            <img src={navlink.icon} className="size-8 max-md:size-4" alt="" />
          </NavLink>
        ))}
      </nav>
    </>
  );
}
