import { useEffect, useState } from "react";

export const Timer = () => {

    const [segundos, setSegundos] = useState(0)

    useEffect( ()=> {
        /* Cuando hacemos una función callback dentro de un hook useState, como lo es en el caso siguiente, estamos trabajando realmente sobre el valor actual de la variable, en este caso: segundos. Así, cada 1000 ms que van pasando, se suma realmente un 1 sobre el valor actual de la variable. De no haberlo hecho así, se podría haber causado un conflicto con el hook useEffect, donde el valor de los segundos sería algo erróneo */
        setInterval(() => setSegundos(s => s+1), 1000)
    }, [])

    return (
        <div>
            <h4>
                {/*tag <small> hace el texto más chico */}
                Timer: <small>{segundos}</small>
            </h4>
        </div>
    );
};
