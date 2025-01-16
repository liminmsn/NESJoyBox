import { IonContent } from "@ionic/react";
import i18n from '../../i18n/i18n';

export default function List() {
    return <IonContent>
        <h1>{i18n.t('hello')}</h1>
    </IonContent>
}