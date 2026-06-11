

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

            <div className="dia activo">
              <span>Mar</span>
              <strong>17</strong>
            </div>

            <div className="dia">
              <span>Mié</span>
              <strong>18</strong>
            </div>

            <div className="dia">
              <span>Jue</span>
              <strong>19</strong>
            </div>

            <div className="dia">
              <span>Vie</span>
              <strong>20</strong>
            </div>
          </div>

         
          <IonCard className="curso-card">
            <IonCardContent>
              <p className="estado">● EN CURSO</p>

              <h2>Inglés para Negocios</h2>

              <p>Módulo 4: Presentaciones de Impacto</p>

              <IonButton color="warning" shape="round">
                Unirse ahora
              </IonButton>
            </IonCardContent>
          </IonCard>

          
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

