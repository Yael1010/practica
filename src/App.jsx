
import './App.css'
import { Button } from './components/button';
import { useState } from 'react';

function App() {
  const [estado, setEstado] = useState("verdadero");
  return (
    <>
      <div>
        <h1>{estado}</h1>

        <button
          onClick={() => {
            if (estado == "verdadero") {
              setEstado("Falso");
            } else {
              setEstado("verdadero");
            }
          }}
        >
          Cambiar estado
        </button>  
      <button
        onClick={() => {
          alert("cuidado")
        }}alerta</button>
      <button texto={"ayuda"}></button>
  
    </div>
    </>
  );
}

export default App;
