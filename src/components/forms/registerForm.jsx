import React from "react";
import useFormulario from "../../hooks/forms/registerFormHook";
import axios from "axios";
export const RegisterForm = () => {
  const initialFormState = {
    np: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    curso: "",
    ciclo: "",
    juegos: [],
  };

  const juegosDisponibles = ["Minecraft HunterGames", "CS2", "Fortnite", "LoL"];


  const { formData, handleChange, handleCheckboxChange, resetForm } =
    useFormulario(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);

    axios
      .post("http://localhost:8080/api/torneo/concursante/create", formData)
      .then((response) => {
        alert("Datos enviados correctamente");
      })
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="np">NP:</label>
        <input
          type="text"
          id="np"
          name="np"
          value={formData.np}
          onChange={handleChange}
          required
          maxlength="6"
        />
      </div>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group" id="apellidos">
        <label htmlFor="apellido1">
          Primer Apellido:
          <input
            type="text"
            id="apellido1"
            name="apellido1"
            value={formData.apellido1}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="apellido2">
          Segundo Apellido:
          <input
            type="text"
            id="apellido2"
            name="apellido2"
            value={formData.apellido2}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <br />

      <div className="form-group" id="drops">
        <label htmlFor="curso">
          Curso:
          <select
            name="curso"
            id="curso"
            value={formData.curso}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Seleccione curso
            </option>
            <option value="1">Primero</option>
            <option value="2">Segundo</option>
          </select>
        </label>
        <label htmlFor="ciclo">
          Ciclo:
          <select
            name="ciclo"
            id="ciclo"
            value={formData.ciclo}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Seleccione ciclo
            </option>
            <option value="DAM">DAM</option>
            <option value="ASIR">ASIR</option>
          </select>
        </label>
      </div>

      <label>Juegos que desea jugar:</label>
      <div className="form-group" id="juegos">
        {juegosDisponibles.map((juego) => (
          <div key={juego}>
            <input
              type="checkbox"
              id={juego}
              value={juego}
              checked={formData.juegos.includes(juego)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={juego}>{juego}</label>
          </div>
        ))}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};