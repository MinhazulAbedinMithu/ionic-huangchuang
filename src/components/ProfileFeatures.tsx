import React from "react";
import "../pages/Profile/Profile.css";
import imgOptionHead from "../images/profile/option-head.png";
import opt1 from "../images/profile/op-1.png";
import opt2 from "../images/profile/opt-2.png";
import opt3 from "../images/profile/opt-3.png";
import opt4 from "../images/profile/opt-4.png";
import opt5 from "../images/profile/opt-5.png";
import opt6 from "../images/profile/opt-6.png";
import opt7 from "../images/profile/opt-7.png";
import opt8 from "../images/profile/opt-8.png";
const optionsData = [
  { img: opt1, title: "资金明细" },
  { img: opt2, title: "订单" },
  { img: opt3, title: "提现账户" },
  { img: opt4, title: "代理中心" },
  { img: opt5, title: "邀请好友" },
  { img: opt6, title: "公告" },
  { img: opt7, title: "咨询" },
  { img: opt8, title: "设置" },
];
const ProfileFeatures = () => {
  return (
    <div className="features-wrapper">
      <a href="">
        <img src={imgOptionHead} alt="" />
      </a>

      <div className="feat-options">
        {optionsData.map((opt) => (
          <div key={opt.title} className="feat-item">
            <img src={opt.img} alt={opt.title} />
            <h4>{opt.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileFeatures;
