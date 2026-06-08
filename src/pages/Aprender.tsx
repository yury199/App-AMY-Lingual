import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Aprender: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aprender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Sección: Aprender Idiomas</h2>
      </IonContent>
    </IonPage>
  );
};

export default Aprender;