import React, { useState } from 'react';
import styled from 'styled-components'; 
import Frase from './components/Frase';

const Boton = styled.button`

  background:-webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: 'Ariel', Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

const Contenedor = styled.div`

  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;

`;

function App() {

  const [frase, setFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch("http://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frase = await api.json();
    setFrase(frase[0])
  }


  return (

    <Contenedor>

      <Frase
      
        frase={frase} 
      
      />

        <Boton
          onClick={consultarApi}
        >

          Obtener frase

        </Boton>

    </Contenedor>
  );
}

export default App;
