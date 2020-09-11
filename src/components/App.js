import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((response) => {
      const datos = response.data;
      console.log(datos);
    });
    setUsuarios([
      {
        nombre: "Estiventh",
        apellido: "Neira",
        correo: "estiventhneira@gmail.com",
        id: 1,
      },
      {
        nombre: "Claudio",
        apellido: "Marino",
        correo: "claudiomarino@gmail.com",
        id: 2,
      },
    ]);
  }, []);

  return (
    <div className="App">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>correo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
