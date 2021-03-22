import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Copyright from "./Copyright";
import { AuthContext } from "../../context/AuthContext";

import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  mainTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: "10px",
  },
  homeIcon: {
    fontSize: "50px",
    marginRight: "5px",
  },
}));

const RootContainer = (props) => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className={classes.root}>
        <Header />

        {props.children}
      </div>

      <Copyright />
    </>
  );
};

export default RootContainer;
