import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../../assets/logo_xtrategie.png'
import { Container } from '../login/style';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';


function Login() {

    const [values, setValues] = React.useState({
        password: '',
    });

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    console.log(errors)
    return (
        <Container>
            <div className='imgContainer'>
                <img src={logo} />
            </div>
            <div id="divForm">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label style={{ width: '100%' }}>Faça Seu Login</label>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            '& .MuiTextField-root': { width: '25ch' },
                        }}>
                        <TextField style={{ width: '100%', margin: '5px' }} id="filled-basic" label="email" variant="filled"{...register("email", {
                            required: "invalid email",
                            pattern:
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })} />
                        
                            
                            <FilledInput variant="filled" style={{width:'100%',margin:'5px'}}{...register("password",{required:"Password is required"})}
                                id="filled-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    
                                        <IconButton style={{width:'10px'}}
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    
                                }
                            />
                        <Button style={{ border: '2px solid black', backgroundColor: 'white', borderColor: '#04AA6D', color: 'green' }} variant="outlined" type='submit' variant="outlined" >Entrar</Button>
                    </Box>
                </form>
            </div>
        </Container>
    );
}

export default Login;