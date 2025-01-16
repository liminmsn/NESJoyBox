import { IonAvatar, IonContent, IonItem, IonLabel, IonList } from "@ionic/react";

export default function BookMarks() {
    return <IonContent>
        <IonList>
            {['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5'].map((item, index) => (
                <IonItem key={index}>
                    <IonAvatar slot="start">
                        <img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
                    </IonAvatar>
                    <IonLabel>{item}</IonLabel>
                </IonItem>
            ))}
        </IonList>
    </IonContent>
}