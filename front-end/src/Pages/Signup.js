
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useState } from "react"
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import { useTheme } from "@mui/material"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { SignupSchema } from '../Validations/Signup.validation';


export default function SignUp() {
  const theme = useTheme()
  const [errorMail, setErrorMail] = useState(false)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const initialValues = {
    name: "",
    email: "",
    password: ""
  }
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = async (values, props) => {
    setLoading(true)
    console.log(values)
    console.log(props)
    await Axios.post("https://nice-plum-panda-tam.cyclic.app/signup", {
      name: values.name,
      email: values.email,
      password: values.password,

    }).then((response) => {
      console.log(response)
      setOpen(true)
      setLoading(false)

      // console.log(response.data.token)
      // a.setToken(response.data.token)

    });

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Signed Up Successfully: Login Now
            </Alert>
          </Snackbar>
          <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit} >
            {({ errors, touched }) =>
              <Form >
                <Field
                  sx={{ mb: 2, mt: 2 }}
                  as={TextField}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                  error={touched.name && Boolean(errors.name)}
                  helperText={<ErrorMessage name="name" />}
                />
                <Field
                  sx={{ mb: 2 }}
                  as={TextField}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  sx={{ mb: 2 }}
                  as={TextField}
                  required
                  fullWidth={true}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={<ErrorMessage name="password" />}
                />

                <Button
                  component={Link}
                  variant="text"
                  to="/"
                  sx={{ mb: 2 }}
                >Login</Button>

                <Button
                  type="submit"
                  disabled={loading}
                  fullWidth={true}
                  variant="contained"
                  sx={{ mt: 0, mb: 2, minwidth: "100%" }}
                >
                  Sign Up
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      // color: green[500],
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
              </Form>

            }

          </Formik>
        </Box>

      </Container>
    </ThemeProvider >
  );
}