import React from "react";
import iconAnnounce from "../images/icons/announce.png";
import imgHotFlag from "../images/icons/hot-flag.png";
import { IonRow } from "@ionic/react";

const Announcement = () => {
  return (
    <IonRow
      className="announcement ion-justify-content-start"
      style={{
        position: "relative",
        padding: "10px 0",
      }}
    >
      <img src={iconAnnounce} alt="" width={16} height={16} />
      <p style={{ fontSize: "12px" }}>
        尊敬的客户：开云最新APP v6.1.0版本，已正式上
      </p>
      <img
        src={imgHotFlag}
        alt=""
        height={18}
        width={60}
        style={{
          position: "absolute",
          top: "10px",
          right: "0",
        }}
      />
    </IonRow>
  );
};

export default Announcement;
