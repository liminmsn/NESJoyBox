import { registerPlugin } from "@capacitor/core";
interface AlertType {
  showTips(options: { value: string }): Promise<{ value: string }>;
}
interface RouterType {
  openPage(options: { path: string; obj: object }): Promise<{ value: string }>;
}

export const Alert = registerPlugin<AlertType>("Alert");
export const Router = registerPlugin<RouterType>("Router");
