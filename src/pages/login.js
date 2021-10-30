import { React, useState } from "react";
import Header from "../components/header";
import bghome from "../assets/login1.jpg";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const login = {
      user: user,
      pass: pass,
    };

    if (login.user && login.pass) {
      axios.post("http://localhost:4000/app/login", login).then((res) => {
        console.log(res.data);
        if (res.data.username) {
          console.log(res.data);
          console.log("Logged in Thalaiva!");
          window.location = "/";
          alert("Welcome " + res.data.username + "!");
          setUser("");
          setPass("");
        } else {
          console.log(res.data);
          alert("Invalid Username/password!");
        }
      });
    } else {
      alert("Some fields are empty!");
    }
  };

  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  return (
    <div
      style={{
        maxHeight: "100vh",
        minHeight: "100vh",
        maxWidth: "100vw",
        minWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <Header active={1} />
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
            }}
          >
            <form>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{
                  minWidth: "40vw",
                  minHeight: "80.5vh",
                }}
              >
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
                      boxShadow: "0px 0px 5px black",
                      padding: 10,
                      border: "5px solid orange",

                      "&:hover": {
                        boxShadow: "0px 0px 5px white",
                        border: "5px solid white",
                        transition: "0.5s ease-in",
                      },
                    }}
                    spacing={1}
                  >
                    <Typography
                      style={styles.typography}
                      variant="h5"
                      sx={{ mb: 4 }}
                    >
                      Login
                    </Typography>
                    <TextField
                      variant="filled"
                      color="warning"
                      onChange={(e) => setUser(e.target.value)}
                      label="Username"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      variant="filled"
                      label="Password"
                      name="Password"
                      onChange={(e) => setPass(e.target.value)}
                      color="warning"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <Button
                      variant="contained"
                      // type="submit"
                      onClick={handleSubmit}
                      color="warning"
                      sx={{ mb: 2 }}
                    >
                      Login
                    </Button>
                    {/* {console.log("hello!")} */}
                    <Typography variant="body1">
                      <Link to="/signup" style={styles.typography1}>
                        Don't Have an account ?
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
