import { IonButton, IonContent } from "@ionic/react";
import { Alert, Router } from "../../plugin/Plugins";

export default function Index() {
  async function clickMe(item: number) {
    if (item == 0) {
      const val = await Router.openPage({ path: "HLSPlay", obj: { url: "https://live.wjyanghu.com/live/CH1.m3u8" } });
    }
    if (item == 1) {
      const val = await Alert.showTips({ value: "Hello World" });
      console.log(val);
    }
  }
  return (
    <IonContent>
      <IonButton onClick={() => clickMe(0)}>播放推流视频</IonButton>
      <IonButton onClick={() => clickMe(1)}>显示弹窗</IonButton>
    </IonContent>
  );
}
