import {
  IonContent, IonIcon,
  IonPage,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText
} from "@ionic/react";
import { radioOutline, gridOutline, libraryOutline } from "ionicons/icons";
import Index from "./pages/Index/Index";
import PrediLection from "./pages/PrediLection/PrediLection";
import About from "./pages/About/About";
import i18n from "./i18n/i18n";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { storage, UsrData } from "./lib/loadFile";

export interface HomePropType {
  usr: UsrData;
  setUsr: Dispatch<SetStateAction<UsrData>>
}

const Home: React.FC = () => {
  const [usr, setUsr] = useState(storage.getUsr()!);
  const bar_arr = [
    {
      tab: "home",
      icon: radioOutline,
      page: <Index usr={usr} setUsr={setUsr} />
    },
    {
      tab: "predilection",
      icon: gridOutline,
      page: <PrediLection />,
    },
    {
      tab: "about",
      icon: libraryOutline,
      page: <About />
    },
  ];

  return (
    <IonPage>
      <IonTabs onIonTabsDidChange={() => setUsr(storage.getUsr()!)}>
        {bar_arr.map((item, idx) => {
          return <IonTab tab={item.tab} key={idx}>
            <IonContent>
              {item.page}
            </IonContent>
          </IonTab>
        })}
        <IonTabBar slot="bottom">
          {bar_arr.map((item, idx) => {
            return (
              <IonTabButton tab={item.tab} key={idx}>
                <IonIcon icon={item.icon} />
                <IonText>
                  <span style={{ fontSize: "10pt" }}>
                    {i18n.t(`tab_btn_label.${item.tab}`)}
                  </span>
                </IonText>
              </IonTabButton>
            );
          })}
        </IonTabBar>
      </IonTabs>
    </IonPage>
  );
};

export default Home;
