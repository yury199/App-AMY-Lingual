import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import { personOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useIonRouter();

    const verificarUsuario = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'admin' && password === '123') {
            router.push('/home', 'forward');
        } else {
            alert('Datos incorrectos. Usa admin y 123');
        }
    };

    return (
        <IonPage>
            <IonContent className="el-login">

                <div className="login-contenedor">
                    <div className="login-header">
                        <h2>Bienvenido</h2>
                        <p>Inicia sesión para continuar</p>
                    </div>
                    

                    <form onSubmit={verificarUsuario}>

                        <div className="login-usuario">
                            <label>
                                <IonIcon icon={personOutline} />
                                Usuario
                            </label>
                            <IonInput
                                type="text"
                                placeholder="ej. admin"
                                value={email}
                                onIonInput={(e) => setEmail(e.detail.value!)}
                            />
                        </div>

                        <div className="login-usuario">
                            <label>
                                <IonIcon icon={lockClosedOutline} />
                                Contraseña
                            </label>
                            <IonInput
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onIonInput={(e) => setPassword(e.detail.value!)}
                            />
                        </div>


                        <IonButton type="submit" expand="block" >
                            Inicia Sesión
                        </IonButton>
                    </form>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default Login;