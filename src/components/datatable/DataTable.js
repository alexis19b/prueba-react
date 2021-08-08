import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Imagenes from "../assets/Imagenes";

const columns = [
  {
    field: "dni",
    headerName: "DNI/CE",
    width: 130,
  },
  {
    field: "nombre",
    headerName: "Nombres",
    width: 140,
    editable: true,
  },
  {
    field: "apellido",
    headerName: "Apellidos",
    width: 140,
    editable: true,
  },
  {
    field: "telefono",
    headerName: "Telefono",
    width: 140,
    editable: true,
  },
  {
    field: "correo",
    headerName: "Coreeo",
    width: 160,
    editable: true,
  },
  {
    field: "citas",
    headerName: "Citas",
    width: 110,
    renderCell: () => {
      return (
        <div>
          <img
            style={{ cursor: "pointer", paddingLeft: 19 }}
            src={Imagenes.compu}
            alt="logo"
          />
        </div>
      );
    },
  },
  {
    field: "fecha",
    headerName: "Fecha registro",
    width: 127,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    dni: "0879910",
    nombre: "Beatriz Elena",
    apellido: "Martinez Xo",
    telefono: 4145098152,
    correo: "jonperez@gmail.com",
    fecha: "15 Jun 2021",
  },
  {
    id: 2,
    dni: "2131075",
    nombre: "Jose David",
    apellido: "Gonzales",
    telefono: 7891475,
    correo: "josedavid@gmail.com",
    fecha: "15 Jun 2021",
  },
  {
    id: 3,
    dni: "0879958",
    nombre: "Maria",
    apellido: "Ciniva Garcia",
    telefono: 4145098152,
    correo: "mariaperez@gmail.com",
    fecha: "07 May 2020",
  },
  {
    id: 4,
    dni: "0879987",
    nombre: "Carlos",
    apellido: "Quitana Perez",
    telefono: 4145098152,
    correo: "jonperez@gmail.com",
    fecha: "15 Jun 2021",
  },
  {
    id: 5,
    dni: "5808799",
    nombre: "Martin Jose",
    apellido: "Delgado",
    telefono: 4145098152,
    correo: "jonperez@gmail.com",
    fecha: "07 May 2020",
  },
  {
    id: 6,
    dni: "3308799",
    nombre: "Geandick",
    apellido: "Garcia Guerrero",
    telefono: 21358794,
    correo: "jonperez@gmail.com",
    fecha: "15 Jun 2021",
  },
  {
    id: 7,
    dni: "8708799",
    nombre: "Jesus Alexis",
    apellido: "Briceño",
    telefono: 33171258,
    correo: "jonperez@gmail.com",
    fecha: "07 May 2020",
  },
  {
    id: 8,
    dni: "2108799",
    nombre: "Cesar Andres",
    apellido: "Lopez",
    telefono: 4145098152,
    correo: "jonperez@gmail.com",
    fecha: "07 May 2020",
  },
  {
    id: 9,
    dni: "9908799",
    nombre: "Anderson",
    apellido: "Serpa",
    telefono: 4145098152,
    correo: "jonperez@gmail.com",
    fecha: "07 May 2020",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
