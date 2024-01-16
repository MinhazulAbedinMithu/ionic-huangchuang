import {
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Banner from "../../components/Banner";
import Announcement from "../../components/Announcement";
import AccountInfo from "../../components/AccountInfo";
import CategoryTab from "../../components/CategoryTab/CategoryTab";

const Home: React.FC = () => {
  return (
    <IonPage style={{ color: "#6C7BA8", padding: "56px 14px 4px 14px" }}>
      <IonContent fullscreen>
        <Banner />
        <Announcement />
        <AccountInfo />
        <CategoryTab />
      </IonContent>
    </IonPage>
  );
};

export default Home;
