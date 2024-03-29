import dayjs from 'dayjs';

function calculateBiorhythm(birthDate, targetDate, cycle){
    const birthDay = dayjs(birthDate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthDay, 'days');
return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculateBiorhythms(birthDate, targetDate){
    return {
        date: targetDate,
        physical: calculateBiorhythm(birthDate, targetDate, 23),
        emotional: calculateBiorhythm(birthDate, targetDate, 28),
        intellectual: calculateBiorhythm(birthDate, targetDate, 33),
    };
}

export function calculateBiorhythmSeries(birthDate, startDate, size) {
    const series = []; //Hay que devolver un array para recharts
    const startDay = dayjs(startDate).startOf('day');
    for (let i = 0; i < size; i++){
        const targetDate = startDay.add(i, 'days').toISOString();
        // cada día se calcula el target day
        series.push(calculateBiorhythms(birthDate, targetDate));
        // Se añade al array cada fecha calculada
        
    }
    return series;
}