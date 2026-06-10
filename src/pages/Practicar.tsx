import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { pencil } from 'ionicons/icons';
import './Practicar.css';

const Practicar: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Practicar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="practicar-contenedor">
        <h2>Sección: Ejercicios y Práctica</h2>
        <p>¡Bienvenido a la sección de práctica!</p>
        <p>Aquí podrás realizar ejercicios interactivos para mejorar tus habilidades lingüísticas. Selecciona un tema o nivel para comenzar:</p>
      <h3>Tareas</h3>
      <div className="bloque">
        <ul>
          <li><strong>Ejercicio de Vocabulario:</strong> Completa las palabras faltantes en las oraciones.</li>
          <li><strong>Ejercicio de Gramática:</strong> Elige la opción correcta para completar las frases.</li>
          <li><strong>Ejercicio de Comprensión Auditiva:</strong> Escucha el audio y responde las preguntas.</li>
          <li><strong>Ejercicio de Escritura:</strong> Escribe un párrafo utilizando las palabras aprendidas.</li>
        </ul>
      </div>
      <h3>Juegos Rapidos</h3>
      <div className="bloque">
        <div className="juego">
          <p>Memorizar</p>
          <IonIcon icon={pencil} />
        </div>
        <div className="juego">
          <p>Sopa de letras</p>
          <IonIcon icon={pencil} />
        </div>
      </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Practicar;