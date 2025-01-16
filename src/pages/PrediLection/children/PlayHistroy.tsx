import { IonAvatar, IonContent, IonItem, IonLabel, IonList, IonSegment, IonSegmentButton } from "@ionic/react";

export default function PlayHistroy() {
    return <>
    <IonSegment value="default">
            <IonSegmentButton value="default">
                <IonLabel>Default</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="segment">
                <IonLabel>Segment</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="segment2">
                <IonLabel>Segment2</IonLabel>
            </IonSegmentButton>
        </IonSegment>
        <IonContent>
        <IonList>
        {['1','2','3','4','5','1','2','3','4','5','1','2','3','4','5'].map((item, index) => (
          <IonItem key={index}>
            <IonAvatar slot="start">
              <img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
            </IonAvatar>
            <IonLabel>{item}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
    </>
}