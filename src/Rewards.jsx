import RewardsGraph from "./Components/RewardsGraph";
import connectedIcon from "./assets/connected.svg";

export default function Rewards() {
  const Acheivements = [
    {
      id: "1",
      title: "Referral maniac",
      desc: "Having 10 qualified referrals.",
      xp: 5000,
    },
    {
      id: "2",
      title: "Team player",
      desc: "Secured your first referral.",
      xp: 2000,
    },
    {
      id: "3",
      title: "Keep in touch",
      desc: "Conected your X account.",
      xp: 1000,
    },
    {
      id: "4",
      title: "A warm welcome",
      desc: "Signed up with a referral code.",
      xp: 3000,
    },
    {
      id: "5",
      title: "Normad life",
      desc: "Total uptime reaches 72 Hours.",
      xp: 1000,
    },
    {
      id: "6",
      title: "Up and steady",
      desc: "Achieved 12 hours of daily uptime.",
      xp: 1000,
    },
    {
      id: "7",
      title: "Tap master",
      desc: "Received 500 taps for the first time.",
      xp: 1000,
    },
    {
      id: "8",
      title: "New kid on the block",
      desc: "Deployed your first sentry node.",
      xp: 1000,
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-6 ">
        <div className="p-6 rounded-2xl  bg-white gap-6 flex flex-col ">
          <p>Node Name: </p>
          <div className="h-[360px] ">
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
        <div className="p-6 rounded-2xl  bg-white gap-6 flex flex-col ">
          <span className="bg-[#f3f3f3] grid grid-cols-4 px-6 py-2 rounded-full opacity-70 max-lg:hidden">
            <p className="flex justify-start">Season</p>
            <p className="flex justify-start">Start/End Date</p>
            <p className="flex justify-center">Referral Points</p>
            <p className="flex justify-end">Season Points</p>
          </span>
          <span className=" grid grid-cols-4 px-6 py-4 rounded-2xl border border-gray-200 items-center max-lg:grid-cols-1 max-lg:px-4">
            <p className="flex justify-start font-bold">Season 0</p>
            <span className="flex justify-start flex-col">
              <span className="flex justify-between">
                <p className="hidden opacity-50 max-lg:block">Start Date</p>
                <p> Sep 12, 2024. 01:00:00PM</p>
              </span>
              <span className="flex justify-between">
                <p className="hidden opacity-50 max-lg:block">End date</p>
                <p> Apr 14, 2024. 11:59:59PM</p>
              </span>
            </span>
            <span className="flex justify-center max-lg:justify-between">
              <p className="opacity-50 hidden max-lg:block">Referral Points</p>
              <p className="flex justify-center font-semibold ">157.39</p>
            </span>
            <span className="flex justify-end max-lg:justify-between">
              <p className="opacity-50 hidden max-lg:block">Referral Points</p>
              <p className="flex justify-end text-purple-700 font-semibold">
                3,383.59
              </p>
            </span>
          </span>
          <span className=" grid grid-cols-4 px-6 py-4 rounded-2xl border border-gray-200 items-center max-lg:grid-cols-1 max-lg:px-4">
            <p className="flex justify-start font-bold">Season 1</p>
            <span className="flex justify-start flex-col">
              <span className="flex justify-between">
                <p className="hidden opacity-50 max-lg:block">Start Date</p>
                <p> Sep 12, 2024. 01:00:00PM</p>
              </span>
              <span className="flex justify-between">
                <p className="hidden opacity-50 max-lg:block">End date</p>
                <p> Apr 14, 2024. 11:59:59PM</p>
              </span>
            </span>
            <span className="flex justify-center max-lg:justify-between">
              <p className="opacity-50 hidden max-lg:block">Referral Points</p>
              <p className="flex justify-center font-semibold ">157.39</p>
            </span>
            <span className="flex justify-end max-lg:justify-between">
              <p className="opacity-50 hidden max-lg:block">Referral Points</p>
              <p className="flex justify-end text-purple-700 font-semibold">
                3,383.59
              </p>
            </span>
          </span>
        </div>
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {Acheivements.map((acheivement) => (
            <div className="justify-between flex bg-white items-center p-4 rounded-2xl">
              <div className="flex flex-col gap-1">
                <p className="font-semibold">{acheivement.title}</p>
                <p className="text-gray-400 text-xs">{acheivement.desc}</p>
                <p className="text-lime-500">+{acheivement.xp} Exp</p>
              </div>
              <button className="flex bg-gray-100 items-center  p-2 rounded-full gap-2 max-md:p-1 ">
                <p>Done</p>
                <img
                  src={connectedIcon}
                  alt=""
                  className="size-8 p-2 bg-white rounded-full max-md:p-1 max-md:size-6"
                />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
