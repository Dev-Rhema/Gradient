import rewardGreen from "../assets/reward_green.svg";
import infoIcon from "../assets/info_icon.svg";

export default function RewardBox({
  reward_box_icon,
  reward_box_label,
  reward_box_points,
}) {
  return (
    <>
      <div className="reward_box">
        <div>
          <img src={rewardGreen} alt="" />
          <p>Season 1</p>
          <img src={infoIcon} alt="" className="info_icon" />
        </div>
        <div>
          <h3>31.5</h3>
          <span>Points</span>
        </div>
      </div>
    </>
  );
}
