import { IonContent, IonHeader, IonIcon, IonPage, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { playCircle, radio, library, search } from 'ionicons/icons';
import { useState } from 'react';
import Index from './pages/Index/Index';
import List from './pages/List/List';
import About from './pages/About/About';

const Home: React.FC = () => {
  const [bar_arr] = useState([
    {
      tab: 'home',
      name: '首页',
      icon: playCircle,
      page: Index
    },
    {
      tab: 'list',
      name: '列表',
      icon: radio,
      page: List
    },
    {
      tab: 'about',
      name: '关于',
      icon: library,
      page: About
    }
  ])

  return (
    <IonPage>
      <IonTabs>
        {bar_arr.map(item => {
          return <IonTab tab={item.tab}>
            {item.page()}
          </IonTab>
        })}

        <IonTabBar slot="bottom">
          {bar_arr.map(item => {
            return <IonTabButton tab={item.tab}>
              <IonIcon icon={item.icon} />
              {item.name}
            </IonTabButton>
          })}
        </IonTabBar>
      </IonTabs>
    </IonPage >
  );
};

export default Home;
