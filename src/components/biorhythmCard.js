import React from 'react';
import dayjs from 'dayjs';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem } from '@ionic/react';
import { calculateBiorhythms } from '../calculations';
function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY')
}
function Biorhythmcard({birthDate, targetDate}){
    
    const {physical, emotional, intellectual} = calculateBiorhythms(birthDate, targetDate);

return(
<IonCard>
          <IonCardHeader>
          <IonCardTitle className="ion-text-center">{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
        <IonCardContent>
        <IonItem>
          <p>Physical: {physical.toFixed(4)}</p>
          </IonItem>
          <IonItem>
          <p>Emotional: {emotional.toFixed(4)}</p>
          </IonItem>
          <IonItem>
          <p>Intellectual: {intellectual.toFixed(4)}</p>
          </IonItem>
        </IonCardContent>
        </IonCard>
)}

export default Biorhythmcard ;