import { Capacitor, registerPlugin } from "@capacitor/core";
interface AlertType {
  showTips(options: { value: string }): Promise<{ value: string }>;
}
interface RouterType {
  openPage(options: { path: string; obj: object }): Promise<{ value: string }>;
}

export const Alert = registerPlugin<AlertType>("Alert");
export const Router = registerPlugin<RouterType>("Router");

/**播放url链接视频 */
export async function onPlay(url: string) {
  // console.log("播放",url);
  if (Capacitor.isNativePlatform()) {
    await Router.openPage({
      path: "HLSPlay",
      obj: { url: url },
    });
  }
}
