import "./style/Servicios.css";

function Tienda() {
  return (
    <div className="contenedor-tienda">
      <img src="./img/b_tienda.jpg" className="img-btienda" />

      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Especialista en piercings
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
              Los <strong>especialistas en piercings</strong> perforan varias partes del cuerpo, usando pistolas de agujas. Una vez hecho el agujero, aplican adornos y pendientes con fines decorativos.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Modificaciones corporales
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              Las <strong>modificaciones corporales</strong>es una práctica que puede ser permanente o transitoria, las primeras se llevan consigo como una huella plasmada en el cuerpo por el resto de la vida y las segundas se realizan en un momento particular de la vida del individuo cuya huella solo queda plasmada en la memoria del participante. Lo que se encuentra en común entre estas dos prácticas es que abarcan diversidad de fines entre los cuales se pueden encontrar la estética, identidad, funcionalidad, entre otros.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Especialitas en tatuajes
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              La <strong>tecnica de tatuar</strong> consiste en realizar un cambio en el cuerpo mediante el pinchazo en la primera capa de la piel. En esta capa vasal, la repetición de la punción de la aguja lentamente va creando el diseño del tattoo. Podríamos decir que esta es la manera tradicional de hacer un tatuaje.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tienda;
