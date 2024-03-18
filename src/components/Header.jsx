import AppBar from "@mui/material/AppBar";
import  Container  from "@mui/material/Container";
import  Toolbar  from "@mui/material/Container";
import React from "react";

export const Header = () => {
  return (
    <>
      <AppBar
        position="sticky"
        style={{ background: "#fffeff", width: "100vw", maxHeight: "10vh" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              alt="Logo"
              style={{ maxWidth: "150px", maxHeight: "60px" }}
              src={"/images/logo.gif"}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
