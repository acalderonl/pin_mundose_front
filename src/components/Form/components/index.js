import { useState } from "react";
import Contacto from "../Contacto"
import axios from "axios"

function SendMessage() {
    /* const [newtext, setNewText] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: ""
    }); */

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const disableSubmit = !newtext.nombre || !newtext.correo || !newtext.telefono || !newtext.mensaje

    const handleChange = (event) => {
        const property = event.target.id;
        const value = event.target.value;
        setNewText({ ...newtext, [property]: value });
        if (success) setSuccess(false);
    }

    /* const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
        })
            .then((response) => {
                setSuccess(true);
                setNewText({
                    nombre: "",
                    correo: "",
                    telefono: "",
                    mensaje: ""
                });
            })
            .catch((error) => {
                setError(error);
                error.message
                    ? setErrorMessage(error.message)
                    : setErrorMessage("Tuvimos un problema al procesar");
            });
    }; */

    return (
        <Contacto
            errorMessage={errorMessage}
            error={error}
            success={success}
            disableSubmit={disableSubmit}
            newtext={newtext}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );

}

export default SendMessage;