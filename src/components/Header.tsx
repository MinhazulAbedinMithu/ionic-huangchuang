import {
  IonButton,
  IonCol,
  IonGrid,
  IonHeader,
  IonNav,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import logo from "../images/logo.png";
import iconMessage from "../images/icons/message.png";
import "./header.scss";
import Home from "../pages/Home/Home";

const Header: React.FC = () => {
  return (
    <IonHeader
      className="ion-header"
      style={{
        backgroundColor: "#EDF7FF",
      }}
    >
      <IonToolbar className="ion-toolbar">
        <IonGrid>
          <IonRow className="ion-justify-content-between">
            <IonCol>
              <IonButton fill="clear">
                <img src={logo} alt="Logo" width={119} height={35} />
              </IonButton>
            </IonCol>
            <IonCol size="auto">
              <IonButton fill="clear">
                <img
                  src={iconMessage}
                  alt="Message Icon"
                  // height={24}
                  // width={24}
                />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
