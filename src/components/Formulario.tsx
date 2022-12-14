import { ChangeEvent, useState } from "react";

export const Formulario = () => {
    const [formulario, setFormulario] = useState({
        email: "",
        nombre: "",
    });

    /* Los eventos onChange son de tipo "ChangeEvent" en TS y dentro de ellos hay que especificar también el tipo interno. En el caso de los formularios, como lo es en este caso, debemos usar <HTMLInputElement> */
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        /* Es recomendable destructurar el valor actual del formulario al momento de setear un nuevo state, ya que puede tener más variables que las iniciales */
        setFormulario({
            ...formulario,
            [name]: value
        })
    };

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" name="nombre" onChange={handleChange}/>
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    );
};
