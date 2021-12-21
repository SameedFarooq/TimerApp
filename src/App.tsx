import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import TimerClock from './components/timer-clock/timer-clock';
// import Calendar from './components/Calendar/Calendar';
import AttendanceProfile from './components/attendance-profile/attendance-profile';
import Settings from './components/Settings/Settings';
import ActivityScedule from './components/ActivityScedule/ActivityScedule';
import SignIn from './components/SignIn/SignIn';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/timer-clock">
          <TimerClock />
        </Route> 
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/activity-scedule">
          <ActivityScedule />
        </Route>
        {/* <Route exact path="/signin">
          <SignIn />
        </Route> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
