import imguax from "../../img/imguax2.png";
import { Registro } from "../forms/registro";
import { EstadisticasJuegos } from "../forms/estadisticasJuegos";

export const Home = () => {
  return (
    <div>
      <header>
        <img src={imguax} className="imguax" />
        <h1>Registro Torneo Juegos</h1>
        <Registro />
      </header>
      <footer>
        <div class="fixed-footer">
          <p>
            Creado por
            <a href="https://www.linkedin.com/in/mario-rodriguez-rodriguez-7104aa330/">
              Mario Rodriguez
            </a>
            <a href="https://www.linkedin.com/in/mario-asenjo-p%C3%A9rez-389547213/">
              Mario Asenjo
            </a>
            <a href="https://www.linkedin.com/in/carloslindosogrijota/">
              Carlos Lindoso
            </a>
            <a href="https://www.linkedin.com/in/gregory-canon-ab3137239/">
              Gregory Cañon
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
