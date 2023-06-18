/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
//import { Loader } from "@react-three/drei";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
//import FormControl from "@mui/material/FormControl";
//import OutlinedInput from "@mui/material/OutlinedInput";
//import InputLabel from "@mui/material/InputLabel";
import { useFormik } from "formik";
import { signUpSchema } from "../utility/Schema/Index";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
//import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { CheckData } from "../@EndPoint/PostCall";

const theme = createTheme();

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function SignUp({ Setleftside, LeftSide, currentModel }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initiallValues = {
    name: "",
    password: "",
    username: "",
    email: "",
    country: "",
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initiallValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        setLoading(true);

        CheckData(values)
          .then((res) => {
            console.log("data is send");
            console.log("onsubmit value " + values.country + currentModel);
            action.resetForm();
            console.log(res.data.Code)
            Setleftside(false);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });

        //values;
      },
    });

  const ChangeLeftSide = () => {
    if (LeftSide === true) {
      Setleftside(false);
    } else {
      Setleftside(true);
    }
  };
  //const [country, setCountry] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          margin: "2% 14% 0 14%",
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
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginTop: "6%",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <TextField
                  style={{
                    width: "45%",
                    marginRight: "5%", // 10% of the space between the text fields
                  }}
                  id="outlined-basic"
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name && errors.name}
                />
                <TextField
                  style={{
                    width: "45%",
                  }}
                  id="outlined-basic"
                  label="UserName"
                  name="username"
                  variant="outlined"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.username && touched.username}
                  helperText={
                    errors.username && touched.username && errors.username
                  }
                />
              </div>
              <div
                style={{
                  marginTop: "3%",
                  width: "100%",
                }}
              >
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  value={values.email}
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email}
                />
              </div>
              <div
                style={{
                  marginTop: "3%",
                  width: "100%",
                }}
              >
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Password"
                  name="password"
                  value={values.password}
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
              </div>
              <div
                style={{
                  marginTop: "3%",
                  width: "100%",
                }}
              >
                <TextField
                  id="outlined-select-currency"
                  select
                  style={{ width: "100%" }}
                  label="Select"
                  name="country"
                  defaultValue="EUR"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.country && touched.country}
                  helperText={
                    (errors.country && touched.country) ||
                    "Please select your Country"
                  }
                >
                  {countries.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                {/*<TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Country"
                variant="outlined"
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.country && touched.country}
                helperText={errors.country && touched.country && errors.country}
              />*/}
              </div>
              <div
                style={{
                  marginTop: "3%",
                  width: "100%",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "rgb(231, 70, 70)",
                    width: "100%",
                    marginBottom: "5%",
                  }}
                  onClick={ChangeLeftSide}
                  variant="contained"
                >
                  Select Avatar
                </Button>
              </div>
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
                  disabled={
                    errors.country ||
                    !touched.country ||
                    errors.email ||
                    !touched.email ||
                    errors.name ||
                    !touched.name ||
                    errors.password ||
                    !touched.password ||
                    errors.username ||
                    !touched.username
                  }
                  type="submit"
                >
                  SIGN UP
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
                  Already have an account ?
                  <span
                    style={{
                      color: "rgb(231, 70, 70)",
                      cursor: "pointer",
                      marginLeft: "2px",
                    }}
                    onClick={() => {
                      navigate("/Page2");
                    }}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CircularProgress style={{ color: "rgb(231, 70, 70)" }} />
          </Box>
        </div>
      )}
    </ThemeProvider>
  );
}

SignUp.propTypes = {
  Setleftside: PropTypes.func.isRequired,
  LeftSide: PropTypes.node.isRequired,
  currentModel: PropTypes.node.isRequired,
};
