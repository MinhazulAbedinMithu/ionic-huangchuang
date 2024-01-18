import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Banner from "../../components/Banner";
import Announcement from "../../components/Announcement";
import AccountInfo from "../../components/AccountInfo";
import CategoryTab from "../../components/CategoryTab/CategoryTab";
import Header from "../../components/Header";
import tabData from "../../utils/tabData";
import TabMenu from "../../components/TabMenu/TabMenu";

const Home: React.FC<any> = () => {
  return (
    <>
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
          <Banner />
          <Announcement />
          <AccountInfo />
          <CategoryTab />
        </IonContent>
        <TabMenu />
      </IonPage>
    </>
  );
};

export default Home;
