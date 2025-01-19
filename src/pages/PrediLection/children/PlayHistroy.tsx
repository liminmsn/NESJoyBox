import {
  IonAlert,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { M3uItem, storage } from "../../../lib/loadFile";
import YItem from "@/components/YItem";

export default function PlayHistroy() {
  const [list, setList] = useState(storage.getUsr());
  return (
    <IonPage className="play_history">
      <IonHeader>
        <IonToolbar>
          <IonTitle>History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {list?.play_histry.map((item: M3uItem, idx) => {
            return <YItem item={item} idx={idx} key={idx} />;
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
