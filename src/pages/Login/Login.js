import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import { width } from '@mui/system';
import Services from '../Services/Services';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignInSide(props) {
    const [result,setResult] = useState(null);
    const [un,setUn] =useState(null);
    const handleSubmit = (event) => {
    event.preventDefault(); 
    const data = new FormData(event.currentTarget); 
    setUn(data.get('email'));
    console.log("login data"+"--"+data)
    const un = data.get('email'); 
    const pw = data.get('password');
    
    console.log(un+" --- "+pw); 
    axios.get('http://localhost:1730/check',{params: { 
      un: un, 
      pw: pw 
    }}).then((response) => { 
      console.log(response.data);
      setResult(response.data); 
    }) 
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  if(result === null || result === "fail"){ 
  return (
    <diV class="App-Login">
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh'}} >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://thumbs.dreamstime.com/z/creative-glowing-blue-forex-chart-wallpaper-grid-invest-finance-concept-stock-market-chart-business-graph-background-159151545.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square  backgroundColor={"sky"}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
			  <Link href="sign-up" variant="body2">
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
			  </Link>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </diV>
  );
}
else{
    return(
       <div>
		 {props.handleLogin}
    {/* <a href="/services">
			<Button>Enter</Button>
		</a> */}<Services/>
	   </div>
    )
}
}