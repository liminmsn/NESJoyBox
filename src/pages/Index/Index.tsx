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
import { M3uItem, storage, UsrData } from "../../lib/loadFile";
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { bookmark, bookmarkOutline, playCircleSharp } from 'ionicons/icons';
import "./style.css";

export default function Index() {
  /**播放url链接视频 */
  async function onPlay(url: string) {
    if (Capacitor.isNativePlatform()) {
      await Router.openPage({
        path: "HLSPlay",
        obj: { url: url },
      });
    }
  }
  /**收藏 */
  function onBooks(item: M3uItem) {
    item.books = !item.books;
    setState(storage.setUsr(state));
  }

  const [state, setState] = useState<UsrData>(new UsrData());
  useEffect(() => {
    const usr = storage.getUsr();
    if (usr != null) {
      setState(usr);
    }
  }, []);
  return (
    <IonContent className="Index">
      <IonGrid>
        {state.play_list.map((item, index) => {
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
                        <IonText>ERR:{0}</IonText>
                      </div>
                      <div className="play">
                        <IonIcon icon={card.books ? bookmark : bookmarkOutline} size="large" onClick={() => onBooks(card)} />
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
