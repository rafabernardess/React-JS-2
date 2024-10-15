import React from 'react';
import Saudações from './components/Saudacoes';

function App() {
  const isDia = true; // Mude para false para renderizar "Boa noite"

  return (
    <div>
      <Saudações isDia={isDia} />
    </div>
  );
}

export default App;
