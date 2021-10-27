import React from "react";
import Header from "../components/header";
import bghome from "../assets/home.png";
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
    // textDecoration: "none",
    "&:hover": {
      color: "primary",
    },
  },
  h1: {
    fontWeight: "bold",
    color: "#e60000",
    // textShadow:"0px 0px 2px black"
  },
};

function Home() {
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
          className="bg-warning"
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
            className="color-primary bg-warning p-5"
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
              <Grid items>
                <div className="d-flex justify-content-center align-items-center">
                  <h1 style={styles.h1}>ICONIC DREAM FOCUS </h1>{" "}
                  <Typography variant="h5" style={styles.h1} sx={{ pl: 1 }}>
                    PVT LTD
                  </Typography>
                </div>
                <p style={styles.h1}>
                  krishna villa, Old no: 1005 New no: 98, 21st Main Rd, Anna
                  Nagar, Chennai, Tamil Nadu 600040.
                </p>
              </Grid>
              <Grid items>
                <h2 style={styles.h1} className="py-3">
                  {" "}
                  About{" "}
                </h2>
                <Box
                  className=""
                  sx={{
                    width: 700,
                    height: 300,
                    backgroundColor: "primary",
                    borderTopLeftRadius: "25%",
                    borderBottomRightRadius: "25%",
                    color: "#e60000",
                    fontWeight: "bold",
                    // borderBottomLeftRadius: "15%",
                    // borderTopRightRadius: "15%",
                      border: "5px solid red",
                      padding: 10,
                    boxShadow: "0px 0px 5px black",

                    "&:hover": {
                      // // backgroundColor: "primary.dark",
                    border: "5px solid white",
                    // boxShadow: "0px 0px 5px black",

                      // // border: "5px solid primary",
                      // // opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
                      transition: "0.5s ease-in-out",
                    },
                  }}
                  spacing={1}
                >
                  {/* <Typography
                    // sx={{
                    //   color: "orange",
                    //   "&:hover": {
                    //     color: "white",
                    //   },
                    // }}
                    style={styles.typography}
                    variant="body2"
                    // sx={{ mb: 1 }}
                  > */}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                  {/* </Typography> */}
                  {/* <TextField
                    variant="filled"
                    color="warning"
                    label="Username or Email-Id"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    variant="filled"
                    label="Password"
                    color="warning"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" color="warning" sx={{ mb: 2 }}>
                    Login
                  </Button>
                  <Typography variant="body1"><Link to="/signup" style={styles.typography1}>Don't Have an account ?</Link></Typography>
                   */}
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
