import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "../api/api";
import { useDispatch } from "react-redux";
import { openSnackBarNotification } from "../redux/actions";
import { Backdrop, CircularProgress } from "@mui/material";

export const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    setOpen(true);
    try {
      if (Object.keys(errors).length === 0) {
        console.log("Form data submitted:", data);
        // https://cybervie-backend.onrender.com/usersLeads/addNewUserLeads
        //   "http://localhost:5001/usersLeads/addNewUserLeads"
        const response = await axios.post(
          "https://cybervie-backend.onrender.com/usersLeads/addNewUserLeads",
          data
        );
        if (response?.data?.success) {
          const notification = {
            isOpen: true,
            notificationMessage: "Thank you we will get Back to You Soon!",
            notificationType: "success",
          };
          dispatch(openSnackBarNotification(notification));
          reset();
        }
      } else {
        const notification = {
          isOpen: true,
          notificationMessage:
            "Something went Wrong Please Contact dev.cybervie@gmail.com!",
          notificationType: "error",
        };
        dispatch(openSnackBarNotification(notification));
      }
    } catch (error) {
      console.error("Error sending data:", error);
      const notification = {
        isOpen: true,
        notificationMessage:
          "Something went Wrong Please Contact dev.cybervie@gmail.com!",
        notificationType: "error",
      };
      dispatch(openSnackBarNotification(notification));
    } finally {
      setOpen(false);
    }
  };

  return (
    <Box
      alignItems="center"
      sx={{
        borderRadius: "6px",
        backgroundColor: "#f1f1f1",
        minHeight: "100%",
        width: "100%",
        margin: "auto",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        style={{
          margin: 0,
          fontFamily: "Monospace",
          fontSize: "2.2rem",
          lineHeight: 1.334,
          color: "#114084",
          paddingTop: "1em",
          textAlign: "center",
          fontWeight: "900",
        }}
      >
        CONNECT WITH US
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
                  value: /^[A-Za-z\s]+$/,
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
              {...register("message", {
                maxLength: {
                  value: 100,
                  message: "Exceeding Limit minimum 100 charters ",
                },
              })}
            />
            {errors.message && (
              <span
                style={{
                  color: "#c20303",
                  fontSize: "0.8rem",
                  textAlign: "left",
                }}
              >
                {errors.message.message}
              </span>
            )}
          </div>
        </div>
        <div style={{ margin: "1rem 0", textAlign: "center", padding: "1em" }}>
          <Button type="submit" variant="contained">
            Request Call Back
          </Button>
          {open ? (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            <></>
          )}
        </div>
      </form>
    </Box>
  );
};
