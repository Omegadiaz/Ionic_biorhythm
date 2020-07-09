import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis} from 'recharts';
import { calculateBiorhythmSeries } from '../calculations';
import dayjs from 'dayjs';

function BiorhytmChart({ birthDate, targetDate}){
    const startDate = dayjs(targetDate).subtract(15, 'day').toISOString();
    //calculamos 15 dias antes para calcular la fecha de inicio
    const data = calculateBiorhythmSeries(birthDate, startDate, 31);
    return(
    <ResponsiveContainer width="100%" height={200}>
           <LineChart data={data}>
               <XAxis dataKey="date"/>
                <Line type="natural" dot={false} dataKey="physical"    stroke="green"/>
                <Line type="natural" dot={false} dataKey="emotional"   stroke="red"/>
                <Line type="natural" dot={false} dataKey="intellectual" stroke="blue"/>
           </LineChart>
    </ResponsiveContainer>

    );
}

export default BiorhytmChart;