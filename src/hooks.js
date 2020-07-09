import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
    const getInitialValue =  () => localStorage.getItem(key) ?? defaultValue;
    //Coge del Local, y si no el que le pasamos como default. Lo convertimos en función para
    //que lo lea una vez solamente

    const [value, setValue] = useState(getInitialValue);
    //value es la función getInitialvalue que mira en local o escribe la llamada desde appjs
    const setAndStoreValue = (newValue) => {
        setValue(newValue);
        //cambiamos value con lo que llamemos a SetAndStore

        localStorage.setItem(key, newValue);
        //guardamos en localNewValue
    }
    return [value, setAndStoreValue];
    //retornamos local o default y la función que lo añade a local 
}