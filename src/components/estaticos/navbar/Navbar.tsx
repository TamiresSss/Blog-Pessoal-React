import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

    return (
        <>
            <AppBar position='static' style={{backgroundColor:"#CEB5BE"}}>
                <Toolbar variant="dense">
                    <Box className ='cursor' >
                        <Typography variant="h5" color="inherit">
                            
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className ='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className ='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className ='cursor' >
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className ='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                          <Link to ='login' className='text-decorator-none'>
                        <Box mx={1}className ='cursor' >
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}