import React from "react";
import { BottomNavigation, Box, Grid, Typography } from '@mui/material';
import rompehielo from '../../assets/rompehielo.png';
import logoases from '../../assets/logo_ases.png';

function Footer() {
    return (
        <BottomNavigation
            sx={{
                width: "100%",
                height: "15%",
                position: "fixed",
                bottom: 0,
                zIndex: 1000,
                backgroundColor: "#E8002D",
            }}
        >
            <Box sx={{
                
                display: "flex",
                position: "relative",
                justifyContent: "center",
                alignItems: "flex-end",
                marginLeft: "5%",
                marginRight: "5%",
             }}>
                {<img
                    src={rompehielo}
                    alt="Actividades Rompehielo"
                    style={{ width: "auto", height: "100%" }}
                />}
            </Box>
            <Grid
            container
            sx={{  
                display: "flex",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
            }}
            spacing={0}
        >
            <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ color: "#fff", textAlign: "center", borderBottom: "2px solid white"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: "#fff", textAlign: "center", alignContent: "flex-start"}}>
                    Estrategia de Acompañamiento y Seguimiento Estudiantil
                </Typography>
            </Grid>
        </Grid>
            <Box sx={{
                
                display: "flex",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                marginLeft: "5%",
                marginRight: "5%",
             }}>
                {<img
                    src={logoases}
                    alt="Actividades Rompehielo"
                    style={{ width: "auto", height: "95%" }}
                />}
            </Box>
        </BottomNavigation>
    );
}

export default Footer;
