import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonItem,
  IonDatetime
} from '@ionic/react';
import React, {useState} from 'react';
import Bio from './components/BiorhythmCard';
import useLocalStorage from './hooks';


function App() {
const [birthDay, setBirthDay] = useLocalStorage('birthDate','');
const [targetDate, setTargetDate] =  useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
     {
        birthDay && <Bio targetDate={targetDate} birthDate={birthDay}/>
      }
      
      {/*Ojito con los nombres de las props*/}
      
      <IonItem>
        <IonLabel position="stacked">Fecha de nacimiento:</IonLabel>
        <IonDatetime displayFormat="D MMM YYYY"
        value={birthDay}
        onIonChange={(event) => setBirthDay(event.detail.value)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Fecha para calcular:</IonLabel>
        <IonDatetime displayFormat="D MMM YYYY"
        value={targetDate}
        onIonChange={(event) => setTargetDate(event.detail.value)}
        />
      </IonItem>
      
      </IonContent>
    </IonApp>
  );
}

export default App;
