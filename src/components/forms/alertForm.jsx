import React, { useState, useEffect } from "react";
import axios from "axios";

export const AlertForm = () => {
  const [submittedData] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Llamada GET para obtener los datos de los usuarios
    axios
      .get("http://localhost:8080/api/torneo/concursante/showAll")
      .then((response) => {
        console.log("Datos obtenidos:", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div>
      {submittedData && (
        <div className="data-window">
          <h2>Datos Enviados</h2>
          <p>
            <strong>NP:</strong> {submittedData.np}
          </p>
          <p>
            <strong>Nombre:</strong> {submittedData.nombre}
          </p>
          <p>
            <strong>Primer Apellido:</strong> {submittedData.apellido1}
          </p>
          <p>
            <strong>Segundo Apellido:</strong> {submittedData.apellido2}
          </p>
          <p>
            <strong>Curso:</strong> {submittedData.curso}
          </p>
          <p>
            <strong>Ciclo:</strong> {submittedData.ciclo}
          </p>
          <p>
            <strong>Juegos:</strong> {submittedData.juegos.join(", ")}
          </p>
        </div>
      )}

      {userData.length > 0 && (
        <div className="user-data">
          <h2>Datos de Usuarios</h2>
          {userData.map((user) => (
            <div key={user.np} className="user-card">
              <p>
                <strong>NP:</strong> {user.np}
              </p>
              <p>
                <strong>Nombre:</strong> {user.nombre}
              </p>
              <p>
                <strong>Primer Apellido:</strong> {user.apellido1}
              </p>
              <p>
                <strong>Segundo Apellido:</strong> {user.apellido2}
              </p>
              <p>
                <strong>Curso:</strong> {user.curso}
              </p>
              <p>
                <strong>Ciclo:</strong> {user.ciclo}
              </p>
              <p>
                <strong>Juegos:</strong>{" "}
                {user.juegos ? user.juegos.join(", ") : "N/A"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
