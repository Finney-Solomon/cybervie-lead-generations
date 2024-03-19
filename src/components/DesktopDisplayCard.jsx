import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const DesktopDisplayCard = () => {
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 640);

  return (
    <div
      style={{
        background: "url(/images/backgroundImages.jpg)",

        height: !isMobileView?"91vh":'75vh',
        
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundColor: "rgba(0, 0, 0, 0.795)",
      }}
    >
      <Paper
        sx={{
          backgroundColor: "#1c1c1cab",
          justifyContent: "center",

          color: "#f1f1f1",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            paddingInline: "2.5em",
            lineHeight: "auto",
            paddingTop: "3em",
            margin: "auto",
            padding: "auto",
          }}
        >
          <Typography
            align="left"
            sx={{
              marginTop: "1em",
              textTransform: "uppercase",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#ff6b6b",
              fontFamily: "BlinkMacSystemFont",
              WebkitTextStroke: "#f1f1f1eb",
              fontSize: "auto",
              letterSpacing: "0.1em",
              animation: "flicker 2s ease-in-out infinite alternate",
              lineHeight: "2",
            }}
            variant="h4"
          >
            Welcome to
          </Typography>
          <Typography
            align="left"
            sx={{
              textTransform: "uppercase",
              color: "4e5c66",
              fontFamily: "Helvetica Neue",
              WebkitTextStroke: "#f1f1f1",
              textDecoration: "underline",
              letterSpacing: "0.3em",
              fontSize: "auto",
              animation: "flicker 2s ease-in-out infinite alternate",
              lineHeight: "1",
              "&:hover": {
                color: "#82B7DC",
                textShadow: "5px 5px 100px white",
              },
            }}
            variant="h3"
            data-aos="fade-up-right"
          >
            Cybervie
          </Typography>
          <br />
          <Typography
            align="left"
            sx={{
              color: "#f1f1f1",
              fontFamily: "monospace",
            }}
            variant="h5"
          >
            Comprehensive Cybervie-Certified SOC Analyst Training featuring
            cloud-based labs replicating real-world scenarios, with placement
            assistance
          </Typography>
          <br />

          <Typography
            align="left"
            sx={{
              color: "#f1f1f1",
              fontFamily: "monospace",
            }}
            variant="h5"
            
          >
            Join us now and embark on a journey towards a rewarding career in
            cybersecurity!
          </Typography>
        </div>
        <br />
      </Paper>
    </div>
  );
};
