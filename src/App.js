import { Grid, AppBar, Toolbar, Typography} from '@mui/material';
import React from 'react';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Grid container direction="column" 
      sx={{
        margin:0,
        padding:0,
       // overflow: "hidden"
      }}
    >
      <Grid item sx ={{
        backgroundColor: "#ba0017",
        margin: 0,
        padding: 0,
        width: "100vw",
        //overflow: "hidden",
      
      }}>
        <Header />
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item sx={{
          width: "100%",
          margin: 0,
          padding: 0,
          
        }} >
       <Body />   
        </Grid>
      </Grid>
      <Grid item sx={{
        backgroundColor: "#ba0017",
        margin: 0,
        padding: 0,
        width: "100vw",
        overflow: "hidden",
      }} >
        <Footer />
      </Grid>
    </Grid>
  );
}


export default App;
