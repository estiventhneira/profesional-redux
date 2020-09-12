import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((response) => {
      const datos = response.data;
      console.log(datos);
      setUsuarios(response.data);
    });
  }, []);

  return (
    <div className="App">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Compañia</th>
            <th>correo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.company.name}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
