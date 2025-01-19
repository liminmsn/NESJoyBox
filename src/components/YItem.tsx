import { M3uItem } from "@/lib/loadFile";
import { IonButton, IonButtons, IonCardSubtitle, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonText, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import { personCircle, helpCircle } from "ionicons/icons";

export default function YItem({ item }: { item: M3uItem }) {
    return <IonItem>
        <IonToolbar>
            <IonTitle>{item.name}</IonTitle>
            <IonButtons slot="secondary">
                <IonButton fill="solid">
                    <IonIcon slot="start" icon={personCircle}></IonIcon>
                </IonButton>
            </IonButtons>
            <IonButtons slot="primary">
                <IonButton fill="solid">
                    del
                    <IonIcon slot="end" icon={helpCircle}></IonIcon>
                </IonButton>
            </IonButtons>
        </IonToolbar>
    </IonItem>
}