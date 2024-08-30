import React, { useState } from "react";
import { axiosRequest } from "../../utils/axiosRequest/axiosRequest";
import { saveToken } from "../../utils/token/token";
import { Field, Form, Formik } from "formik";
import {
  Button,
  TextField,
  Paper,
  Box,
  Typography,
  Avatar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";



function pop() {
  if(localStorage.getItem('access_token'))
    navigate('/')
}


async function login(values) {
  const { data } = await axiosRequest.post("Account/login", values);
  saveToken(data?.data);
  pop()
}

const Login = () => {

  
  let navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
      <Paper
        elevation={6}
        className="p-10 w-full max-w-md bg-white rounded-lg shadow-lg"
      >
        <Box className="flex justify-center mb-5">
          <Avatar className="bg-blue-500">
            <LockOutlined />
          </Avatar>
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          Log In
        </Typography>
        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          onSubmit={async (values) => login(values)}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form className="space-y-4">
              <TextField
                fullWidth
                variant="outlined"
                name="userName"
                label="Username"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="mt-4"
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Login;
