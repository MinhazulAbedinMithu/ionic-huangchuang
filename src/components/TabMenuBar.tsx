import { IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import React from "react";

const TabMenuBar: React.FC = () => {
  return (
    <>
      <IonTabButton tab="home" href="/home">
        {/* <IonIcon icon={playCircle} /> */}
        <IonLabel>Listen now</IonLabel>
      </IonTabButton>
    </>
  );
};

export default TabMenuBar;
