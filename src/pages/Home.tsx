import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent
} from "@ionic/react";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <div className="home-container">

          {/* Saludo */}
          <div className="saludo">
            <p className="nombre-app">AMY Lingual</p>

            <h1>
              Hola, Juanita 
            </h1>

            <span>Es un gran día para aprender algo nuevo.</span>
          </div>

       
          <IonCard className="proxima-clase">
            <IonCardContent>

              <p>Próxima clase</p>

              <h2>Martes 7:00 PM</h2>

              <span> Inglés Avanzado B2</span>

            </IonCardContent>
          </IonCard>

          
          <IonCard className="progreso">
            <IonCardContent>

              <div className="titulo-progreso">
                <h3> Tu progreso</h3>
                <h2>65%</h2>
              </div>

              <div className="barra">
                <div className="relleno"></div>
              </div>

              <p>Terminas clase el 17 de julio</p>

            </IonCardContent>
          </IonCard>

          
          <IonCard className="meta">
            <IonCardContent>

              <p>META DE HOY</p>

              <h2>Completar la unidad 4</h2>

            </IonCardContent>
          </IonCard>

         

          <h2 className="titulo"> Pendientes</h2>

          <div className="item">
            <span> Tarea de vocabulario</span>
            <span>›</span>
          </div>

          <div className="item">
            <span> Ejercicio de listening</span>
            <span>›</span>
          </div>

         

          <h2 className="titulo"> Mensajes</h2>

          <IonCard className="mensaje">
            <IonCardContent>

              <strong>Profesor Carlos</strong>

              <p>
                "Revisa la pronunciación de las vocales en la Unidad 3 antes
                de nuestra clase."
              </p>

            </IonCardContent>
          </IonCard>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home; // <--- ¡Esta línea es la clave mágica!