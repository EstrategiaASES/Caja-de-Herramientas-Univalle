import React, { useState } from 'react';
import data_dimensiones from '../../json/data_dimensiones.json';
import imgjs from '../ModuloImagenes/module_img';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TableInfoTematica from '../TableInfoTematica/TableInfoTematica';
import HoverContent from './HoverContent';

export default function CajaHerramientasItems(props) {
    let props_data = props.properties;

    //setdata
    const [data, setData] = React.useState({
        data_table: []
    });
 
    const event_click = (e) => {
        const id = (e.currentTarget.id).split('|')[1];
        const data = data_dimensiones.filter((item) => item.Tematica === id);
        props_data.data_set({...props_data.data, data_table: data})
        document.querySelector('.click-exit').classList.remove('display-none');
        document.querySelector('.tabla-responsive').classList.remove('display-none');
        document.querySelector('html').className += ' background-aux-html';
    }

    return (
        <div className='container-items-dimension'> 
        <div className='box-home-category-select-items'>
            { 
                (props_data.name).map((item, index) => (
                    
                    create_caja_herramienta({ Dimension: item}).map((item, index) => {
                           console.log(imgjs[((item.Codigo).split('-')[0])])
                            return (
                                <a id={`${index}|${item.Tematica}`} onClick={event_click} type='button' key={index} className='items-herramientas'>
                                    <HoverContent  properties={ {name: item.Tematica , json: data_dimensiones} } />
                                    <img src={imgjs[((item.Codigo).split('-')[0])]} />
                                </a>
                            )
                    })
                
                ))
            }   
        </div>
     </div>
    )
}

/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs animacion sencilla para la caja
*/
function create_caja_herramienta(data = {}) {

    const dimension = data_dimensiones.filter((item) => item.Dimension === data.Dimension);
    const caja_herramienta = dimension.filter((item,index) => {
        
       if (index > 0) {
            if (item.Tematica !== dimension[index - 1].Tematica) {
                return item;
            }
       } 
       else {
            return item;
       }

    });

    return caja_herramienta;

}