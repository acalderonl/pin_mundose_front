import "./style/Landing.css";

function Landing() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide contenedor-landing"
        data-bs-ride="carousel"
        data-bs-pause="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <span></span>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <span></span>
          </button>
        </div>

        <div class="carousel-inner">
          <button class="btn-flotante" data-bs-toggle="modal" data-bs-target="#exampleModal">Leer mas ...</button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Horarios de Atencion</b></h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h4>Lunes - Viernes</h4>
                  <p>7:30am - 18:00pm</p>
                </div>
                <div class="modal-body">
                  <h4>Sabados - Domingos</h4>
                  <p>9:30am - 14:00pm</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-ss" data-bs-dismiss="modal">Cerrar</button>

                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item active">
            <img
              src="./img/lan_1.jpg"
              class="img-fluid d-block img-centered w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/img/lan_4.jpg"
              class="img-fluid d-block img-centered w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/img/lan_2.jpg"
              class="img-fluid d-block img-centered w-100"
              alt="..."
            />
          </div>
        </div>
        <div className="palm">
          <img src="./img/palm.png" />
        </div>
        <h5 className="slogan">¡SOMOS LA PRIMERA OPCIÓN DE VARIOS CLIENTES!</h5>
      </div>
    </>
  );
}

export default Landing;
