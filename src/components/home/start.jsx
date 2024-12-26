import React from 'react';
import imguax from "../../img/imguax2.png";
import { useNavigate } from 'react-router-dom';

export const Start = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registro');
  };
  return (
    <div className="App">
      <header>
        <img src={imguax} className="imguax" />
        <h1>¡Bienvenido al Torneo de Juegos UAX 2024!</h1>
      </header>

      <div className="content-container">
        <section className="info">
          <h2>Información Principal</h2>
          <p id='tx'>
            Este viernes a las 8:30 AM se llevará a cabo un torneo de
            videojuegos donde podrás demostrar tus habilidades y competir contra
            alumnos de la UAX. Los juegos disponibles para el torneo están
            listados en el formulario de inscripción, así que asegúrate de
            revisar las opciones y estar listo para jugar. ¡Nos vemos el
            viernes!
          </p>
        </section>

        <section className="info">
          <h2>¿Cómo Participar?</h2>
          <p>
            Inscríbete a través de nuestro formulario de registro y elige los
            juegos en los que te gustaría participar. El NP se pedira cuando
            empiece el torneo para comprobar que tus datos sean correctos.
          </p>
          <button onClick={handleRegisterClick} className='btns'>¡Regístrate Ahora!</button>
        </section>
      </div>
    </div>
  );
};
