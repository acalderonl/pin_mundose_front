import { useState } from "react";
import Contacto from "../pagginations/Contacto"
import axios from "axios"

function SendMessage() {
    const [newMessage, setNewMessage] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: ""
    })

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const disableSubmit = !newMessage.nombre || !newMessage.correo || !newMessage.telefono || !newMessage.mensaje

    const handleChange = (event) => {
        const property = event.target.id;
        const value = event.target.value;
        setNewMessage({ ...newMessage, [property]: value });
        if (success) setSuccess(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
        })
            .then((response) => {
                setSuccess(true);
                setNewMessage({
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
    };

    return (
        <Contacto
            errorMessage={errorMessage}
            error={error}
            success={success}
            disableSubmit={disableSubmit}
            newMessage={newMessage}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );

}

export default SendMessage;