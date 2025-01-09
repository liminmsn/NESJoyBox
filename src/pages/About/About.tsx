import { IonContent, IonImg } from "@ionic/react";
import icon from "../../../public/favicon.png"

export default function About() {
    return <IonContent class="content">
        <h1>关于</h1>
        <IonImg src={icon} />
        <p>Here's a small text description for the content. Nothing more, nothing less.</p>
    </IonContent>
}