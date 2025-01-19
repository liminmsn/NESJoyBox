import i18n, { changeLanguage } from "@/i18n/i18n";
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";

export default function Settings() {
    const [language] = useState(localStorage.getItem("lang"));

    useEffect(() => {
    });

    //切换语言
    function onChage(ent: CustomEvent) {
        console.log(ent.detail);
        changeLanguage(ent.detail['value']);
    }

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>{i18n.t("predilection.card.3")}</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonItem>
                    <IonSelect label={i18n.t("setting.language.1")} placeholder={i18n.t("setting.language.2")} value={language} onIonChange={(ent) => onChage(ent)}>
                        <IonSelectOption value="zh">简体中文</IonSelectOption>
                        <IonSelectOption value="en">English</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel>{i18n.t("setting.check.1")}</IonLabel>
                    <IonButton color={"danger"}>{i18n.t("setting.check.2")}</IonButton>
                </IonItem>
                <IonItem>
                    <IonLabel>{i18n.t("setting.version.1")}</IonLabel>
                    <IonLabel style={{ textAlign: "right" }}>v1.0.1</IonLabel>
                </IonItem>
            </IonList>
        </IonContent>
    </IonPage >
}