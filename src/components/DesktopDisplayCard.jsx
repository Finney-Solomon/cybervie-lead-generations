import { Paper, Typography } from "@mui/material";
import React from "react";


export const DesktopDisplayCard = () => {
  return (
    <div
      style={{
        background: "url(/images/backgroundImages.jpg)",
        // width: "100.5vw",
        padding: "2rem",
        height: "83.5vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundColor: "rgba(0, 0, 0, 0.795)",
      }}
    >
      <Paper
        // elevation={0}
        sx={{
          backgroundColor: "#1c1c1c75",
          margin: "3em",
          padding: "2em",

          paddingInline: "2em",
          color: "#f1f1f1",
          width: "85%",

          textAlign: "center",
        }}
      >
        <Typography
          align="left"
          sx={{
            color: "#f0e9e9",
            transition: "color 0.5s ease",
            fontFamily: "Courier New, monospace",
            fontWeight: "2rem",
          }}
          variant="h2"
        >
          Welcome to Cybervie
        </Typography>
        <br />
        <Typography
          align="left"
          sx={{
            color: "#f1f1f1",
            transition: "color 0.5s ease",
            fontFamily: "Courier New, monospace",
          }}
          variant="h5"
        >
          Comprehensive Cybervie-Certified SOC Analyst Training featuring
          cloud-based labs replicating real-world scenarios, with placement
          assistance
        </Typography>
        <br />
        <br />
        <Typography
          align="left"
          sx={{
            color: "#f1f1f1",
            transition: "color 0.5s ease",
            fontFamily: "Courier New, monospace",
          }}
          variant="h6"
        >
          Join us now and embark on a journey towards a rewarding career in
          cybersecurity!
        </Typography>

        <br />
        {/* <Typography
          align="left"
          sx={{ color: "#f1f1f1", transition: 'color 0.5s ease', fontFamily: 'Courier New, monospace' }}
          variant="h6"
        >
          Personal Career Guidance to Help you Crack the Interviews.
        </Typography>
        <br />
        <Typography
          align="left"
          sx={{ color: "#f1f1f1", transition: 'color 0.5s ease', fontFamily: 'Courier New, monospace' }}
          variant="h6"
        >
          All Students get Access to the Huge Repository of Real-time Projects
          and Sample Scenarios created by Industry Experts.
        </Typography>
        <br />
        <Typography
          align="left"
          sx={{ color: "#f1f1f1", transition: 'color 0.5s ease', fontFamily: 'Courier New, monospace' }}
          variant="h6"
        >
          Connect with a diverse community of cybersecurity enthusiasts and
          professionals globally, fostering collaboration, networking, and
          knowledge exchange
        </Typography> */}
      </Paper>
    </div>
  );
};
