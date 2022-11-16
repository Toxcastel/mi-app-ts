import { useState } from "react";

/*
    Aquí la pregunta es: ¿cómo establecemos en el Login la información del usuario?
    Para esto en TypeScript debemos trabajar con clases o con interfaces para asignar el tipado
    interface: reglas que podemos ponerle a los objetos, no tienen una interpretación física en js
*/

interface User {
    uid: string;
    name: string;
}

const Usuario = () => {
    /* En TypeScript hay funciones con definición genérica como el 'useState' que podría manejar internamente "interfaces", es decir, objetos de JS que indican el tipado de cada propiedad del objeto */
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: "ABC123",
            name: "Fernando Herrera",
        });
    };
    return (
        <div className="mt-5">
            <h3>Usuario</h3>
            <button onClick={login} className="btn btn-outline-primary">
                Login
            </button>
            {!user ? <pre>No hay usuario</pre> : <pre> {JSON.stringify(user)}</pre>}
            {/* <pre> se refiere a texto preformateado, se imprimirá tal como lo veamos. Usamos JSON.stringify para mostrar como string el valor del objeto user */}
        </div>
    );
};

export default Usuario;
