import React from "react";
import { useState } from "react";
import "./pacientes.css";
import Imagenes from "../../components/assets/Imagenes";
import DataTable from "../../components/datatable/DataTable";

const Pacientes = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = ({ target }) => {
    setSearchText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchText("");
  };

  return (
    <div className="wrapperPaciente">
      <h1 className="titulo">Pacientes</h1>
      <span className="subtitulo">
        A continuación podrás ver la lista de pacientes agendados.
      </span>
      <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <img src={Imagenes.buscar} alt="buscar" />
          <input
            type="text"
            name="searchText"
            placeholder="Buscar por DNI, Nombre, Apellido"
            autoComplete="off"
            onChange={handleInputChange}
            value={searchText}
          />
          <input type="submit" name="submit" value="Buscar" />
        </form>
      </div>
      <div className="datatable">
        <DataTable />
      </div>
      <div className="footer">
        <img className="logofooter" src={Imagenes.footer} alt="footer" />
        <span className="copy">Copyright © 2021 Clinica San Felipe</span>
      </div>
    </div>
  );
};

export default Pacientes;
