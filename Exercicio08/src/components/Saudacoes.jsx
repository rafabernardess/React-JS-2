import React from 'react';

const Saudacoes = ({ isDia }) => {
  return (
    <div>
      {isDia ? <h1>Bom dia!</h1> : <h1>Boa noite!</h1>}
    </div>
  );
};

export default Saudacoes;
