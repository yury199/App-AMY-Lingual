import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, useIonRouter } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useIonRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin' && password === '123') {
      router.push('/home', 'forward');
    } else {
      alert('Datos incorrectos. Usa admin y 123');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding simple-login">
        
        <div className="login-box">
          <h2>Bienvenido</h2>
          <p>Inicia sesión para continuar</p>

          <form onSubmit={handleLogin}>
            {/* Campo Usuario */}
            <div className="field">
              <label>Usuario</label>
              <IonInput 
                type="text" 
                placeholder="ej. admin" 
                value={email}
                onIonInput={(e) => setEmail(e.detail.value!)}
              />
            </div>

            {/* Campo Contraseña */}
            <div className="field">
              <label>Contraseña</label>
              <IonInput 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onIonInput={(e) => setPassword(e.detail.value!)}
              />
            </div>

            {/* Botón */}
            <IonButton type="submit" expand="block" color="warning">
              Inicia Sesión
            </IonButton>
          </form>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Login;