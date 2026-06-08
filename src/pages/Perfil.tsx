import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Perfil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Configuración de Perfil</h2>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;