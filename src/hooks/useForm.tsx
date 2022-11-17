import { ChangeEvent, useState } from "react";

/* Para recibir interface, al useForm le tenemos que indicar que está esperando una interface genérica marcándola con una T: useForm<T>, luego su argumento será también de tipo T. La parte comentada corresponde a cómo se vería en una función normal, la otra es en función flecha */
// export function useForm<T>(initialState: T){
export const useForm = <T extends Object>(initState:T) => {
    const [formulario, setFormulario] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    };

    return {
        formulario,
        handleChange,
        ...formulario
        // puedo retornar el formulario de una vez destructurado también, cosa que no lo tenga que destructurar en los componentes
    }
}