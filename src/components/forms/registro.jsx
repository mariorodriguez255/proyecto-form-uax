import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import useFormulario from "../../hooks/forms/registerFormHook";
import axios from "axios";

Modal.setAppElement("#root");

export const Registro = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/zfug4nkvjjjkuxc2pnhmbywsa6miwj89.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initialFormState = {
    np: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    curso: "",
    ciclo: "",
    juegos: [],
  };

  const juegosDisponibles = [
    { id: 1, nombre: "Minecraft Juegos del Hambre" },
    { id: 2, nombre: "Counter Strike" },
    { id: 3, nombre: "Mario Kart" },
    { id: 4, nombre: "Super Smash Bros" },
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const valueInt = parseInt(value, 10);
    const newJuegos = checked
      ? [...formData.juegos, valueInt]
      : formData.juegos.filter((id) => id !== valueInt);
    handleChange({ target: { name: "juegos", value: newJuegos } });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(initialFormState);
  const { formData, handleChange, resetForm } = useFormulario(initialFormState);

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.juegos.length === 0) {
      alert("Por favor, seleccione al menos un juego.");
      return;
    }

    const juegosSeleccionados = juegosDisponibles.filter((juego) =>
      formData.juegos.includes(juego.id)
    );

    try {
      const response = await axios.post(
        "http://localhost:8080/api/torneo/concursante/register",
        { ...formData, juegos: juegosSeleccionados }
      );
      console.log("Formulario enviado", {
        ...formData,
        juegos: juegosSeleccionados,
      });
      setSubmittedData({ ...formData, juegos: juegosSeleccionados });
      openModal();
      resetForm();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  // Modals
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
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
            maxLength="6"
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
            <div key={juego.id}>
              <input
                type="checkbox"
                id={juego.id}
                value={juego.id}
                checked={formData.juegos.includes(juego.id)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={juego.id}>{juego.nombre}</label>
            </div>
          ))}
        </div>
        <button type="submit">Enviar</button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Datos Enviados"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Datos enviados correctamente</h2>
        <div>
          <p className="normal-text">NP: {submittedData.np}</p>
          <p className="normal-text">Nombre: {submittedData.nombre}</p>
          <p className="normal-text">
            Primer Apellido: {submittedData.apellido1}
          </p>
          <p className="normal-text">
            Segundo Apellido: {submittedData.apellido2}
          </p>
          <p className="normal-text">Curso: {submittedData.curso}</p>
          <p className="normal-text">Ciclo: {submittedData.ciclo}</p>
          <p className="normal-text">
            Juegos:{" "}
            {submittedData.juegos.map((juego) => juego.nombre).join(", ")}
          </p>
        </div>

        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};