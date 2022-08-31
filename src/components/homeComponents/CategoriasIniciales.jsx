//import librerayas de react
import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import logoUnivalle from '../../images/logoasesuv.svg';
//importar componentes
import { TitleAplication } from './TitleAplication.tsx';


//estilos de los componentes
const useStyles = makeStyles((theme) => ({

    'title-category': {
        fontSize: '3em',
        fontWeight: '400',
        color: 'hsl(198deg 32% 16%)',
        textAlign: 'center',
        "@media (max-width: 600px)": {
            fontSize: '1.5em',
        }
    },
    buttonCategory: {
        backgroundColor: '#ff725e',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        height: '3em',
        width: '50%',
        fontSize: '1.3em',
        //hover
        '&:hover': {
            backgroundColor: '#ff725e',
        },
        "@media (max-width: 600px)": {
            fontSize: '0.8em',
            height: '3.5em',
        }
    },
    imgUV: {
        position: 'absolute',
        bottom: '3em',
        right: '3em',
        width: '20%',
        "@media (max-width: 600px)": {
            bottom: '1.5em',
            right: '2em',
        }
    }


}));


/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs categoria inicial de la pagina
*/
export function CategoriasIniciales(props) {

    let state = props.properties;
    const classes = useStyles();

    return (

        <div className={state['cls-1']}>
            <TitleAplication />
            <div className={state['cls-2']}>
                <Typography className={classes['title-category']}>
                    Seleccioné una Dimensión
                </Typography>
                {
                    state['botones'].map((item, index) => (

                        <Button key={index} variant="contained" className={classes.buttonCategory}>
                            {item.name}
                        </Button>
                    )
                    )
                }

            </div>
            <img className={classes.imgUV} src={logoUnivalle} />
        </div>

    )
}


/**
 *     
                
 */