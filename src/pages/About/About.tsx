import { IonContent, IonImg } from "@ionic/react";
import icon from "../../../public/favicon.png";
import "./style.css";
import i18n from "../../i18n/i18n";

export default function About() {
  return (
    <IonContent class="About_content">
      <div className="head">
        <IonImg style={{ width: "25pt" }} src={icon} />
        <h1> {i18n.t(`about.title`)}</h1>
      </div>
      <p style={{ fontSize: "12pt", lineHeight: 1.6 }}>
        {i18n.t(`about.content.1`)}
      </p>
      <div className="ms">- {i18n.t(`about.content.2`)}</div>
      <div style={{ textAlign: "center", color: "#555" }}>
        -{i18n.t(`about.content.3`)}-
      </div>
    </IonContent>
  );
}
