import {
    AppBar,
    Container,
    Toolbar,
  } from "@mui/material";
  import React from "react";
 
  export const Header = () => {
    return (
      <>
        <AppBar position="sticky" style={{background:"#fffeff",width:"100.4vw"}}>
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
  