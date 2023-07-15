import { useState } from "react";
import Contacto from "../Register/components/Contacto"
import axios from "axios"

function SendMessage() {
    const [newtext, setNewText] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        celular: "",
        mensaje: ""
    });

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const disableSubmit = !newtext.nombre || !newtext.apellido || !newtext.correo || !newtext.celular || !newtext.mensaje;

    const handleChange = (event) => {
        const property = event.target.id;
        const value = event.target.value;

        setNewText({ ...newtext, [property]: value });
        if (success) setSuccess(false);
        console.log(newtext)
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: "POST",
            url: "https://pinbackfullstack-production.up.railway.app/api/register-client",
        })
            .then((response) => {
                setSuccess(true);
                setNewText({
                    nombre: "",
                    apellido: "",
                    correo: "",
                    celular: "",
                    mensaje: ""
                });
            })
            .catch((error) => {
                setError(error);
                error.message
                    ? setErrorMessage(error.message)
                    : setErrorMessage("Tuvimos un problema al procesar");
            });


    };

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