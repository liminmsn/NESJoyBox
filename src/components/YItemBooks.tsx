import { M3uItem } from "@/lib/loadFile";
import {
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  useIonAlert,
} from "@ionic/react";
import {
  bookmarkSharp,
  eye, playCircleOutline, trashOutline
} from "ionicons/icons";
import play from "@/../public/svg/play-svgrepo-com.svg";
import { onPlay } from "@/plugin/Plugins";

export default function YItemBooks({
  item,
  onDel,
}: {
  item: M3uItem;
  idx: number;
  onDel: (card: M3uItem) => void;
}) {
  const [presentAlert] = useIonAlert();

  return (
    <IonItem className="y-item">
      <IonImg style={{ height: "5vh", width: "5vh" }} src={play} />
      <div className="item">
        <IonLabel>{item.name}</IonLabel>
        <IonLabel>{new Date(item.history).toLocaleString()}&nbsp;</IonLabel>
        <IonLabel>
          <IonIcon icon={eye} style={{ fontSize: "10pt" }} />
          &nbsp;
          <IonText>{item.play}</IonText>
        </IonLabel>
      </div>
      <div className="item">
        <IonIcon
          className="books"
          icon={bookmarkSharp}
          onClick={() =>
            presentAlert({
              header: "注意",
              message: `确认取消收藏${item.name}？`,
              buttons: [
                {
                  text: "确认",
                  handler: () => onDel(item),
                },
                {
                  text: "取消",
                },
              ],
            })
          }
        />
        <IonIcon
          icon={playCircleOutline}
          onClick={async () => {
            await onPlay(item.url);
          }}
        />
      </div>
    </IonItem>
  );
}
