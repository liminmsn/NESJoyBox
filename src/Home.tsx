import {
  IonIcon,
  IonPage,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
} from "@ionic/react";
import { radioOutline, gridOutline, libraryOutline } from "ionicons/icons";
import { useState } from "react";
import Index from "./pages/Index/Index";
import List from "./pages/List/List";
import About from "./pages/About/About";
import i18n from "./i18n/i18n";

const Home: React.FC = () => {
  const [bar_arr] = useState([
    {
      tab: "home",
      icon: radioOutline,
      page: Index,
    },
    {
      tab: "list",
      icon: gridOutline,
      page: List,
    },
    {
      tab: "about",
      icon: libraryOutline,
      page: About,
    },
  ]);

  return (
    <IonPage>
      <IonTabs>
        {bar_arr.map((item, idx) => {
          return (
            <IonTab tab={item.tab} key={idx}>
              <IonPage>
                <item.page />
              </IonPage>
            </IonTab>
          );
        })}
        {/* 底部tab栏按钮 */}
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
