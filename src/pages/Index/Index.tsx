import { IonButton, IonContent } from "@ionic/react";
import Alert from "../../plugin/Alert";
import Camera from "../../plugin/Camera";

export default function Index() {
    async function clickMe(item: number) {
        if (item == 0) {
            const img_data = await Camera.taking_photos();
            console.log(img_data);
        }
        if (item == 1) {
            const val = await Alert.echo({ value: "Hello World" });
            console.log(val);
        }
    }
    return <IonContent>
        <IonButton onClick={() => clickMe(0)}>打开相机</IonButton>
        <IonButton onClick={() => clickMe(1)}>显示弹窗</IonButton>
    </IonContent>
}