//import libreria
import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

//estilos de los componentes
const useStyles = makeStyles((theme) : any => ({

    'title-home-app': {
        color: 'hsl(198deg 32% 16%)',
        fontSize: '4.7em',
        fontWeight: "700",
        textAlign: 'center',
        padding: '0.5em 0.5em',
        "@media (max-width: 1200px)": {
            fontSize: '3.9em',
        },
        "@media (max-width: 900px)": {
            fontSize: '3em',
        },
        "@media (max-width: 600px)": {
            fontSize: '1.3em',
        }
    } 

}));


/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs Title of the application
*/
export function TitleAplication() {
    
    //variables de estilos
    const classes = useStyles();

    return (
        <Typography className={classes['title-home-app']}>
            CAJA DE HERRAMIENTAS - ASES
        </Typography>
    )
}