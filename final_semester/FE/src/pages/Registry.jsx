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
import { AxiosInstance } from '../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../State/auth';
import { Navigate } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const [input,setinput] = React.useState({})
  const dispatch = useDispatch()
  const login_state = useSelector((state)=>state.auth.login_state)
  const handleSubmit = async(event) => {
    event.preventDefault();
    const {username,email,password} = input
    const registry = await AxiosInstance.post("/users/registry",{
      username,
      password,
      email
    })
    localStorage.setItem("access_token",JSON.stringify(registry.data.token))
    localStorage.setItem("user_info",JSON.stringify(registry.data.Data))
    dispatch(login(registry.data))
  };
  if(location.pathname == "/login" ||location.pathname=="/registry"){
    document.getElementById("root").style.backgroundImage = "unset"
  }else{
    document.getElementById("root").style.backgroundImage = "linear-gradient(to right top, #e39e34, #e79534, #ea8c36, #ec8338, #ee7a3c)"
  }
  return (
    <ThemeProvider theme={defaultTheme}>
            {login_state == true ? <Navigate to="/" />:""}
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
          <Avatar sx={{ m: 1, bgcolor: '#e39e34' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  onChange={(e)=>setinput({...input,username:e.target.value})}
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=>setinput({...input,email:e.target.value})}

                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=>setinput({...input,password:e.target.value})}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}