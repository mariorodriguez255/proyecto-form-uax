import React, { useState, useEffect } from "react";
import axios from "axios";

export const EstadisticasJuegos = () => {
  const [juegosStats, setJuegosStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hacemos el GET a la API
    const fetchJuegosStats = async () => {
      try {
        const response = await axios.post("http://localhost:8080/api/torneo/juego/showAll");
        setJuegosStats(response.data);
      } catch (error) {
        setError("Hubo un error al obtener los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchJuegosStats();
  }, []);

  if (loading) {
    return <p>Cargando estadísticas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Estadísticas de Participación en Juegos</h2>
      <ul>
        {juegosStats.map((juego) => (
          <li key={juego.id}>
            {juego.nombre}: {juego.numeroDeParticipantes} participantes
          </li>
        ))}
      </ul>
    </div>
  );
};
