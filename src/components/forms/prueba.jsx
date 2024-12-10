import React, { useState, useEffect } from "react";
import axios from "axios";

export const RegisterForm = () => {
  // Estado para almacenar los concursantes obtenidos de la API
  const [concursantes, setConcursantes] = useState([]);

  // Función para obtener los datos de los concursantes
  const fetchData = () => {
    // Realizamos una solicitud GET a la API de Java para obtener todos los concursantes
    axios
      .get("http://localhost:8080/api/torneo/concursante/showAll") // Asegúrate de que esta sea la URL correcta de tu API
      .then((response) => {
        // Al recibir los datos, los guardamos en el estado
        setConcursantes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los concursantes:", error);
      });
  };

  // Llamamos a fetchData cuando el componente se monta
  useEffect(() => {
    fetchData();
  }, []); // El array vacío asegura que solo se ejecute una vez al cargar el componente

  return (
    <div>
      <h1>Lista de Concursantes</h1>
      <ul>
        {Array.isArray(concursantes) ? (
          concursantes.map((concursante) => (
            <li key={concursante.np}>
              {concursante.nombre} {concursante.primerApellido} {concursante.segundoApellido}
            </li>
          ))
        ) : (
          <li>No hay concursantes disponibles</li>
        )}
      </ul>
    </div>
  );
  
};
