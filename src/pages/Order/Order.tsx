import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../../components/Header";
import TabMenu from "../../components/TabMenu/TabMenu";

const Order: React.FC<any> = () => {
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Huang</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
      <TabMenu />
    </IonPage>
  );
};

export default Order;
