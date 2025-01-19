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
import i18n from "@/i18n/i18n";

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
              header: i18n.t("alert.0"),
              message: `确认取消收藏${item.name}？`,
              buttons: [
                {
                  text: i18n.t("alert.1"),
                  handler: () => onDel(item),
                },
                {
                  text: i18n.t("alert.2"),
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