import { M3uItem } from "@/lib/loadFile";
import {
  IonAlert,
  IonButton,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  useIonAlert,
} from "@ionic/react";
import { eyeOutline, trashSharp } from "ionicons/icons";
import play from "@/../public/svg/play-svgrepo-com.svg";

export default function YItem({ item, idx }: { item: M3uItem; idx: number }) {
  const [presentAlert] = useIonAlert();

  return (
    <IonItem className="y-item">
      <IonImg style={{ height: "5vh" }} src={play} />
      <div className="item">
        <IonLabel>{item.name}</IonLabel>
        <IonLabel>{new Date(item.history).toLocaleString()}&nbsp;</IonLabel>
        <IonLabel>
          <IonIcon icon={eyeOutline} style={{ fontSize: "10pt" }} />
          &nbsp;
          <IonText>{item.play}</IonText>
        </IonLabel>
      </div>
      <div className="item">
        <IonIcon
          icon={trashSharp}
          onClick={() =>
            presentAlert({
              header: "注意",
              message: "A message should be a short, complete sentence.",
              buttons: ["Action"],
            })
          }
        />
      </div>
    </IonItem>
  );
}
