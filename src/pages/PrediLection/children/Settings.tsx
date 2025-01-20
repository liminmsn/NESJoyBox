import i18n, { changeLanguage } from "@/i18n/i18n";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { useEffect, useState } from "react";

export default function Settings() {
  const [language] = useState(localStorage.getItem("lang"));
  const [presentAlert] = useIonAlert();

  useEffect(() => {});

  //切换语言
  function onChage(ent: CustomEvent) {
    console.log(ent.detail);
    changeLanguage(ent.detail["value"]);
  }

  function onCheck() {
    presentAlert({
      header: i18n.t("alert.0"),
      message: `${i18n.t("setting.language.3")}？`,
      buttons: [
        {
          text: i18n.t("alert.1"),
          handler: () => {
            localStorage.clear();
            location.reload();
          },
        },
        {
          text: i18n.t("alert.2"),
        },
      ],
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{i18n.t("predilection.card.3")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonSelect
              label={i18n.t("setting.language.1")}
              placeholder={i18n.t("setting.language.2")}
              value={language}
              onIonChange={(ent) => onChage(ent)}
            >
              <IonSelectOption value="zh">简体中文</IonSelectOption>
              <IonSelectOption value="en">English</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>{i18n.t("setting.check.1")}</IonLabel>
            <IonButton color={"danger"} onClick={onCheck}>
              {i18n.t("setting.check.2")}
            </IonButton>
          </IonItem>
          <IonItem>
            <IonLabel>{i18n.t("setting.version.1")}</IonLabel>
            <IonLabel style={{ textAlign: "right" }}>v1.0.1</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
