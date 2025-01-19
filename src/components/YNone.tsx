import { IonImg, IonLabel, IonText } from "@ionic/react";
import internet from "@/../public/svg/the-internet-svgrepo-com.svg";
export default function YNone() {
  return (
    <div className="y-none">
      <IonImg src={internet} />
      <IonText>There is no data!</IonText>
    </div>
  );
}
