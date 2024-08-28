import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";

const initialUsers = [
  {
    nombre: "James Santiago Ordoñez Quiñones",
    correo: "james.ordonez@ingeaol.com",
    celular: "1234567890",
    cargo: "Super Administrador",
    tipo: "fijo",
    contratoInicio: "31/12/1969",
    contratoFin: "31/12/1969",
  },
  {
    nombre: "Jhon Mario Chilito",
    correo: "jhon.chilito@ingeaol.com",
    celular: "6543217890",
    cargo: "Super Administrador",
    tipo: "fijo",
    contratoInicio: "31/12/1969",
    contratoFin: "31/12/1969",
  },
  {
    nombre: "Andres Suarez Culma",
    correo: "andres.suarez@ingeaol.com",
    celular: "1234567890",
    cargo: "Super Administrador",
    tipo: "fijo",
    contratoInicio: "31/12/1969",
    contratoFin: "31/12/1969",
  },
  {
    nombre: "Santiago Sallas",
    correo: "santiago.sallas@ingeaol.com",
    celular: "1234567220",
    cargo: "Super Administrador",
    tipo: "fijo",
    contratoInicio: "31/12/1969",
    contratoFin: "31/12/1969",
  },
];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = initialUsers.filter(
    (user) =>
      user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.celular.includes(searchTerm) ||
      user.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-10">
      <div className="d-flex justify-content-between align-items-center ">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button className="btn btn-primary">
          <i className="bi bi-folder-plus me-2"></i>Crear
        </button>
      </div>
      <h4 className="mb-3">Usuarios</h4>
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default App;
