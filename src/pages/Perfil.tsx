import React from 'react';

import {
  IonContent,
  IonPage,
  IonIcon,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react';


import {
  pencilOutline,
  sparkles,
  globeOutline,
  chevronForwardOutline,
  addOutline,
  searchOutline,
  logOutOutline
} from 'ionicons/icons';

import './Perfil.css';
import image1 from '../assets/image1.png';
import imagen2 from '../assets/imagen2.png';

const Perfil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="perfil-contenedor">


          <div className="cabecera-perfil">
            <div className="caja-avatar">
              <img src={image1} alt="Usuario" className="image1-img" />
            </div>
            <h2 className="nombre-usuario">Juanita Perez</h2>
          </div>

    
          <div className="seccion">
       
              <h3>Mi Plan</h3>
     

            <div className="tarjeta tarjeta-plan">
              <div className="icono-plan"><IonIcon icon={sparkles} /></div>
              <div className="texto-plan">
                <h4>Plan Intermedio</h4>
                <p>Próximo cobro: 15 de Octubre</p>
              </div>
            </div>
          </div>

          {/* ================= IDIOMAS ================= */}
          <div className="seccion">
            <h3>Idiomas</h3>

            <div className="tarjeta idioma-nativo">
              <IonIcon icon={globeOutline} className="icono-globo" />
              <span className="texto-gris">Idioma Nativo</span>
              <span className="texto-fuerte">Español</span>
            </div>

            <div className="tarjeta idiomas-aprendiendo">
              <p className="texto-gris mb-10">Aprendiendo</p>
              <div className="caja-pildoras">
                <span className="pildora">Portugués <b>A1</b></span>
                <span className="pildora">Aprender más...+</span>
         
              </div>
            </div>
          </div>


          <div className="seccion">
            <h3>Mis Maestros</h3>
            <div className="tarjeta lista-maestros">
              <div className="maestro">
                <img src={imagen2} alt="Usuario" className="imagen2-img" />
                <span>Andrea V.</span>
              </div>
              
            </div>
          </div>

         
          <a className="boton-salir" href="/login">
            <IonIcon icon={logOutOutline} /> Cerrar Sesión
          </a>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;