import { Alert, Box, Snackbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "../api/api";

export const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [notification, setNotification] = React.useState(false);
  const [notificationData, setNotificationData] = React.useState("");

  const onSubmit = async (data) => {
    try {
      if (Object.keys(errors).length === 0) {
        console.log("Form data submitted:", data);

        const response = await axios.post(
          "http://localhost:5001/usersLeads/addNewUserLeads",
          data
        );

        console.log("Data sent successfully:", response.data);
        setNotification(true);
        setNotificationData("Request sent Successfully");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setNotification(true);
      setNotificationData("Something Went Wrong");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotification(false);
  };

  return (
    <Box
      alignItems="center"
      sx={{
        borderRadius: "6px",
        backgroundColor: "#f1f1f1",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        style={{
          margin: 0,
          fontFamily: "Monospace",
          fontSize: "2rem",
          lineHeight: 1.334,
          color: "#114084",
          padding: "2em",
          textAlign:"center"
        }}
      >
        Connect with us...
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ margin: "0rem 5rem 0rem" }}>
          <div style={{ margin: "1rem 0" }}>
            <TextField
              fullWidth
              InputProps={{ style: { color: "#1C1C1C", fontSize: "1rem" } }}
              InputLabelProps={{
                style: { color: "#1C1C1C", fontSize: "1rem" },
              }}
              id="name"
              label="Name"
              variant="standard"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Name should contain only alphabetic characters",
                },
                minLength: {
                  value: 3,
                  message: "Name should have at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <span
                style={{
                  color: "#c20303",
                  fontSize: "0.8rem",
                  textAlign: "left",
                }}
              >
                {errors.name.message}
              </span>
            )}
          </div>
          <div style={{ margin: "1rem 0" }}>
            <TextField
              fullWidth
              InputProps={{ style: { color: "#1C1C1C", fontSize: "1rem" } }}
              InputLabelProps={{
                style: { color: "#1C1C1C", fontSize: "1rem" },
              }}
              id="mobile"
              label="Phone Number"
              variant="standard"
              {...register("mobile", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.mobile && (
              <span
                style={{
                  color: "#c20303",
                  fontSize: "0.8rem",
                  textAlign: "left",
                }}
              >
                {errors.mobile.message}
              </span>
            )}
          </div>
          <div style={{ margin: "1rem 0" }}>
            <TextField
              fullWidth
              InputProps={{ style: { color: "#1C1C1C", fontSize: "1rem" } }}
              InputLabelProps={{
                style: { color: "#1C1C1C", fontSize: "1rem" },
              }}
              id="email"
              label="Email Id"
              variant="standard"
              {...register("email", {
                required: "Email Id is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span
                style={{
                  color: "#c20303",
                  fontSize: "0.8rem",
                  textAlign: "left",
                }}
              >
                {errors.email.message}
              </span>
            )}
          </div>
          <div style={{ margin: "1rem 0" }}>
            <TextField
              InputProps={{ style: { color: "#1C1C1C", fontSize: "1rem" } }}
              fullWidth
              InputLabelProps={{
                style: { color: "#1C1C1C", fontSize: "1rem" },
              }}
              id="message"
              multiline
              rows={4}
              label="Message"
              variant="standard"
              {...register("message")}
            />
          </div>
        </div>
        <div style={{ margin: "1rem 0", textAlign: "center" }}>
          <Button type="submit" variant="contained">
            Request Call Back
          </Button>
        </div>
      </form>
      {notification && (
        <Snackbar
          open={notification}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {notificationData}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};
