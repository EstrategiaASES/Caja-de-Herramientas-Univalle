//import React
import React from 'react';



export default function TableInfoTematica(props) {

    let props_data = props.properties;
    let data_info = [{},{},{},{},{}];

    const event_click = (e) => {
        document.querySelector('.click-exit').className += ' display-none';
        document.querySelector('.tabla-responsive').className += ' display-none';
        document.querySelector('html').classList.remove('background-aux-html');
    }

    return (
        <>
        <div className="tabla-responsive display-none">
            <div className="tabla_responsive__content">
                <table cellPadding="10">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion general</th>
                            <th>Modalidad</th>
                            <th>Dirigido a:</th>
                            <th>Palabras claves</th>
                            <th>Duración</th>
                            <th>¿Requiere acompañamiento previo?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data_info.map((item, index) => {
                                
                                return (
                                    <tr key={index}>
                                        <td><a target="_blank" href={(props_data[index])? props_data[index].enlace_actividad : ''}>{ (props_data[index])? props_data[index].Nombre : ''}</a></td>
                                        <td>{ (props_data[index])? props_data[index].descripcion_general : ''}</td>
                                        <td>{ (props_data[index])? props_data[index].Modalidad : ''}</td>
                                        <td>{ (props_data[index])? props_data[index].dirigido_a : ''}</td>
                                        <td>{ (props_data[index])? props_data[index].palabras_claves : ''}</td>
                                        <td>{ (props_data[index])? props_data[index].Duración : ''}</td>
                                        <td>{ (props_data[index])? props_data[index].requiere_acompanamiento : ''}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <a onClick={event_click} type='button' className='click-exit display-none' />
        </div>
        
        </>
    )
}