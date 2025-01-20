import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonList,
  IonListHeader,
  IonRippleEffect,
  IonRow,
} from "@ionic/react";
import {
  timeOutline,
  bookmarksOutline,
  constructOutline,
} from "ionicons/icons";
import PlayHistroy from "./children/PlayHistroy";
import { Route, useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import brows from "@/../public/svg/browse-svgrepo-com.svg";
import subscription from "@/../public/svg/subscription-svgrepo-com.svg";
import menu from "@/../public/svg/menu-svgrepo-com.svg";
import "./style.css";
import { HomePropType } from "@/Home";
import YItemHistory from "@/components/YItemHistory";
import { i } from "vite/dist/node/types.d-aGj9QkWt";
import YItemBooks from "@/components/YItemBooks";
import { M3uItem, storage } from "@/lib/loadFile";

export default function PrediLection({ usr, setUsr }: HomePropType) {
  const predil_ection_arr = [
    [
      {
        icon: timeOutline,
        icon_path: brows,
        label: i18n.t("predilection.card.1"),
        path: "/play_histroy",
        sum: usr.play_histry.length,
      },
      {
        icon: bookmarksOutline,
        icon_path: subscription,
        label: i18n.t("predilection.card.2"),
        path: "/book_marks",
        sum: usr.play_list.flat(1).filter((item) => item.books).length,
      },
      {
        icon: constructOutline,
        icon_path: menu,
        label: i18n.t("predilection.card.3"),
        path: "/settings",
      },
    ],
  ];

  const onDown = function (item: M3uItem, type: number) {
    switch (type) {
      case 0:
        const idx = usr.play_histry.indexOf(item);
        usr?.play_histry.splice(idx, 1); //删除记录
        setUsr(storage.setUsr(usr)); //存到本地在实时更新
        break;
      case 1:
        item.books = false;
        setUsr(storage.setUsr(usr)); //存到本地在实时更新
        break;
    }
  };

  return (
    <IonContent className="PrediLection">
      <Route exact path="/play_histroy">
        <PlayHistroy />
      </Route>
      <IonGrid>
        <YRow card_arr={predil_ection_arr} />
      </IonGrid>
      <IonList>
        <IonListHeader>{i18n.t("predilection.card.1")}</IonListHeader>
        {usr.play_histry.slice(0, 4).map((item, idx) => {
          return (
            <YItemHistory
              item={item}
              key={idx}
              idx={idx}
              onDel={() => onDown(item, 0)}
            />
          );
        })}
      </IonList>
      <IonList>
        <IonListHeader>{i18n.t("predilection.card.2")}</IonListHeader>
        {usr.play_list
          .flat(1)
          .filter((item) => item.books)
          .slice(0, 4)
          .map((item, idx) => {
            return (
              <YItemBooks
                item={item}
                key={idx}
                idx={idx}
                onDel={() => onDown(item, 1)}
              />
            );
          })}
      </IonList>
    </IonContent>
  );
}

/**行 */
function YRow({ card_arr }: YRowProps) {
  return (
    <IonRow>
      {card_arr.map((card_col_arr: CardData[]) => {
        //row
        return card_col_arr.map((card_data, key) => {
          //col
          return (
            <IonCol size="1" key={key}>
              <YCard card={card_data} />
            </IonCol>
          );
        });
      })}
    </IonRow>
  );
}

/**卡片 */
function YCard({ card }: YCardProps) {
  const history = useHistory();
  return (
    <IonCard
      className="ion-activatable ripple-parent"
      onClick={() => {
        history.push(card.path);
      }}
    >
      <IonRippleEffect></IonRippleEffect>
      <IonCardContent>
        {/* <IonIcon icon={card.icon} size="large" /> */}
        <IonImg src={card.icon_path} />
        <span style={{ fontSize: "12pt", marginTop: "5pt" }}>
          {card.label}
          <IonBadge slot="start" color={"dark"}>
            {card.sum}
          </IonBadge>
        </span>
      </IonCardContent>
    </IonCard>
  );
}

type CardData = {
  icon: string;
  icon_path: string;
  label: string;
  path: string;
  sum?: number;
};
interface YCardProps {
  card: CardData;
}
interface YRowProps {
  card_arr: CardData[][];
}
