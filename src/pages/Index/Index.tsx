import {
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardTitle,
  IonCol,
  IonContent,
  IonGrid, IonIcon, IonRippleEffect, IonRow,
  IonText
} from "@ionic/react";
import { Router } from "../../plugin/Plugins";
import { getM3u, M3uItem } from "../../tool/loadFile";
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { book, bookmark, bookmarkOutline, colorFill, eyeSharp, playCircleSharp } from 'ionicons/icons'
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
    getM3u().then((res) => {
      const grid = 3;
      const grid_arr = [] as any[];
      for (let i = 0; i < res.length; i += grid) {
        grid_arr.push(res.slice(i, i + grid));
      }
      setState(grid_arr);
    });
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
                  >
                    <IonCard className="ion-activatable ripple-parent">
                      <IonRippleEffect></IonRippleEffect>
                      <IonCardHeader>
                        <IonCardTitle>
                          <IonText>{card.name}</IonText>
                        </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonText>{card.url}</IonText>
                      </IonCardContent>
                      <div className="info">
                        <IonText>ERR:0</IonText>
                      </div>
                      <div className="play">
                        <IonIcon icon={bookmarkOutline} size="large" />
                        <IonIcon onClick={() => onPlay(card.url)} icon={playCircleSharp} size="large" />
                      </div>
                    </IonCard>
                  </IonCol>
                );
              })}
            </IonRow>
          );
        })}
      </IonGrid>
    </IonContent>
  );
}
