import React from 'react';
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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ragdoll from '../images/ragdoll.jpg'
import { API_signin } from '../axios'
import MyCopyright from '../components/MyCopyright'
import {useRelief} from "./hooks/useRelief";
import {useEffect} from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#c47a45'
        }
    }
});

export default function SignIn() {

    const {name, setName, passwd, setPasswd, setSignedIn, status, setStatus, displayStatus} = useRelief();

    useEffect(() => {
        displayStatus(status)
    }, [status])
    const handleLogin =async ()=>{
        console.log("name", name, "passwd", passwd)
        const ret = await API_signin(name, passwd)
        console.log(ret)
        if(ret.type === 1)
        {
            console.log(ret.content)

            if (ret.content[0].role === "user" )
            {
                setStatus({type: "success", msg: "Login!"})

                setSignedIn(1)
            }
            else if (ret.content[0].role === "admin" )
            {
                setStatus({type: "success", msg: "Login!"})

                setSignedIn(2)
            }

        }
        else
        {
            setStatus({type: "error", msg: "Wrong name or password!"})

        }
    }
    /*const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: name,
            password: data.get('password'),
        });
        if (!name || !password)
        {

        }

        const name = data.get('email');
        const password = data.get('password')
        const temp = await LogIn(name, password)

        console.log(temp)
    };*/

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${ragdoll})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h2" color="#b3662e"
                                    sx={{ fontWeight: 'bold' ,mt:2,  mb: 6}}>
                            NTU Relief
                        </Typography>
                        <Avatar sx={{m: 1, bgcolor: '#c47a45'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {/*<Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>*/}
                        <Box component="form" noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
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
                                onChange={(e) => setPasswd(e.target.value)}

                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                onClick={handleLogin}
                                disabled={!name || !passwd}
                            >
                                Login
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/relief/#/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <MyCopyright/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}