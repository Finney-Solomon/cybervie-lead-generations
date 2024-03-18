import  Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Container";
import React from "react";

export const Header = () => {
  return (
    <>
      <AppBar
        position="sticky"
        style={{ background: "#fffeff", width: "100vw", maxHeight: "10vh" }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
            }}
          >
            <img
              alt="Logo"
              style={{ maxWidth: "150px", maxHeight: "60px" }}
              src={"/images/logo.gif"}
            />
            <Button
              variant="text"
              onClick={()=>window.open("https://www.cybervie.com/", "_blank")}
              sx={{
                margin: "15px 0vh 10px 16vh",
                color: "success",
                height: "25px",
                padding:"auto",
                fontWeight:"700",
                justifyContent:"flex-end",
                alignContent:"flex-end"
              }}
            >
              Home
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
