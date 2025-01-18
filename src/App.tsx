import { Redirect, Route } from "react-router-dom";
import { IonApp, IonNav, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import PlayHistroy from "./pages/PrediLection/children/PlayHistroy";
import About from "./pages/About/About";
import Index from "./pages/Index/Index";
import PrediLection from "./pages/PrediLection/PrediLection";

setupIonicReact();

//其它页面
const children_page_arr = [
  {
    path: '/play_histroy',
    comp: PlayHistroy
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {children_page_arr.map((page, key) => {
        return <Route path={page.path} key={key} component={page.comp}/>
      })}
      <IonRouterOutlet>
        <Route exact path="/main" component={Home} />
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
