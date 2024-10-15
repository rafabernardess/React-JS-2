import React from 'react';

const DivEstilizada = () => {
  const estilo = {
    backgroundColor: '#4CAF50', // Cor de fundo verde
    color: 'white', // Cor do texto
    padding: '20px', // Espaçamento interno
    margin: '20px', // Margem externa
    borderRadius: '5px', // Bordas arredondadas
    textAlign: 'center', // Alinhamento do texto
  };

  return (
    <div style={estilo}>
      <h1>Bem-vindo ao meu site!</h1>
      <p>Esta é uma div estilizada com estilo inline.</p>
    </div>
  );
};

export default DivEstilizada;
