import React, { useEffect, useState } from "react";
import { categoryBodyData, categoryTitleData } from "./categoryData";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import PopupModal from "../PopupModal/PopupModal";

const CategoryTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    setActiveTab(categoryTitleData[0].title);
  }, []);
  // const [isModalOpen, setIsModalOpen] = useState(true);
  // const onClose = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  const handleClick = () => {
    window.location.replace(`/modal`);
  };

  return (
    <IonGrid>
      <IonRow
        className="ion-justify-content-between"
        style={{
          gap: "12px",
          padding: "10px 0",
        }}
      >
        <IonCol
          size="auto"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {categoryTitleData.map((tab) => (
            <div
              key={tab.title}
              onClick={() => setActiveTab(tab.title)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                boxShadow: "0px 2px 8px 0px rgba(121, 129, 164, 0.15)",
                backgroundColor: activeTab === tab.title ? "#5995fc" : "#fff",
                borderRadius: "8px",
                padding: "6px 4px",
                cursor: "pointer",
              }}
            >
              <img src={tab.icon} alt={tab.title} height={27} width={27} />
              <h4
                style={{
                  fontSize: "12px",
                  color: activeTab === tab.title ? "#fff" : "#6C7BA8",
                  margin: "0px",
                  padding: "0px",
                  textTransform: "uppercase",
                }}
              >
                {tab.title}
              </h4>
            </div>
          ))}
        </IonCol>
        <IonCol>
          {categoryBodyData.map(
            (item) =>
              item.tags.includes(activeTab) && (
                <div
                  key={item.title}
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#F3FAFF",
                    background: `url("${item.bg}") center center no-repeat`,
                    backgroundSize: "cover",
                    // boxShadow: `0px 4px 8px 0px rgba(95, 146, 255, 0.50), 0px 1px 2.5px 0px rgba(255, 255, 255, 0.60)`,
                    // width: `293px`,
                    height: "126px",
                    flexShrink: "0",
                    borderRadius: "12px",
                    padding: "24px 22px",
                    position: "relative",
                    marginBottom: "10px",
                  }}
                >
                  {item.flag && (
                    <img
                      src={item.flag}
                      alt=""
                      width={35}
                      height={35}
                      style={{ position: "absolute", top: "0", left: "7px" }}
                    />
                  )}
                  <h4
                    style={{
                      color: "#303442",
                      fontSize: "16px",
                      textTransform: "uppercase",
                      margin: "0",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "9px",
                      color: "#6C7BA8",
                    }}
                  >
                    {item.tagline}
                  </p>
                  {item.discound && (
                    <div className="discound-bg">
                      <p style={{ fontSize: "10px" }}>
                        最高返水{" "}
                        <span style={{ fontSize: "13px" }}>
                          {item.discound}%
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              )
          )}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default CategoryTab;
