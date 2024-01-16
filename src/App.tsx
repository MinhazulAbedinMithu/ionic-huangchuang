import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import { playCircle, radio, library, search } from "ionicons/icons";

import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Discound from "./pages/Discound/Discound";
import CustomerService from "./pages/CustomerService/CustomerService";
import Order from "./pages/Order/Order";
import Header from "./components/Header";
import tabData from "./utils/tabData";
import { useState } from "react";

setupIonicReact();

const App: React.FC = () => {
  const [pathName, setPathName] = useState("/home");
  // useEffect(() => {
  //   console.log(window.location.pathname);

  //   setPathName(window.location.pathname);
  // }, [window.location.pathname]);
  // const routeChange = (): void => {};

  return (
    <IonApp
      style={{
        backgroundColor: "#EDF7FF",
      }}
    >
      <IonReactRouter>
        <Header />
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path="/" to="/home" />

            <Route path="/home" render={() => <Home />} exact={true} />
            <Route path="/discound" render={() => <Discound />} exact={true} />
            <Route
              path="/customer-service"
              render={() => <CustomerService />}
              exact={true}
            />
            <Route path="/order" render={() => <Order />} exact={true} />
          </IonRouterOutlet>

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
                    pathName === `${tab.slug}`
                      ? "tab-label-active"
                      : "tab-label"
                  }`}
                >
                  {tab.title}
                </IonLabel>
              </IonTabButton>
            ))}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
