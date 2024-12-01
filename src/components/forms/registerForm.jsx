import React, { useState } from "react";
import useFormulario from "../../hooks/forms/registerFormHook";

export const RegisterForm = () => {
  const initialFormState = {
    np: "",
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
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
        <label htmlFor="primerApellido">
          Primer Apellido:{" "}
          <input
            type="text"
            id="primerApellido"
            name="primerApellido"
            value={formData.primerApellido}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="segundoApellido">
          Segundo Apellido:{" "}
          <input
            type="text"
            id="segundoApellido"
            name="segundoApellido"
            value={formData.segundoApellido}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <br />
      <div className="form-group" id="drops">
        <label htmlFor="curso">
          Curso:
          <select name="" id="">
            <option value="">Primero</option>
            <option value="">Segundo</option>
          </select>
        </label>

        <label htmlFor="ciclo">
          Ciclo:
          <select name="" id="">
            <option value="">DAM</option>
            <option value="">ASIR</option>
          </select>
        </label>
      </div>
      <div className="form-group" id="juegos">
        <label>Juegos que desea jugar:</label>

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