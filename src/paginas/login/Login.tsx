import React, { useState, ChangeEvent, useInsertionEffect, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button, Container } from '@material-ui/core';
import './Login.css';
import { Link } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';

function Login() {
    let history = useNavigate();
    const [token, setToken] = useState("");
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        })
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (token != '') {
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login('usuarios/logar', userLogin, setToken)


            alert('Usuário logado com sucesso');

        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!')
        }
    }



    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography className='textos1' variant='h3' gutterBottom color='textPrimary' align='center'  > Entrar </Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>

                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario' >
                            <Typography className='textos1' variant='subtitle1' gutterBottom align='center'  >Cadastra-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imag'>
            </Grid>
        </Grid>
    );

}


export default Login;
