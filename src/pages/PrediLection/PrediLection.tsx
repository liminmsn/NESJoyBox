import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";
import "./style.css";
import { useRef } from "react";
import { timeOutline, bookmarksOutline, constructOutline } from 'ionicons/icons'

export default function PrediLection() {
  const predil_ection_arr = useRef([
    [
      {
        icon: timeOutline,
        label: '播放记录'
      },
      {
        icon: bookmarksOutline,
        label: '我的收藏'
      },
      {
        icon: constructOutline,
        label: '设置'
      },
    ]
  ]);
  return (
    <IonContent className="PrediLection">
      <IonGrid>
        <YRow
          card_arr={predil_ection_arr.current}
        />
      </IonGrid>
    </IonContent>
  );
}

/**行 */
function YRow({ card_arr }: YRowProps) {
  return (
    <IonRow>
      {card_arr.map((card_s: CardData[]) => {   //row
        return card_s.map((card_data, key) => { //col
          return <IonCol size="1" key={key}>
            <YCard card={card_data} />
          </IonCol>
        })
      })}
    </IonRow>
  );
}

/**卡片 */
function YCard({ card }: YCardProps) {
  return (
    <IonCard>
      <IonCardContent>
        <IonIcon icon={card.icon} size="large" />
        <span style={{ fontSize: '12pt', marginTop: "5pt" }}>{card.label}</span>
      </IonCardContent>
    </IonCard>
  );
}

type CardData = {
  icon: string;
  label: string
};
interface YCardProps {
  card: CardData;
}
interface YRowProps {
  card_arr: CardData[][];
}
