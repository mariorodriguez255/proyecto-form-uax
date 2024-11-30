import {useState} from "react";

function useFormulario(initialState){
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevFormData) => {
          const newJuegos = checked
            ? [...prevFormData.juegos, value]
            : prevFormData.juegos.filter((juego) => juego !== value);
          return { ...prevFormData, juegos: newJuegos };
        });
      };

    const resetForm = () => setFormData(initialState);

    return{
        formData, handleChange, handleCheckboxChange, resetForm
    };
}

export default useFormulario;