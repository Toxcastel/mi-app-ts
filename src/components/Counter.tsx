import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    // en tipado estricto agregamos :void para especificar que la función no regresa nada
    // el argumento de igual manera se le define un tipo. La sintaxis es similar, :number = 1 (el = 1 quiere decir que estamos pasando un valor 1 por defecto)
    const incrementar = (numero: number = 1): void => {
        setCounter(counter + numero);
    };

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>Valor: {counter}</span>
            <br />
            {/* si dejaramos solo 'incrementar' estaríamos pasando el evento, por eso debemos hacer () => incrementar() */}
            <button onClick={() => incrementar()} className="btn btn-outline-primary mt-2">
                +1
            </button>
            <button onClick={() => incrementar(2)} className="btn btn-outline-primary mt-2">
                +2
            </button>
            <button onClick={() => setCounter(0)} className="btn btn-outline-danger mt-2">
                Reset
            </button>
        </div>
    );
};

export default Counter;
