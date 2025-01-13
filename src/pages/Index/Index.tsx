import { IonButton, IonContent } from "@ionic/react";
import Alert from "../../plugin/Alert";

export default function Index() {
    async function clickMe(item: number) {
        if (item == 0) {
        }
        if (item == 1) {
            const val = await Alert.echo({ value: "Hello World" });
            console.log(val);
        }
    }
    return <IonContent>
        <IonButton onClick={() => clickMe(1)}>显示弹窗</IonButton>
    </IonContent>
}