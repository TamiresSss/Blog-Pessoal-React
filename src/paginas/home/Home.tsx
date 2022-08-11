import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import './Home.css'
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

function Home() {


  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
}, [token])
  return (
    <>
      <img className="titulo-imagem" />
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#AE8594" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "antiquewhite", fontWeight: "bold" }}>Seja bem vinde!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "antiquewhite", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to = "/postagens" className='text-decorator-none'>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B", color: "white" }}>
              Ver Postagens
            </Button>
            </Link>
            
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1157543/808686_587371.png" alt="" width="672px" height="600px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )

}
export default Home;