import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
} from "@ionic/react";
import { useRef } from "react";
import "./style.css";

export default function PrediLection() {
  const predil_ection_arr = useRef();
  return (
    <IonContent>
      <IonGrid>
        <YRow
          card_arr={[
            ["1", "2", "3", "4"],
            ["4", "5", "6", "7"],
          ]}
        />
      </IonGrid>
    </IonContent>
  );
}

/**行 */
function YRow({ card_arr }: YRowProps) {
  return (
    <IonRow>
      {card_arr.map((card_s: string[], i) => {
        return <YCol card_arr={card_s} key={i} />;
      })}
    </IonRow>
  );
}

/**列 */
function YCol({ card_arr }: YColProps) {
  return <>
    {card_arr.map((card_data, i) => {
      return (
        <IonCol size="1" key={i}>
          <YCard card={card_data} />
        </IonCol>
      );
    })}
  </>;
}

/**卡片 */
function YCard({ card }: YCardProps) {
  return (
    <IonCard>
      <IonCardContent>{card}</IonCardContent>
    </IonCard>
  );
}

interface YCardProps {
  card: string;
}
interface YColProps {
  card_arr: string[];
}
interface YRowProps {
  card_arr: string[][];
}
