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
import Bio from './components/biorhythmCard';


function App() {
const [birthDay, setBirthDay] = useState('01-01-1995');
const [targetDate, setTargetDate] =  useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
     
      <IonItem>
        <IonLabel position="stacked">Fecha de nacimiento:</IonLabel>
        <IonDatetime displayFormat="D-MMM-YYYY"
        value={birthDay}
        onIonChange={(event) => setBirthDay(event.detail.value)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Fecha para calcular:</IonLabel>
        <IonDatetime displayFormat="D-MMM-YYYY"
        value={targetDate}
        onIonChange={(event) => setTargetDate(event.detail.value)}
        />
      </IonItem>
      <Bio targetDate={targetDate} birthDay={birthDay}/>
      
      </IonContent>
    </IonApp>
  );
}

export default App;
