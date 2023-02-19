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
import CajaHerramientasItems from './CajaHerramientasItems';
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

    let array_estanteria = [ 
        {
            img: estanteria_1
        }, 
        {
            name: ['D1 Academica'],
            img: estanteria_2
        },
        {
            name: ['D3 Familiar', 'D4 Indivividual'],
            img: estanteria_3
        },
        {
            name: ['D2 Economica', 'D5 Vida Universitaria'],
            img: estanteria_4
        }
   ];


    //[{},{}]
    return (
        <div className='box-background'>
            <div className='letrero-caja'>
               <img src={logoUnivalle} />
            </div>
            <div className='box-home-category-select'>
                {
                    array_estanteria.map((item, index) => {
                        console.log(item.name);
                        return (
                            <div key={index}>
                                {(index > 0) && (
                                    <CajaHerramientasItems properties={ {name: item.name} } />
                                )}
                                <img src={item.img} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='personas-caja'>
                <img src={personImg} />
            </div>
        </div>
    )
}


