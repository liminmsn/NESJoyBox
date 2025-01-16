import { IonContent, IonImg } from "@ionic/react";
import icon from "../../../public/favicon.png";
import './style.css';

const about_label = "关于"

export default function About() {
    return <IonContent class="About_content">
        <div className="head">
            <IonImg style={{ 'width': '25pt' }} src={icon} />
            <h1>About</h1>
        </div>
        <p style={{ fontSize: "12pt", lineHeight: 1.6 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;在数字化浪潮的推动下，一款采用 Ionic 开发的 HLS 直播流视频 App 惊艳登场，为用户带来前所未有的视听盛宴。<br />
            它凭借先进的 Ionic 框架，实现了流畅且高效的性能，无论是在繁华都市的喧嚣中，还是宁静乡村的角落，都能稳定运行。<br />
            此款 App 支持广泛的 HLS 直播流格式，意味着你能轻松畅享来自全球各地的丰富直播内容。
            <br />
            无论是激动人心的体育赛事，让你仿佛置身赛场与选手一同拼搏；<br />
            还是精彩纷呈的文艺演出，如同亲临现场感受艺术的魅力；<br />
            亦或是实时的新闻资讯，助你第一时间掌握天下大事。<br />
            其界面设计简洁直观，操作便捷，即便是初次使用的用户，也能迅速上手。<br />
            这款 Ionic 开发的 HLS 直播流视频 App，无疑是你生活中不可或缺的娱乐伴侣，带你探索无限精彩。
        </p>
        <div className="ms">- leo yang</div>
        <div style={{ textAlign: 'center', color: '#555' }}>-END-</div>
    </IonContent>
}