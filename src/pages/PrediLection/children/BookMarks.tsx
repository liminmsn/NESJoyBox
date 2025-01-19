import { IonButtons, IonContent, IonHeader, IonIcon, IonList, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { M3uItem, storage } from "../../../lib/loadFile";
import YNone from "@/components/YNone";
import { bookmarks } from "ionicons/icons";
import YItemBooks from "@/components/YItemBooks";

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
                    <IonText>Books</IonText>
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList style={{ backgroundColor: "#ffffff00", paddingBlock: "0" }}>
                {books!.play_list.flat(1).filter(item => item.books).length > 0 ? (
                    books!.play_list.flat(1).filter(item => item.books).map((m3u, idx) => {
                        return <YItemBooks item={m3u} idx={idx} onDel={onBookslItem} key={idx} />
                    })
                ) : (
                    <YNone />
                )}
            </IonList>
        </IonContent>
    </IonPage>
}