import { RegisterForm } from '../forms/registerForm';
import imguax from '../../img/Imagen-UAX-transformed.png';


export const Home = () => {
    return(
        <div>
            <img src={imguax} className="imguax"/>
            <h1>Inscripción Torneo Juegos UAX 2024</h1>
            <RegisterForm/>
        </div>
    );
}