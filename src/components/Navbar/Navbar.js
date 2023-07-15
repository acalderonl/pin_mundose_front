import "../style/Nav.css";
import Landing from "../../pagginations/Landing";
import Conocenos from "../../pagginations/Conocenos";
import Promos from "../../pagginations/Promos";
import Servicios from "../../pagginations/Servicios";
import Fotter from "../../pagginations/Fotter";
import Register from "../Register"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top m-1">
        <div className="container-fluid">
          <a className="nav-item space-logo" href="#landing">
            <img src="./img/logo.png" className="logo" />
          </a>
          <div
            className="collapse navbar-collapse justify-content-end espace"
            id="navbarSupportedContent"
          >
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link space-text " href="#conocenos">
                  Conocenos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link space-text" href="#promos">
                  Promociones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link space-text" href="#servicios">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link space-text" href="#contacto">
                  Contacto
                </a>
              </li>
              <div className="linea"></div>
            </ul>
          </div>
        </div>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <div id="landing">
          <Landing />
        </div>

        <div id="conocenos">
          <Conocenos />
        </div>

        <div id="promos">
          <Promos />
        </div>

        <div id="servicios">
          <Servicios />
        </div>

        <div id="contacto">
          <Register />
        </div>

        <div>
          <Fotter />
        </div>
      </div>
    </>
  );
}

export default Navbar;
