import { IonButton, IonContent } from "@ionic/react";
import { Alert, Router } from "../../plugin/Plugins";
import { Capacitor } from "@capacitor/core";

export default function Index() {
  async function clickMe(item: number) {
    if (Capacitor.isNativePlatform()) {
      let val;
      switch (item) {
        case 0:
          val = await Router.openPage({
            path: "HLSPlay",
            obj: { url: "https://live.wjyanghu.com/live/CH1.m3u8" },
          });
          break;
        case 1:
          val = await Alert.showTips({ value: "Hello World" });
          console.log(val);
          break;
      }
    }
  }
  return (
    <IonContent>
      <IonButton onClick={() => clickMe(0)}>播放推流视频</IonButton>
      <IonButton onClick={() => clickMe(1)}>显示弹窗</IonButton>
    </IonContent>
  );
}
