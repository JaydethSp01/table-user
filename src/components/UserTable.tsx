import React from "react";
import "../App.css";

interface User {
  nombre: string;
  correo: string;
  celular: string;
  cargo: string;
  tipo: string;
  contratoInicio: string;
  contratoFin: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>CORREO</th>
          <th>CELULAR</th>
          <th>CARGO</th>
          <th>CONTRATO</th>
          <th>DETALLE</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr className="" key={index}>
            <td className="align-middle">{user.nombre}</td>
            <td className="align-middle">{user.correo}</td>
            <td className="align-middle"> {user.celular}</td>
            <td className="align-middle">
              <span className="badge bg text-white">{user.cargo}</span>
            </td>
            <td className="align-middle">
              <div className="d-inline-block align-items-center ">
                <div className="mt-5">
                  <p>tipo: {user.tipo}</p>
                </div>
                <div className="">
                  <p>Fecha de inicio: </p>
                  <span className="badge bg-light text-danger inicio">
                    <i className="bi bi-calendar-week"></i>{" "}
                    {user.contratoInicio}
                  </span>
                </div>
                <div>
                  <p>Fecha fin: </p>
                  <span className="badge bg-light text-success fin">
                    <i className="bi bi-calendar-week"></i> {user.contratoFin}
                  </span>
                </div>
              </div>
            </td>
            <td className="align-middle">
              <button className="btn btn-outline-primary ojo">
                <i className="fas fa-eye"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
