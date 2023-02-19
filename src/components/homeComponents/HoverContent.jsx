//importar React
import React from 'react';


export default function HoverContent(props) {
    let props_data = props.properties;
    return (
        <div className='container-items-hover'>
            <div className='title-tematica'>{props_data.name}</div>
            <div className='content-tematicas'>
                {
                    create_text_hover(props_data.json, props_data.name).map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}


/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs animacion sencilla para la caja
*/
function create_text_hover(json = {} , name = '') {

    let text_hover = [];
    const data = json.filter((item) => item.Tematica === name);

    data.map((item, index) => {
         text_hover.push(`${item.Codigo}-${item.Nombre}`);
    })

    return text_hover;
}