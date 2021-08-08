import { ErrorOutlineOutlined } from "@material-ui/icons";
import React from "react";
import "./infoscreen.css";

const InfoScreen = () => {
  return (
    <>
      <div className="wrapper">
        <span className="texto">
          <ErrorOutlineOutlined /> &nbsp; Toda es informativo para editar,
          agregar mas información realizar por el SIC
        </span>
      </div>
    </>
  );
};

export default InfoScreen;
