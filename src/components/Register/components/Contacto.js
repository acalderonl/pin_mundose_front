import "../../style/Contacto.css";

function Contacto(props) {
  return (
    <>
      <div className="contenedor-contacto" >
        <img src="./img/img-contact.jpg" className="img-bcontact" />
        <div className="form-contact">
          <h2>Envianos un mensaje</h2>
          <form onSubmit={props.handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                id="nombre"
                onChange={props.handleChange}
                value={props.newtext.nombre}
              />
              <label htmlFor="nombre">Nombre</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="apellido"
                onChange={props.handleChange}
                value={props.newtext.apellido}
              />
              <label htmlFor="apellido">Apellido</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="correo"
                onChange={props.handleChange}
                value={props.newtext.correo} />
              <label htmlFor="correo">Email</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="celular"
                onChange={props.handleChange}
                value={props.newtext.celular} />
              <label htmlFor="celular">Celular</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="mensaje"
                onChange={props.handleChange}
                value={props.newtext.mensaje} />
              <label htmlFor="mensaje">Mensaje</label>
            </div>
            <button className="btn-enviar" disabled={props.disableSubmit} type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Enviar
            </button>
          </form>
          {props.success && (
            <div className="alert alert-success m-3" role="alert">
              Tu solicitud fue aceptada con exito!
            </div>
          )}

          {props.error && (
            <div className="alert alert-danger m-3" role="alert">
              {props.errorMessage}
            </div>
          )}
        </div>

      </div>
    </>
  );

}

export default Contacto;
