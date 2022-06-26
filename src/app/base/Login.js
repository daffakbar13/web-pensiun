import React from "react"
import {
    Card,
    CardContent,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
}
    from "@material-ui/core";
import {
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { Button, styled, TextField } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { LogoDPensionColor as Logo } from "../../assets/Assets";
import { Helmet } from "react-helmet"

export default function Login() {
    // 
    // INPUT PASSWORD
    // 
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // 
    // BUTTON
    // 
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        '&:hover': {
            backgroundColor: deepOrange[700],
        },
    }));

    return (
        <div className="content">

            {/* Helmet */}

            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="center">

                {/* Card */}

                <Card sx={{}} className='card'>
                    <CardContent>

                        {/* Logo */}

                        <div className="logo">
                            <Logo />
                        </div>

                        {/* Form */}

                        <form method="post" action="/">

                            {/* Email */}

                            <div className="input">
                                <TextField id="outlined-basic" label="E-mail" variant="outlined" size="small" fullWidth type='email' />
                            </div>

                            {/* Password */}

                            <div className="input">
                                <FormControl sx={{ m: 1 }} variant="outlined" size="small" fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </div>
                            <br />

                            {/* Login */}

                            <div className="button">
                                <ColorButton variant="contained" size="small" fullWidth type="submit">masuk</ColorButton>
                            </div>

                            {/* Sign Up */}

                            <div className="button">
                                <Button variant="outlined" size="small" fullWidth color="warning" href="/sign-up">
                                    daftar
                                </Button>
                            </div>

                        </form>

                    </CardContent>
                </Card>

            </div>
        </div>
    )
}