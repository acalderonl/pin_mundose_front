import "./style/Conocenos.css";

function Conocenos() {
  return (
    <div className="contenedor">
      {/* fondo de imagen */}
      <img src="./img/fondo.jpg" className="img-fondo-conocenos" />
      {/* Aqui esta el carousel */}
      <div className="card mb-3 card-propio">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src="./img/dueño.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">
                <b>Bob Tyrrell</b>
              </h5>
              <p className="card-text ">
                Corey Miller nacido en el mes de marzo de 1957 en los Estados
                Unidos, Luego, en el 1983, se fue a Hollywood y allí comenzó a
                trabajar en Sporlight Tattoo. Corey Miller era atraído por los
                diseños metaleros, las calaveras, etcétera.
              </p>
              <p className="card-text">
                <small className="text-muted">CEO Palm Tatto</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* aqui esta el texto */}
      <div className="d-text">
        <p className="p_conocenos">
          En Palm Tattoo Studio buscamos brindar un servicio de calidad en la
          ejecución de nuestros tatuajes, piercings o modificaciones corporales,
          contamos con una atención inmediata y personalizada. Durante el
          proceso de tú cita vivirás una experiencia exclusiva por muy buenos
          artistas profesionales, garantizamos un servicio de primera y te
          acompañaremos en el proceso de los cuidados y cicatrizaciones de los
          mismos.
        </p>
      </div>

      <div className="linea-c"></div>
    </div>
  );
}

export default Conocenos;
