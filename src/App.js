import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonLabel,
  IonItem
} from '@ionic/react';
import React, {useState} from 'react';

function App() {
const [nombre, setNombre] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonItem>
      <IonLabel position="stacked">Nombre:</IonLabel>
        <IonInput onIonChange={(event) => setNombre(event.detail.value)}/>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Fecha de nacimiento:</IonLabel>
        <IonInput />
      </IonItem>
      <p>Nombre: {nombre}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
