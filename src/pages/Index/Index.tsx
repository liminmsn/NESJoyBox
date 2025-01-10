import { IonButton, IonContent } from "@ionic/react";
import Alert from "../../plugin/Alert";

export default function Index() {
    async function clickMe() {
        const val = await Alert.echo({ value: "Hello World" });
        console.log(val);
    }
    return <IonContent>
        <IonButton onClick={clickMe}>Click Me</IonButton>
    </IonContent>
}