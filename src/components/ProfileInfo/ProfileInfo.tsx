import React from "react";
import "./ProfileInfo.css";
import iconAc1 from "../../images/icons/acc-1.png";
import iconAc2 from "../../images/icons/acc-2.png";
import iconAc3 from "../../images/icons/acc-3.png";

const ProfileInfo = () => {
  const handleClick = (title: string) => {
    window.location.replace(`profile/${title}`);
  };
  return (
    <div className="profile-info">
      <div className="info-left">
        <div className="info-l-top">
          <h4>账号余额</h4>
          <div>
            <h4>
              推荐彩金 <span>0.00</span>
            </h4>
          </div>
        </div>
        <p>27658.42</p>
      </div>
      <div className="info-right" onClick={() => handleClick("充值")}>
        <div className="info-item">
          <img src={iconAc1} alt="" />
          <p>充值</p>
        </div>
        <div className="info-item" onClick={() => handleClick("提现")}>
          <img src={iconAc2} alt="" />
          <p>提现</p>
        </div>

        <div className="info-item" onClick={() => handleClick("互转")}>
          <img src={iconAc3} alt="" />
          <p>互转</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
