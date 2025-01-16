import { IonContent } from "@ionic/react";
import { t } from "i18next";

export default function List() {
    return <IonContent>
        <h1>{t("hello")}</h1>
    </IonContent>
}