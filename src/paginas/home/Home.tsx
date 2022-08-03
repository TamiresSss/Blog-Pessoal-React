import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import './Home.css'

function Home() {
  return (
    <>
        <img className="titulo-imagem" src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1157543/808686_587371.png" alt=" " width="50%" height="50%"/>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#AE8594" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "antiquewhite", fontWeight: "bold" }}>Seja bem vinde!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "antiquewhite", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B", color: "white" }}>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
          <TabPostagem/>
        </Grid>
      </Grid>
    </>
  )      
  
}
export default Home;