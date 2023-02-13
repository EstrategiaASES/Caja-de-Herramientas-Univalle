//import librerayas de react
import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import logoUnivalle from '../../images/left_2.png';
import personImg from '../../images/rigth_11.png';
import estanteria_1 from '../../images/estanteria_1.png';
import estanteria_2 from '../../images/estanteria_2.png';
import estanteria_3 from '../../images/estanteria_3.png';
import estanteria_4 from '../../images/estanteria_4.png';
import $ from 'jquery';

//estilos de los componentes
const useStyles = makeStyles((theme) => ({

    'title-category': {
        fontSize: '2em',
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
        width: '37%',
        fontSize: '1.2em',
        opasity: '1',
        //hover
        '&:hover': {
            backgroundColor: '#ff725e ',
        },
        "@media (max-width: 600px)": {
            fontSize: '0.8em',
            height: '3.5em',
            width: '60%',
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

    //usestate
    const [click, setClick] = React.useState({
        boton: 0,
        botonesName: ['botones','1', '2', '3', '4', '5', '6']
    });

    let handleClick = (event) => {
        click_box(event, click, setClick)
    }

     //[{},{}]
    return (
        <div className='box-background'>
            <div className='letrero-caja'>
               <img src={logoUnivalle} />
            </div>
            <div className='box-home-category-select'>
                <div>
                    <img src={estanteria_1} />
                </div>
                <div>
                    <img src={estanteria_2} />
                </div>
                <div>
                     <img src={estanteria_3} />
                </div>
                <div>
                     <img src={estanteria_4} />
                </div>
            </div>
            <div className='personas-caja'>
                <img src={personImg} />
            </div>
        </div>
    )
}


/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs animacion sencilla para la caja
*/
function click_box(event, click, setClick) {

    let id = event.currentTarget.id
    //# 
    //animacion de desaparecer y aparecer el boton
    $('.Box-style-home-category-select').animate({
        opacity: 0,
    }, 1000, function () {

        if (click.boton === 0) {
            setClick({
                ...click,
                boton: id
            })
        } else {
            setClick({
                ...click,
                boton: 0
            })
        }

        $('.Box-style-home-category-select').animate({
            opacity: 1,
        }, 1500);

    });

    let font_size = $('#title-app-cha').css('font-size');

    //animacion para letra
    $('#title-app-cha').animate({
        fontSize: '0em',
    }, 1000, function () {
        $('#title-app-cha').animate({
            fontSize: font_size,
        }, 1500);
    });


}

