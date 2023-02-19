//importar React
import React from 'react';
import json_data_dimension from '../../json/data_dimensiones.json';
import HoverContent from './HoverContent';

export default function CajaHerramientasItems(props) {
    let props_data = props.properties;
    return (
        <div className='container-items-dimension'> 
        <div className='box-home-category-select-items'>
            { 
                (props_data.name).map((item, index) => (
                    
                    create_caja_herramienta({ Dimension: item}).map((item, index) => {
                            return (
                                <div key={index} className='items-herramientas'>
                                    <HoverContent  properties={ {name: item.Tematica , json: json_data_dimension} } />
                                    { index /*(item.Tematica).split('-')[1]*/}
                                </div>
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

    const dimension = json_data_dimension.filter((item) => item.Dimension === data.Dimension);
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