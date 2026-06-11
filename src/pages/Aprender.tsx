

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton
} from '@ionic/react';

import './Aprender.css';


const Aprender: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aprender</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <div className="aprender-contenedor">

         
          <h2>Mi Horario</h2>

          <div className="dias">
            <div className="dia">
              <span>Lun</span>
              <strong>16</strong>
            </div>
          </div>

         
        

          
          <h2>Próximas Clases</h2>

          <div className="clase">
            <div>
              <h3>Gramática Avanzada</h3>
              <p> Prof. Andrea Gonzalez</p>
            </div>

            <div className="hora">
              <strong>15:00</strong>
              <p>Hoy</p>
            </div>
          </div>

          <div className="clase">
            <div>
              <h3>Club de Conversación</h3>
              <p> Yuri Briñez</p>
            </div>

            <div className="hora">
              <strong>17:30</strong>
              <p>Hoy</p>
            </div>
          </div>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Aprender;

