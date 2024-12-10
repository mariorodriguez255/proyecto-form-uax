import axios from 'axios';
const concursanteApi = axios.create({
    baseURL: "http://localhost:8080/api/torneo",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
export const createConcursante = async(formData) => {
    try {
        const response = await concursanteApi.post("/concursante/create", formData);
        alert("Usuario Creado");
    } catch (error) {
        console.error("Error al enviar datos", error);
    }
}

export const getAllConcursantes = async() => {
    try {
        const response = await concursanteApi.get("/concursante/showAll");
        return response.data;
    } catch (error) {
        console.error("Error recibir los datos", error);
    }
}

export const updateConcursantes = async([id, formData]) => {
    try {
        const response = await concursanteApi.put("/juego/assign/", formData);
        alert("Usuario Creado")
    } catch (error) {
        console.error("Error al enviar datos", error)
    }
}

axios.get("http://localhost:8080/api/torneo/concursante/get/concursante/2")
  .then((response) => {
    displayOutput(response);
  })
  .catch((err) => console.log(err));




  const [concursantes, setConcursantes] = useState([]);

  const getAllConcursantes = () => {
    return axios.get("http://localhost:8080/api/torneo/concursante/showAll")
    .then((response) => setConcursantes(response.data));
  }

  useEffect(() => {
    getAllConcursantes();
  },{})