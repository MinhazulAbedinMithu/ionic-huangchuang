import { Redirect, Route, useLocation } from "react-router-dom";
import {
  IonApp,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTab,
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
import Profile from "./pages/Profile/Profile";
import AccountDetails from "./components/AccountInfo/AccountDetails";
import PopupModal from "./components/PopupModal/PopupModal";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp
      style={{
        backgroundColor: "#EDF7FF",
      }}
    >
      {/* <IonTab> */}
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
        <Route path="/profile" render={() => <Profile />} exact={true} />
        <Route
          path="/profile/:title"
          render={() => <AccountDetails />}
          exact={true}
        />
        <Route path="/modal" render={() => <PopupModal />} exact={true} />
      </IonRouterOutlet>
      {/* </IonTab> */}
    </IonApp>
  );
};

export default App;
