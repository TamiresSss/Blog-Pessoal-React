import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { useDispatch } from "react-redux";
import { Action, addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }
    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position='static' style={{ backgroundColor: "#CEB5BE" }}>
            <Toolbar variant="dense">
                <Box className='cursor' >
                    <Typography variant="h5" color="inherit">

                    </Typography>
                </Box>
                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/listapostagem" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='login' className='text-decorator-none'>
                        <Box mx={1} className='cursor' onClick={goLogout} >
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Link>
                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;
function dispatch(arg0: Action) {
    throw new Error('Function not implemented.');
}

