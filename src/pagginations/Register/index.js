import { useState } from "react";
import Form from "./components/form";
import axios from "axios";

function Register() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    notifications: false,
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const disableSubmit =
    !newUser.username || !newUser.password || !newUser.email;

  const handleChange = (event) => {
    const property = event.target.id;
    const value = event.target.value;
    setNewUser({ ...newUser, [property]: value });
    if (success) setSuccess(false);
  };

  const handleCheck = (event) => {
    setNewUser({ ...newUser, notifications: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setSuccess(true);
        setNewUser({
          username: "",
          password: "",
          email: "",
          notifications: false,
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
    <Form
      errorMessage={errorMessage}
      error={error}
      success={success}
      disableSubmit={disableSubmit}
      newUser={newUser}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCheck={handleCheck}
    />
  );
}

export default Register;
