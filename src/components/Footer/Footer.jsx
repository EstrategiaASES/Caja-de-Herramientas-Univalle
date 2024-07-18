import React from "react";
import { BottomNavigation, Box, Grid, Typography } from '@mui/material';
import rompehielo from '../../assets/rompehielo.png';
import logoases from '../../assets/logo_ases.png';
import data_dimensiones from "../../json/data_dimensiones.json";
import TooltipWithContent from "../Cajaherramientas/CustomTooltip";

const rompehielo_tematicas = data_dimensiones.filter((item) => item.Dimension === "ROMPEHIELO");

function Footer() {

    return (
        <BottomNavigation
            sx={{
                width: "100%",
                height: "12%",
                position: "fixed",
                bottom: 0,
                zIndex: 1000,
                backgroundColor: "#E8002D",
            }}
        >
            <TooltipWithContent properties={{ name: "ROMPEHIELO", json: rompehielo_tematicas }}>
                <Box sx={{

                    display: "flex",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    marginLeft: "0%",
                    marginRight: "5%",
                    bottom: "70%",
                }}>
                    {<img
                        src={rompehielo}
                        alt="Actividades Rompehielo"
                        style={{ width: "80%", height: "auto" }}
                    />}
                </Box>
            </TooltipWithContent>

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
                    <Typography variant="subtitle1" sx={{ color: "#fff", textAlign: "center", borderBottom: "2px solid white" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmode et dolore magna aliqua.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ color: "#fff", textAlign: "center", alignContent: "flex-start" }}>
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
                <img
                    src={logoases}
                    alt="Logo Ases"
                    style={{ width: "auto", height: "95%" }}
                />
            </Box>
        </BottomNavigation>
    );
}

export default Footer;
