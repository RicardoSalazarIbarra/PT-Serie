import './App.css';
import { Form } from './components/Formulario'
import { CalcularSerie, MostrarResultado } from './components/Calculo'
import { useState } from 'react';

function App() {
  const [numero, setNumero] = useState(null)
  const [resultado, setResultado] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <Form onCalcular={setNumero} />
        <CalcularSerie numero={numero} onResultado={setResultado} />
        <MostrarResultado resultado={resultado} />
      </header>
    </div>
  );
}

export default App;
