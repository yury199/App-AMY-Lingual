import React from 'react';

/* 1. Componentes de estructura y maquetación de Ionic */
import { 
  IonContent, 
  IonPage, 
  IonIcon, 
  IonHeader, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

/* 2. SOLAMENTE los íconos */
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
          
          {/* ================= CABECERA ================= */}
          <div className="cabecera-perfil">
            <div className="caja-avatar">
              <img src="https://i.pravatar.cc/150?img=68" alt="Usuario" className="avatar-img" />
              <button className="boton-editar">
                <IonIcon icon={pencilOutline} />
              </button>
            </div>
            <h2 className="nombre-usuario">Lucía Fernández</h2>
            <p className="subtitulo-usuario">Estudiante de Idiomas desde 2023</p>
          </div>

          {/* ================= MI PLAN ================= */}
          <div className="seccion">
            <div className="seccion-titulo">
              <h3>Mi Plan</h3>
              <a href="#detalles">Ver detalles</a>
            </div>
            
            <div className="tarjeta tarjeta-plan">
              <div className="icono-plan"><IonIcon icon={sparkles} /></div>
              <div className="texto-plan">
                <h4>Plan Intermedio</h4>
                <p>Próximo cobro: 15 de Octubre</p>
              </div>
              <IonIcon icon={chevronForwardOutline} className="flecha" />
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
                <span className="pildora">Inglés <b>B2</b></span>
                <span className="pildora">Francés <b>A1</b></span>
                <button className="boton-circulo"><IonIcon icon={addOutline} /></button>
              </div>
            </div>
          </div>

          {/* ================= MIS MAESTROS ================= */}
          <div className="seccion">
            <h3>Mis Maestros</h3>
            <div className="lista-maestros">
              <div className="maestro">
                <img src="https://i.pravatar.cc/150?img=47" alt="Sarah" />
                <span>Sarah J.</span>
              </div>
              <div className="maestro">
                <img src="https://i.pravatar.cc/150?img=11" alt="Marc" />
                <span>Marc L.</span>
              </div>
              <div className="maestro">
                <img src="https://i.pravatar.cc/150?img=5" alt="Elena" />
                <span>Elena R.</span>
              </div>
              <div className="maestro">
                <button className="boton-buscar-maestro"><IonIcon icon={searchOutline} /></button>
                <span>Buscar</span>
              </div>
            </div>
          </div>

          {/* ================= BOTÓN SALIR ================= */}
          <button className="boton-salir">
            <IonIcon icon={logOutOutline} /> Cerrar Sesión
          </button>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;