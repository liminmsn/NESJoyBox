import { IonButton, IonContent } from "@ionic/react";
import { useState } from "react";
import i18n from "../../i18n/i18n";

export default function PrediLection() {
  const changeLanguage = (lng: string) => {
    localStorage.setItem("lang", lng);
    window.location.reload();
  };
  return (
    <IonContent>
      <IonButton onClick={() => changeLanguage("zh")}>zh</IonButton>
      <IonButton onClick={() => changeLanguage("en")}>en</IonButton>
    </IonContent>
  );
}
