import { RegisterForm } from '../forms/registerForm';
import imguax from '../../img/Imagen-UAX-transformed.png';


export const Home = () => {
    return (
      <div>
        <img src={imguax} className="imguax" />
        <h1>Inscripción Torneo Juegos UAX 2024</h1>
        <RegisterForm />
        <div class="fixed-footer">
          <p>
          Creado por 
          <a href="https://www.linkedin.com/in/mario-rodriguez-rodriguez-7104aa330/">Mario Rodriguez</a>
          <a href="https://www.linkedin.com/in/mario-asenjo-p%C3%A9rez-389547213/">Mario Asenjo</a>
          <a href="https://www.linkedin.com/in/carloslindosogrijota/">Carlos Lindoso</a>
          <a href="">Gregory Cañon</a>
        </p>
        </div>
      </div>
    );
}