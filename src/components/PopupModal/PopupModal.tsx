import "./modal.css";
import React, { useEffect } from "react";
import imgInfo from "../../images/modalInfo.png";
import imgBox from "../../images/popBox.png";
import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const PopupModal: React.FC<any> = () =>
  //     {
  //   isOpen,
  //   onClose,
  //   children,
  //   isFullScreen,
  // }
  {
    //   useEffect(() => {
    //     const handleOutsideClick = (e: any) => {
    //       if (isOpen && e.target.classList.contains("modal-overlay")) {
    //         // onClose();
    //       }
    //     };

    //     document.addEventListener("mousedown", handleOutsideClick);

    //     return () => {
    //       document.removeEventListener("mousedown", handleOutsideClick);
    //     };
    //   }, [isOpen, onClose]);

    const modalClasses =
      // isFullScreen
      //   ?
      "fixed inset-0 z-50 overflow-y-auto modal-overlay bg-black bg-opacity-50";
    //   :
    //   "fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-50";

    const modalContentClasses =
      // isFullScreen;
      // ?
      "bg-white p-2  w-full max-w-screen-xl mx-auto mt-[20px] rounded-md relative";
    // : "bg-white p-6 rounded shadow-lg";
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow className="ion-justify-content-between ion-align-items-center">
                <IonCol>
                  <IonButtons>
                    <IonBackButton defaultHref="/" />
                  </IonButtons>
                </IonCol>
                <IonCol>
                  <IonTitle className="header-title">规则</IonTitle>
                </IonCol>
                <IonCol className="header-end">
                  <div className="flex items-center justify-start gap-2">
                    <img src={imgInfo} alt="icon" className="inline" />
                    <span>规则</span>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        {/* {isOpen && ( */}
        <IonContent
          fullscreen
          style={{
            color: "#6C7BA8",
            backgroundColor: "#fff !important",
            // padding: "0px 14px 4px 14px",
          }}
        >
          <div className={modalClasses}>
            <div className={`${modalContentClasses}  text-slate-600 px-2`}>
              {/* <div className="flex items-start justify-between">
              <div className="flex items-center justify-start gap-2">
                <img src={imgInfo} alt="icon" className="inline" />
                <span>规则</span>
              </div>
              <div>
                <span>转账</span>
              </div>
              <button
                // className="absolute top-4 right-4 text-gray-600"
                onClick={() => window.location.replace(`/`)}
              >
                Close
              </button>
            </div> */}

              <div className="modal-top ">
                <div className="">
                  <img src={imgBox} alt="icon" className="inline" />{" "}
                  <span style={{ paddingLeft: "4px" }}>
                    余额 | 一键回收余额{" "}
                  </span>
                  <h4>27658.42</h4>
                </div>

                <div className="bottom-item">
                  <span>中心钱包： 0元</span>
                  <span>锁定钱包： 0元</span>
                  <span>福利中心： 0元</span>
                </div>
                <div className="text-corner">交易记录</div>
              </div>
              <h4
                className="px-6 py-4"
                style={{
                  padding: "16px 24px",
                }}
              >
                转账到
              </h4>
              <h4 className="gray-box">请输入游戏金额，最低1元</h4>
              <div className="after-gray">
                <h4 className="">充值帐户可用余额0</h4>
                <button className="">去充值</button>
              </div>
              <div className="range">
                <input type="range" name="range" id="range" className="" />
                <span className="text-right">0元</span>
              </div>
              <div
                className="px-6 py-4"
                style={{
                  padding: "16px 24px",
                  color: "gray",
                }}
              >
                拖动使用优惠金，优惠金需完成3倍投注额
              </div>
              <div
                className="px-6 py-4"
                style={{
                  padding: "16px 24px",
                  color: "gray",
                }}
              >
                <p>剩余未完成投注额：0</p>
                <p>本次转账需完成投注额：0</p>
              </div>
              <div
                className="w-full flex justify-center py-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "16px",
                  width: "100%",
                }}
              >
                <button className="max-w-[340px] mx-auto w-full text-blue border border-blue bg-[#E8F1FF] rounded-md px-4 py-2 btn-top">
                  确认转入
                </button>
              </div>
              <div
                className="w-full bg-[#E8F1FF] flex justify-center py-4"
                style={{
                  background: "#E8F1FF",
                  display: "flex",
                  justifyContent: "center",
                  padding: "16px",
                  width: "100%",
                }}
              >
                <button className="max-w-[340px] mx-auto w-full text-white border border-blue bbtn-blue px-4 py-2">
                  确认转入
                </button>
              </div>
            </div>
          </div>
          {/* )} */}
        </IonContent>
      </>
    );
  };

export default PopupModal;
