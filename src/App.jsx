import Card from "./Components/Card";
import "./App.css";
import { useState } from "react";
function App() {
  const [error, setError] = useState(false)
  const [message, setMessage]=useState("")
  const [showCard, setShowCard] = useState(false)
  const [user, setUser] =useState({ name: "", number: "" , flavor:""})

  const handleChangeName = (e) => {
    setUser({...user, name: e.target.value})
  };

  const handleChangeNumber = (e) => {
    setUser({...user, number: e.target.value})
  };

  const handleChangeFlavor = (e) => {
    setUser({...user, flavor: e.target.value})
  };

  const eventHandler = (e) => {
    e.preventDefault();


    if (user.name.trim().length <= 3) {
      setError(true)
      setMessage("El nombre debe tener mínimo 3 caracteres*");
      return;  
    }

    if (user.number.length < 6) {
      setError(true)
      setMessage("El número de teléfono debe tener mínimo 6 caracteres*");
      return;  
    }

    setError("");

    setShowCard(true)
    setUser({ ...user });
  };
  

  return (
    <>
      <h1>Sugerencias sabores de helado 🍦 </h1>
      <form className="form" onSubmit={eventHandler}>
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Lina Alvarado"
          onChange={handleChangeName}
        />

        <label>Número de celular</label>
        <input
          type="text"
          placeholder="3013234556"
          onChange={handleChangeNumber}
        />

        <label>Sabor de helado</label>
        <input
          type="text"
          placeholder="Vainilla Gratinada"
          onChange={handleChangeFlavor}
        />

        <button>Enviar</button>
      </form>
       { error? <p className="error">{message}</p> : null}
       { showCard? <Card info={user}/> : null}

    </>
  );
}

export default App;
