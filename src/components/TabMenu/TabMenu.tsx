import {
  IonLabel,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import tabData from "../../utils/tabData";
import { useLocation } from "react-router";

const TabMenu: React.FC = () => {
  const [pathName, setPathName] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);
  return (
    <IonTabBar slot="bottom" className="main-tab">
      {tabData.map((tab, index) => (
        <IonTabButton
          key={index}
          tab={tab.slug}
          href={`${tab.slug}`}
          className="tab-button"
          onClick={() => setPathName(tab.slug)}
        >
          {pathName === `${tab.slug}` ? (
            <img src={tab.activeIcon} alt="" height={30} width={30} />
          ) : (
            <img src={tab.icon} alt="" height={30} width={30} />
          )}
          <IonLabel
            className={`${
              pathName === `${tab.slug}` ? "tab-label-active" : "tab-label"
            }`}
          >
            {tab.title}
          </IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  );
};

export default TabMenu;
