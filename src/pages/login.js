import React from "react";
import Header from "../components/header";
import bghome from "../assets/login1.jpg";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  typography: {
    color: "#ffffff",
    "&:hover": {
      color: "orange",
    },
  },
  typography1: {
    color: "white",
    "&:hover": {
      color: "primary",
    },
  },
};

function Login() {
  return (
    <div
      style={{
        // minHeight: "92.8vh",
        maxHeight: "100vh",
        minHeight: "100vh",
        maxWidth: "100vw",
        minWidth: "100vw",
        overflow: "hidden",
      }}
      // className="bg-primary"
      // style={{ backgroundColor: "#f0a73b" }}
    >
      <Header />
      <div className="d-flex text-center">
        <div
          className="bg-primary"
          style={{
            minHeight: "92.8vh",
            maxHeight: "92.8vh",
          }}
        >
          <img
            src={bghome}
            style={{
              maxHeight: "90vh",
              minHeight: "90vh",
              maxWidth: "44vw",
              padding: 0,
              // borderTopRightRadius: "35%",
              borderBottomRightRadius: "35%",
            }}
          />
        </div>
        <div
          style={{
            maxHeight: "92.8vh",
            minHeight: "92.8vh",
          }}
        >
          <div
            className="color-primary bg-primary p-5"
            style={{
              maxHeight: "92.8vh",
              minHeight: "92.8vh",
              minWidth: "57.32vw",
              minHeight: "92vh",
              borderTopLeftRadius: "35%",

              // borderTopRightRadius: "35%",
              // borderBottomRightRadius: "35%",
            }}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{
                minWidth: "40vw",
                minHeight: "80.5vh",

                // borderTopRightRadius: "35%",
                // borderBottomRightRadius: "35%",
              }}
              // spacing={1}
            >
              <Grid items>{/* <h3 >Login</h3> */}</Grid>
              <Grid items>
                <Box
                  className=""
                  sx={{
                    width: 500,
                    height: 450,
                    backgroundColor: "primary",
                    borderTopLeftRadius: "25%",
                    borderBottomRightRadius: "25%",
                    color: "warning",
                    // borderBottomLeftRadius: "15%",
                    // borderTopRightRadius: "15%",
                    boxShadow: "0px 0px 5px black",
                    padding: 10,
                    border: "5px solid orange",

                    "&:hover": {
                      // backgroundColor: "primary.dark",
                    boxShadow: "0px 0px 5px black",
                    border: "5px solid white",
                    // boxShadow: "0px 0px 5px white",

                      // border: "5px solid primary",
                      // opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
                      transition: "0.5s ease-in-out",
                    },
                  }}
                  spacing={1}
                >
                  <Typography
                    // sx={{
                    //   color: "orange",
                    //   "&:hover": {
                    //     color: "white",
                    //   },
                    // }}
                    style={styles.typography}
                    variant="h5"
                    sx={{ mb: 4 }}
                  >
                    Login
                  </Typography>
                  <TextField
                    variant="filled"
                    color="warning"
                    label="Username or Email-Id"
                    label="Username"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    variant="filled"
                    label="Password"
                    name="Password"
                    color="warning"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" color="warning" sx={{ mb: 2 }}>
                    Login
                  </Button>
                  <Typography variant="body1">
                    <Link to="/signup" style={styles.typography1}>
                      Don't Have an account ?
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
