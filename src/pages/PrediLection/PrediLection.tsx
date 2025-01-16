import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon, IonRippleEffect,
  IonRow
} from "@ionic/react";
import "./style.css";
import { useRef } from "react";
import { timeOutline, bookmarksOutline, constructOutline } from 'ionicons/icons';
import PlayHistroy from "./children/PlayHistroy";
import { Route, useHistory } from "react-router";
import i18n from "../../i18n/i18n";

export default function PrediLection() {
  const predil_ection_arr = useRef([
    [
      {
        icon: timeOutline,
        label: i18n.t("predilection.card.1"),
        path: "/play_histroy"
      },
      {
        icon: bookmarksOutline,
        label: i18n.t("predilection.card.2"),
        path: "/book_marks"
      },
      {
        icon: constructOutline,
        label: i18n.t("predilection.card.3"),
        path: "/settings"
      },
    ]
  ]);
  return (
    <IonContent className="PrediLection">
      <Route exact path="/play_histroy">
        <PlayHistroy />
      </Route>
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
      {card_arr.map((card_col_arr: CardData[]) => {   //row
        return card_col_arr.map((card_data, key) => { //col
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
  const history = useHistory();
  return (
    <IonCard className="ion-activatable ripple-parent" onClick={() => { history.push(card.path) }}>
      <IonRippleEffect></IonRippleEffect>
      <IonCardContent>
        <IonIcon icon={card.icon} size="large" />
        <span style={{ fontSize: '12pt', marginTop: "5pt" }}>{card.label}</span>
      </IonCardContent>
    </IonCard>
  );
}

type CardData = {
  icon: string;
  label: string;
  path: string;
};
interface YCardProps {
  card: CardData;
}
interface YRowProps {
  card_arr: CardData[][];
}
