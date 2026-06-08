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

// 1. Importamos los íconos oficiales de Ionicons
import { homeOutline, schoolOutline, barbellOutline, personOutline } from 'ionicons/icons';

// 2. Importamos tus páginas (las que vi en tu captura)
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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        
        {/* EL CONTENEDOR DE PÁGINAS: Aquí se carga el componente según la URL */}
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/aprender" component={Aprender} />
          <Route exact path="/practicar" component={Practicar} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/login" component={Login} />
          
          {/* Si el usuario entra a la raíz '/', lo redirigimos automáticamente a /home */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>

        {/* LA BARRA DE PESTAÑAS (Física, en la parte inferior) */}
        {/* Le ponemos slot="bottom" para que se fije abajo */}
        <IonTabBar slot="bottom" className="custom-tab-bar">
          
          {/* Pestaña 1: Inicio */}
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>

          {/* Pestaña 2: Aprender */}
          <IonTabButton tab="aprender" href="/aprender">
            <IonIcon aria-hidden="true" icon={schoolOutline} />
            <IonLabel>Aprender</IonLabel>
          </IonTabButton>

          {/* Pestaña 3: Practicar */}
          <IonTabButton tab="practicar" href="/practicar">
            <IonIcon aria-hidden="true" icon={barbellOutline} />
            <IonLabel>Practicar</IonLabel>
          </IonTabButton>

          {/* Pestaña 4: Perfil */}
          <IonTabButton tab="perfil" href="/perfil">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>

        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;