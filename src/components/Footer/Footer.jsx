import React from "react";
import { AppBar, Toolbar, Grid, Box } from '@mui/material';
import headerImg from "../../assets/footer_1.png";

function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#ba0017', margin: 0}}>
            <Toolbar sx={{
                width: "viewport.width",
            }}> 
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <img 
                            src={headerImg} 
                            alt="Header-img" 
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
