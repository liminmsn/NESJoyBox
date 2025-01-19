import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { M3uItem, storage } from "../../../lib/loadFile";
import YItem from "@/components/YItem";
import YNone from "@/components/YNone";
import { time } from "ionicons/icons";

export default function PlayHistroy() {
  const [list, setList] = useState(storage.getUsr());

  function onDelItem(card: M3uItem) {
    const idx = list!.play_histry.indexOf(card);
    list?.play_histry.splice(idx, 1); //删除记录
    setList(storage.setUsr(list!)); //存到本地在实时更新
  }
  return (
    <IonPage className="play_history">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" style={{ marginLeft: "15pt" }}>
            <IonIcon icon={time} size="large" />
          </IonButtons>
          <IonTitle>
            <IonText>History</IonText>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList style={{ backgroundColor: "#ffffff00", paddingBlock: "0" }}>
          {list!.play_histry.length > 0 ? (
            list?.play_histry.map((item: M3uItem, idx) => {
              return (
                <YItem item={item} idx={idx} key={idx} onDel={onDelItem} />
              );
            })
          ) : (
            <YNone />
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
