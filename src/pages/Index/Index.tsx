import {
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardTitle,
  IonCol,
  IonContent,
  IonGrid, IonIcon, IonRippleEffect, IonRow,
  IonText
} from "@ionic/react";
import { onPlay } from "../../plugin/Plugins";
import { M3uItem, storage } from "../../lib/loadFile";
import { bookmark, bookmarkOutline, playCircleSharp } from 'ionicons/icons';
import { HomePropType } from "../../Home";
import "./style.css";



export default function Index({ usr, setUsr }: HomePropType) {
  /**收藏 */
  function onBooks(item: M3uItem) {
    item.books = !item.books;
    setUsr(JSON.parse(JSON.stringify(usr)));
    storage.setUsr(usr);
  }
  /**添加历史 */
  async function addHistory(card: M3uItem) {
    card.play += 1;
    card.history = new Date().getTime();
    usr.play_histry.push(card);
    setUsr(JSON.parse(JSON.stringify(usr)));
    storage.setUsr(usr);
    await onPlay(card.url);
  }
  return (
    <IonContent className="Index">
      <IonGrid>
        {usr.play_list.map((item, index) => {
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
                        <IonText>PLAY:<IonText color={"success"}>{card.play}</IonText></IonText>
                        <IonText>ERR:<IonText color={"warning"}>{card.err}</IonText></IonText>
                      </div>
                      <div className="play">
                        <IonIcon icon={card.books ? bookmark : bookmarkOutline} color={card.books ? "danger" : ""} size="large" onClick={() => onBooks(card)} />
                        <IonIcon onClick={() => addHistory(card)} icon={playCircleSharp} size="large" />
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
