import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioCustomHook = () => {
    // const [formulario, setFormulario] = useState({
    //     email: "",
    //     nombre: "",
    // });

    // /* Los eventos onChange son de tipo "ChangeEvent" en TS y dentro de ellos hay que especificar también el tipo interno. En el caso de los formularios, como lo es en este caso, debemos usar <HTMLInputElement> */
    // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = target;

    //     /* Es recomendable destructurar el valor actual del formulario al momento de setear un nuevo state, ya que puede tener más variables que las iniciales */
    //     setFormulario({
    //         ...formulario,
    //         [name]: value
    //     })
    // };

    /* Para empezar a tipar el formulario, necesitamos crear la interface 
        Luego a useForm le tenemos que pasar esa interface como tipo de dato genérico: useForm<FormData>
        Posteriormente tiene que recibirlo en el hook, allá hay más info
    */
    interface FormData {
        email: string;
        nombre: string;
        edad: number;
    }

    const { formulario, handleChange, nombre, email, edad } = useForm<FormData>({ email: "", nombre: "", edad: 0 });

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" name="email" value={email} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" name="nombre" value={nombre} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="text" className="form-control" name="edad" value={edad} onChange={handleChange} />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    );
};
