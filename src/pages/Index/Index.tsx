import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonText,
} from "@ionic/react";
import { Router } from "../../plugin/Plugins";
import { getM3u, M3uItem } from "../../tool/loadFile";
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import "./style.css";

export default function Index() {
  /**播放url链接视频 */
  async function onPlay(url: string) {
    console.log(url);
    if (Capacitor.isNativePlatform()) {
      await Router.openPage({
        path: "HLSPlay",
        obj: { url: url },
      });
    }
  }

  const [state, setState] = useState<M3uItem[][]>([]);
  useEffect(() => {
    return function () {
      getM3u().then((res) => {
        const grid = 3;
        const grid_arr = [] as any[];
        for (let i = 0; i < res.length; i += grid) {
          grid_arr.push(res.slice(i, i + grid));
        }
        setState(grid_arr);
      });
    };
  }, []);
  return (
    <IonContent className="Index">
      <IonGrid>
        {state.map((item, index) => {
          return (
            <IonRow key={index}>
              {item.map((card, i) => {
                return (
                  <IonCol
                    key={i}
                    size={String(12 / item.length)}
                    onClick={() => onPlay(card.url)}
                  >
                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>{card.name}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonText>{card.url}</IonText>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                );
              })}
            </IonRow>
          );
        })}
      </IonGrid>
      {/* <IonButton onClick={() => clickMe(0)}>播放推流视频</IonButton>
      <IonButton onClick={() => clickMe(1)}>显示弹窗</IonButton> */}
    </IonContent>
  );
}
