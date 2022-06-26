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

export default function SignUp() {
    // 
    // INPUT PASSWORD
    // 
    const [password, setPassword] = React.useState({
        password: '',
        showPassword: false,
    });
    const handleChangePassword = (prop) => (event) => {
        setPassword({ ...password, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setPassword({
            ...password,
            showPassword: !password.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // 
    // INPUT CONFIRM PASSWORD
    // 
    const [confirmPassword, setConfirmPassword] = React.useState({
        password: '',
        showPassword: false,
    });
    const handleChangeConfirmPassword = (prop) => (event) => {
        setConfirmPassword({ ...confirmPassword, [prop]: event.target.value });
    };
    const handleClickShowConfirmPassword = () => {
        setConfirmPassword({
            ...confirmPassword,
            showPassword: !confirmPassword.showPassword,
        });
    };
    const handleMouseDownConfirmPassword = (event) => {
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
                <title>Sign Up</title>
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

                            {/* ID Anggota */}

                            <div className="input">
                                <TextField name="idAnggota" id="idAnggota" label="ID Anggota" variant="outlined" size="small" fullWidth inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number" />
                            </div>

                            {/* Nama Lengkap */}

                            <div className="input">
                                <TextField name="nama" id="nama" label="Nama Lengkap" variant="outlined" size="small" fullWidth type='text' />
                            </div>

                            {/* Tempat Lahir */}

                            <div className="input">
                                <TextField name="tempatLahir" id="tempatLahir" label="Tempat Lahir" variant="outlined" size="small" fullWidth type='text' />
                            </div>

                            {/* Tanggal Lahir */}

                            <div className="input">
                                <TextField
                                    name="tanggalLahir"
                                    id="tanggalLahir"
                                    label="Tanggal Lahir"
                                    type="date"
                                    defaultValue=""
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                />
                            </div>

                            {/* No. HP */}

                            <div className="input">
                                <TextField name="noHp" id="noHp" label="No. HP" variant="outlined" size="small" fullWidth type='number' />
                            </div>

                            {/* Email */}

                            <div className="input">
                                <TextField name="email" id="email" label="E-mail" variant="outlined" size="small" fullWidth type='email' />
                            </div>

                            {/* Password */}

                            <div className="input">
                                <FormControl sx={{ m: 1 }} variant="outlined" size="small" fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        name="password"
                                        id="password"
                                        type={password.showPassword ? 'text' : 'password'}
                                        value={password.password}
                                        onChange={handleChangePassword('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {password.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </div>

                            {/* Confirm Password */}

                            <div className="input">
                                <FormControl sx={{ m: 1 }} variant="outlined" size="small" fullWidth>
                                    <InputLabel htmlFor="confirmPassword">Konfirmasi Password</InputLabel>
                                    <OutlinedInput
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        type={confirmPassword.showPassword ? 'text' : 'password'}
                                        value={confirmPassword.password}
                                        onChange={handleChangeConfirmPassword('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    onMouseDown={handleMouseDownConfirmPassword}
                                                    edge="end"
                                                >
                                                    {confirmPassword.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Konfirmasi Password"
                                    />
                                </FormControl>
                            </div>
                            <br />

                            {/* Register */}

                            <div className="button">
                                <ColorButton variant="contained" size="small" fullWidth type="submit">daftar</ColorButton>
                            </div>

                            {/* Have Account */}

                            <div className="button">
                                <Button variant="outlined" size="small" fullWidth color="warning" href="/">
                                    punya akun
                                </Button>
                            </div>

                        </form>

                    </CardContent>
                </Card>

            </div>
        </div>
    )
}