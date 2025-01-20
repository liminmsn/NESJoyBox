import { IonButtons, IonContent, IonHeader, IonIcon, IonList, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { M3uItem, storage } from "../../../lib/loadFile";
import YNone from "@/components/YNone";
import { bookmarks } from "ionicons/icons";
import YItemBooks from "@/components/YItemBooks";
import i18n from "@/i18n/i18n";

export default function BookMarks() {
    const [books, setBooks] = useState(storage.getUsr());

    useEffect(() => () => {

        // setBooks()
        console.log(storage.getUsr());
    }, [])

    function onBookslItem(item: M3uItem) {
        item.books = !item.books;
        setBooks(storage.setUsr(books!));
    }

    return <IonPage className="play_books">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start" style={{ marginLeft: "15pt" }}>
                    <IonIcon icon={bookmarks} size="large" />
                </IonButtons>
                <IonTitle>
                    <IonText>{i18n.t("predilection.card.2")}</IonText>
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList style={{ backgroundColor: "#ffffff00", paddingBlock: "0" }}>
                {books!.play_list.flat(1).filter(item => item.books).map((item, idx) => {
                    return <YItemBooks item={item} key={idx} idx={idx} onDel={() => onBookslItem(item)} />
                })}
               {books!.play_list.flat(1).filter(item => item.books).length === 0 && <YNone/>}
            </IonList>
        </IonContent>
    </IonPage>
}