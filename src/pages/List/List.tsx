import { IonButton, IonContent } from "@ionic/react";
import { useState } from "react";
import i18n from "../../i18n/i18n";

export default function List() {
  const [language, setLanguage] = useState(i18n.language);
  const changeLanguage = (lng: string) => {
    localStorage.setItem("lang", lng);
    window.location.reload();
  };
  return (
    <IonContent>
      <h1>{i18n.t("hello")}</h1>
      {language}
      <IonButton onClick={() => changeLanguage("zh")}>zh</IonButton>
      <IonButton onClick={() => changeLanguage("en")}>en</IonButton>
    </IonContent>
  );
}
