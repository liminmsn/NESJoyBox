import { registerPlugin } from "@capacitor/core";
interface AlertType {
  showTips(options: { value: string }): Promise<{ value: string }>;
}
interface RouterType {
  openPage(options: { url: string }): Promise<{ value: string }>;
}

export const Alert = registerPlugin<AlertType>("Alert");
export const Router = registerPlugin<RouterType>("Router");
