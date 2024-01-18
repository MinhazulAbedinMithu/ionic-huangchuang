import {
  CheckboxChangeEventDetail,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import { useLocation } from "react-router";
import "./style.css";
import imgQuestion from "../../images/profile/question.png";
import imgTarget from "../../images/profile/status-target.png";
import { togglerOneData } from "./detailsData";
import imgDotDot from "../../images/profile/dotdot.png";
import imgArrowRight from "../../images/profile/arrow-right.png";
import imgExchange from "../../images/profile/exchange.png";

const AccountDetails: React.FC<any> = () => {
  const [togglerFirst, setTogglerFirst] = useState(false);
  const [togglerSecond, setTogglerSecond] = useState(false);
  const location = useLocation();
  const title = location.pathname?.split("/")[2];

  const handleGoBack = () => {
    history.back();
  };
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow className="ion-justify-content-between ion-align-items-center">
              <IonCol>
                <IonButtons>
                  <IonBackButton defaultHref="/profile" />
                </IonButtons>
              </IonCol>
              <IonCol>
                <IonTitle className="header-title">{title}</IonTitle>
              </IonCol>
              <IonCol className="header-end">
                <img src={imgQuestion} alt="Question" />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        style={{
          color: "#6C7BA8",
          backgroundColor: "#fff !important",
          // padding: "0px 14px 4px 14px",
        }}
      >
        <div
          style={{
            borderRadius: "6px",
            margin: "14px",
          }}
        >
          <div className="top-status">
            <div className="status-left">
              <div className="status-item">
                <h4>中心钱包</h4>
                <p>0.00</p>
              </div>
              <div className="status-bottom">
                <div className="status-item">
                  <h4>锁定钱包</h4>
                  <p>0.00</p>
                </div>
                <div className="status-stroke"></div>
                <div className="status-item">
                  <h4>锁定钱包</h4>
                  <p>0.00</p>
                </div>
              </div>
            </div>
            <div className="status-right">
              <button>
                <img src={imgTarget} alt="" />
                <span>一键回收</span>
              </button>
            </div>
          </div>
          <div className="toggle-one">
            <div className="toggler">
              <IonToggle
                onIonChange={(e: CustomEvent<CheckboxChangeEventDetail>) =>
                  setTogglerFirst(e?.detail.checked)
                }
              ></IonToggle>
              <span>隐藏无余额场馆</span>
            </div>
            <div
              className={`toggler-body ${togglerFirst && "toggle-one-hidden"}`}
            >
              {togglerOneData.map((toggleItem) => (
                <div key={toggleItem.title} className="t-item">
                  <h4>{toggleItem.title}</h4>
                  <p>{toggleItem.amount.toString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="toogle-two" style={{ padding: "14px" }}>
          <div className="toggle-two-head">
            <h4>自动转账</h4>
            <IonToggle
              onIonChange={(e: CustomEvent<CheckboxChangeEventDetail>) =>
                setTogglerSecond(e?.detail.checked)
              }
            ></IonToggle>
          </div>
          <div
            style={{
              display: togglerSecond ? "none" : "block",
            }}
          >
            <div className="toggle-2-body">
              <div className="left">
                <h4>从</h4>
                <img src={imgDotDot} alt="" />
                <h4>到</h4>
              </div>
              <ul className="middle">
                <li className="item">
                  <div className="item-left">
                    <span>转出</span>
                    <h4>中心钱包</h4>
                  </div>
                  <div className="item-right">
                    <img src={imgArrowRight} alt="" />
                  </div>
                </li>
                <li className="item">
                  <div className="item-left">
                    <span>转入</span>
                    <h4>皇创棋牌</h4>
                  </div>
                  <div className="item-right">
                    <img src={imgArrowRight} alt="" />
                  </div>
                </li>
              </ul>

              <div className="right">
                <img src={imgExchange} alt="" />
              </div>
            </div>
            <div>场馆内钱包不支持互转</div>

            <div className="last-2">
              <h4>转账金额</h4>
              <div className="last-2-div">
                <h4>请输入转账金额</h4>
                <p>全部</p>
              </div>
              <button>立即转账</button>
            </div>
          </div>
          <p className="bottom-text">
            如需帮助，请<span style={{ color: "#5995FC" }}>联系客服</span>
          </p>
        </div>
      </IonContent>
    </>
  );
};

export default AccountDetails;
