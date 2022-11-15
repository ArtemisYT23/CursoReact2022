import { useState, useEffect } from "react";

const App = () => {
  //logica js
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => setCharacter(data.results));
  },[])

  useEffect(() => {
    console.log(character);
  },[])

  return (
    //logica html
    <div>
      <table border="1">
      <tr>
        <th>COD</th>
        <th>NOMBRE</th>
        <th>STATUS</th>
        <th>ACTION</th>
      </tr>

      {character.map((character, i) => (
        <tr>
          <td key={character.id}>{i + 1}</td>
          <td key={character.id}>{character.name}</td>
          <td key={character.id}>{character.status}</td>
          <td>
            <button>Editar</button>
            <button>Eliminar</button>
          </td>
        </tr>
      ))}
      </table>
    </div>
  );
};

export default App;
