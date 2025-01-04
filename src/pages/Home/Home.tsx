import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './sytle.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank12</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
