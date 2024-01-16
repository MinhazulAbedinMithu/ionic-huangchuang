import { IonButton, IonCol, IonRow } from "@ionic/react";
import React from "react";
import iconVipo from "../images/icons/vpo.png";
import iconAc1 from "../images/icons/acc-1.png";
import iconAc2 from "../images/icons/acc-2.png";
import iconAc3 from "../images/icons/acc-3.png";
import iconAc4 from "../images/icons/acc-4.png";

const accountInfoBtnData = [
  {
    icon: iconAc1,
    title: "充值",
    slug: "top-up",
  },
  {
    icon: iconAc2,
    title: "提现",
    slug: "withdraw",
  },
  {
    icon: iconAc3,
    title: "互转",
    slug: "transfer",
  },
  {
    icon: iconAc4,
    title: "vip",
    slug: "vip",
  },
];

const AccountInfo: React.FC = () => {
  return (
    <IonRow>
      <IonCol>
        <div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              fontSize: "14px",
            }}
          >
            <h4
              style={{
                margin: 0,
              }}
            >
              bianyl123
            </h4>
            <img src={iconVipo} alt="" width={52} height={20} />
          </div>
          <p
            style={{
              fontSize: "20px",
              color: "#303442",
            }}
          >
            ¥0.00
          </p>
        </div>
      </IonCol>
      <IonCol size="auto">
        {accountInfoBtnData.map((btn) => (
          <IonButton
            key={btn.slug}
            className="account-info-btn"
            style={{
              "--background": "transparent",
              "--padding-start": "2px",
              "--padding-end": "2px",
              "--padding-top": "2px",
              "--padding-bottom": "2px",
              "--box-shadow": "none",
              color: "#6c7ba8",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0px",
              }}
            >
              <img src={btn.icon} alt={btn.title} height={40} width={40} />
              <span>{btn.title}</span>
            </div>
          </IonButton>
        ))}
      </IonCol>
    </IonRow>
  );
};

export default AccountInfo;
