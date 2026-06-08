import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, 
  IonIcon, 
  IonLabel, 
  IonRouterOutlet, 
  IonTabBar, 
  IonTabButton, 
  IonTabs, 
  setupIonicReact 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Importamos los íconos*/
import { homeOutline, schoolOutline, barbellOutline, personOutline } from 'ionicons/icons';

import Home from './pages/Home';
import Aprender from './pages/Aprender';
import Practicar from './pages/Practicar';
import Perfil from './pages/Perfil';
import Login from './pages/Login';

/* Estilos obligatorios de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import './theme/variables.css';

setupIonicReact();

/* Barra de navegación */
const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Route exact path="/aprender" component={Aprender} />
        <Route exact path="/practicar" component={Practicar} />
        <Route exact path="/perfil" component={Perfil} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className="custom-tab-bar">
        <IonTabButton tab="home" href="/home">
          <IonIcon aria-hidden="true" icon={homeOutline} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>
        <IonTabButton tab="aprender" href="/aprender">
          <IonIcon aria-hidden="true" icon={schoolOutline} />
          <IonLabel>Aprender</IonLabel>
        </IonTabButton>
        <IonTabButton tab="practicar" href="/practicar">
          <IonIcon aria-hidden="true" icon={barbellOutline} />
          <IonLabel>Practicar</IonLabel>
        </IonTabButton>
        <IonTabButton tab="perfil" href="/perfil">
          <IonIcon aria-hidden="true" icon={personOutline} />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

/* condicional para separar login de las demás pantallas */
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        {/* Pantalla de Login */}
        <Route exact path="/login" component={Login} />

        {/* Si la ruta es cualquiera de estas, carga la barrita) */}
        <Route path="/home" component={MainTabs} />
        <Route path="/aprender" component={MainTabs} />
        <Route path="/practicar" component={MainTabs} />
        <Route path="/perfil" component={MainTabs} />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;