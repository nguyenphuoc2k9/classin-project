import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./style.css"
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {AxiosInstance} from "../api/axios.js"
import { login } from '../State/auth.js';
import { set } from '../State/movie.js';
import axios from 'axios';
const defaultTheme = createTheme();
export default function Login() {
  const dispatch = useDispatch()
  const login_state = useSelector((state)=>state.auth.login_state)
  const [input,setinput] = React.useState({})
  const handleSubmit =  async (event) => {
    event.preventDefault();
    const {username,password} = input
    const login_api = await AxiosInstance.post("/users/login",{
      username,
      password
    })
    localStorage.setItem("access_token",JSON.stringify(login_api.data.token))
    localStorage.setItem("user_info",JSON.stringify(login_api.data.data))
    dispatch(login(login_api.data))
  };
  const location = useLocation()
  if(location.pathname == "/login"){
    document.getElementById("root").style.backgroundImage = "unset"
  }
  return (
    
    <ThemeProvider theme={defaultTheme}>
      {login_state == true ? <Navigate to="/" />:""}
      <Container className="login"component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#e39e34' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e)=> setinput({...input,username:e.target.value})}
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              onChange={(e)=>setinput({...input,password:e.target.value})}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/registry" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}