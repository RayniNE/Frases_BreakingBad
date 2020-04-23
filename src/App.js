import React from 'react';
import styled from 'styled-components';

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

  const consultarApi = () => {
    console.log("Con el lapiz no tu maldita madree");
  }





  return (

    <Contenedor>

        <Boton
          onClick={consultarApi}
        >

          Obtener frase

        </Boton>

    </Contenedor>
  );
}

export default App;
