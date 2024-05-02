/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import Page3 from "../Pages/Page3";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

 

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          margin: "14% 14% 0 14%",
          Height: "100%",
          Width: "100%",
        }}
      >
        <div
          style={{
            margin: "0px",
          }}
        >
          <h1
            style={{
              margin: "0px",
              color: "rgb(231, 70, 70)",
            }}
          >
            Welcome to{" "}
            <span style={{ fontFamily: "Felix" }}> AvatarVerse! </span>
          </h1>
          <h4
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0",
            }}
          >
            Login to continue
          </h4>
        </div>
        <div
          style={{
            marginTop: "10%",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
            }}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: "0 0 5% 0",
                  width: "100%",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <FormControl sx={{}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
          </div>
          <div
            style={{
              marginTop: "8%",
            }}
          >
            <div>
              <Button
                style={{
                  backgroundColor: "rgb(231, 70, 70)",
                  width: "100%",
                }}
                variant="contained"
                onClick={()=>{
                  navigate("/dashBoard")
                }}
              >
                Login
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0",
                fontweight: "normal",
              }}
            >
              <p>
                Don't have an Account ?  
                <span
                  style={{
                    color: "rgb(231, 70, 70)",
                    cursor: "pointer",
                    marginLeft:"2px" 
                  }}
                  onClick={()=>{
                    navigate("/Signup");
                  }}
                >
                   Create now
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
