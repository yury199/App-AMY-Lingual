import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Practicar: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Practicar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Sección: Ejercicios y Práctica</h2>
      </IonContent>
    </IonPage>
  );
};

export default Practicar;