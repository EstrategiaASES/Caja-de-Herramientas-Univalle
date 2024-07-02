import React, { useState } from 'react';
import data_dimensiones from '../../json/data_dimensiones.json';
import imgjs from '../ModuloImagenes/module_img';
import HoverContent from './HoverContent';

export default function CajaHerramientasItems(props) {
    const [hoveredItem, setHoveredItem] = useState(null);
    let props_data = props.properties;

    const event_click = (e) => {
        const id = (e.currentTarget.id).split('|')[1];
        const data = data_dimensiones.filter((item) => item.Tematica === id);
        props_data.data_set({...props_data.data, data_table: data});
        document.querySelector('.click-exit').classList.remove('display-none');
        document.querySelector('.tabla-responsive').classList.remove('display-none');
        document.querySelector('html').className += ' background-aux-html';
    }

    return (
        <div className='container-items-dimension'> 
            <div className='box-home-category-select-items'>
                { 
                    props_data.name.map((item, index) => (
                        create_caja_herramienta({ Dimension: item }).map((item, index) => {
                            return (
                                <a
                                    id={`${index}|${item.Tematica}`}
                                    onClick={event_click}
                                    onMouseEnter={() => setHoveredItem(index)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    type='button'
                                    key={index}
                                    className='items-herramientas'
                                >
                                    {hoveredItem === index && (
                                        <HoverContent properties={{ name: item.Tematica, json: data_dimensiones }} />
                                    )}
                                    <img src={imgjs[((item.Codigo).split('-')[0])]} />
                                </a>
                            )
                        })
                    ))
                }   
            </div>
        </div>
    );
}

/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs animacion sencilla para la caja
 */
function create_caja_herramienta(data = {}) {
    const dimension = data_dimensiones.filter((item) => item.Dimension === data.Dimension);
    const caja_herramienta = dimension.filter((item, index) => {
        if (index > 0) {
            if (item.Tematica !== dimension[index - 1].Tematica) {
                return item;
            }
        } else {
            return item;
        }
    });

    return caja_herramienta;
}
