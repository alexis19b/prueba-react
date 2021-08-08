import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";
import Imagenes from "../assets/Imagenes";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu ">
          <ul className="sidebarList active">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <img src={Imagenes.Home} alt="inicio" className="sidebarIcon" />
                Inicio
              </li>
            </Link>
          </ul>
          <NavLink to="/Pacientes" exact className="link">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <img
                  src={Imagenes.pacientes}
                  alt="pacientes"
                  className="sidebarIcon"
                />
                Pacientes
              </li>
            </ul>
          </NavLink>
          <ul className="sidebarList">
            <Link to="/Medicos" className="link">
              <li className="sidebarListItem">
                <img
                  src={Imagenes.medicos}
                  alt="medicos"
                  className="sidebarIcon"
                />
                Médicos
              </li>
            </Link>
          </ul>
          <ul className="sidebarList">
            <Link to="Consultorios" className="link">
              <li className="sidebarListItem">
                <img
                  src={Imagenes.consultorio}
                  alt="consultorio"
                  className="sidebarIcon"
                />
                Consultorios
              </li>
            </Link>
          </ul>
          <ul className="sidebarList">
            <Link to="Agenda" className="link">
              <li className="sidebarListItem">
                <img
                  src={Imagenes.agenda}
                  alt="agenda"
                  className="sidebarIcon"
                />
                Agenda
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
