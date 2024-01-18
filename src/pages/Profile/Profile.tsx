import {
  IonButton,
  IonContent,
  IonHeader,
  IonNav,
  IonNavLink,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import "./Profile.css";
import React from "react";
import imgProfile from "../../images/profile/profile.png";

import ProfileFeatures from "../../components/ProfileFeatures";
import imgVip from "../../images/profile/vip.png";
import Header from "../../components/Header";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import TabMenu from "../../components/TabMenu/TabMenu";
const Profile: React.FC<any> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Header />
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        style={{ color: "#6C7BA8", padding: "0px 14px 4px 14px" }}
      >
        <div className="profile-head">
          <div>
            <img src={imgProfile} alt="" height={50} width={50} />
          </div>
          <div>
            <h4>bianyl123</h4>
            <p>普通会员</p>
          </div>
        </div>
        <ProfileInfo />
        <ProfileFeatures />
        <div className="vip">
          <img src={imgVip} alt="" />
        </div>
      </IonContent>
      <TabMenu />
    </IonPage>
  );
};

export default Profile;
