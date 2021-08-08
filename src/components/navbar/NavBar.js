import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const { pathname } = useLocation();
  const newPath = pathname.substr(1);
  return (
    <div className="navbar">
      <div className={classes.root}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" to="/" exact className="link">
            Incio
          </Link>
          <Typography color="textPrimary">{newPath}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}
