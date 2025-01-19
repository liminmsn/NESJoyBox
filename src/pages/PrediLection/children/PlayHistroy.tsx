import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonSegment, IonSegmentButton } from "@ionic/react";
import { useEffect, useState } from "react";
import { storage } from "../../../lib/loadFile";
import YItem from "@/components/YItem";

export default function PlayHistroy() {
  const [list, setList] = useState(storage.getUsr());
  useEffect(() => {
    return () => {
      console.log('lis', list?.play_histry);

    }
  }, []);
  return <IonPage>
    <IonHeader>

    </IonHeader>
    <IonContent>
      <IonList>
        {list?.play_histry.map((item, idx) => {
          return <YItem item={item} key={idx} />
        })}
      </IonList>
    </IonContent>
  </IonPage>
}