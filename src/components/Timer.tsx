import { useEffect, useRef, useState } from "react";

/* Si vamos a recibir argumentos en este componente, tenemos que definir el tipo de argumentos que recibirá, eso se hace utilizando el comando 'type' seguido del nombre del objeto de tipo de argumento. Esto puede ir al final o al principio del componente 

También podríamos hacer un objeto con una propiedad opcional (en caso de no requerirla estrictamente). Se haría de la siguiente manera:

type TimeArgs = {
    milisegundos: number,
    segundos?: number
}
*/

type TimerArgs = {
    milisegundos: number;
};

export const Timer = ({ milisegundos }: TimerArgs) => {
    /* Nota: milisegundos viene destructurado de los argumentos: {milisegundos}: TimerArgs == args: TimerArgs */

    const [segundos, setSegundos] = useState(0);

    // NodeJS.Timeout es el tipado de la función setInterval
    const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {
        /* Cuando hacemos una función callback dentro de un hook useState, como lo es en el caso siguiente, estamos trabajando realmente sobre el valor actual de la variable, en este caso: segundos. Así, cada 1000 ms que van pasando, se suma realmente un 1 sobre el valor actual de la variable. De no haberlo hecho así, se podría haber causado un conflicto con el hook useEffect, donde el valor de los segundos sería algo erróneo */

        /* Como estamos usando una función setInterval en nuestro useEffect, es muy probable que al modificar una variable, en este caso el argumento 'milisegundos', la función tal y como la tenemos previamente se ejecutará tantas veces cambiemos el argumento, resultando en un problema ya que no queremos que hayan varios setInterval modificando a la variable segundos. A esto también se le conoce como reconstrucción de la función.
        
        Para esto necesitamos usar un hook de referencia de React: useRef
        useRef nos servirá para que cuando tengamos algo ejecutándose en useEffect, susceptible a reconstruirse, no importa la cantidad de veces que lo haga el componente siempre será el mismo puntero en memoria.

        ref.current mantiene el valor de referencia al actual
        */
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
    }, [milisegundos]);

    return (
        <div>
            <h4>
                {/*tag <small> hace el texto más chico */}
                Timer: <small>{segundos}</small>
            </h4>
        </div>
    );
};
