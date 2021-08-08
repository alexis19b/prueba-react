import React, { useState } from "react";
import "./topbar.css";
import logo from "../assets/logo.png";
import { Button, MenuItem, Menu } from "@material-ui/core";
import {
  AccountCircleOutlined,
  ExitToAppOutlined,
  ExpandMoreOutlined,
  SettingsOutlined,
} from "@material-ui/icons";

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(false);
  };
  const handleClick = () => {
    setAnchorEl(true);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div clasName="topLeft">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="topRight">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMf-nll76CeNX0SrFZMSnNNOgOFAiTWZBJ2Q&usqp=CAU"
            alt="logo"
            className="topAvatar"
          />
          <div className="topuser">
            <Button
              style={{ textTransform: "none" }}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Jesus Briceño
              <ExpandMoreOutlined />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                style: {
                  transform: "translateX(-50px) translateY(50px)",
                },
              }}
              keepMounted={false}
              open={open}
              onClose={handleClose}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleClose}>
                <SettingsOutlined /> Mi Cuenta
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <AccountCircleOutlined />
                Perfil
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ExitToAppOutlined />
                Cerrar Sesion
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
