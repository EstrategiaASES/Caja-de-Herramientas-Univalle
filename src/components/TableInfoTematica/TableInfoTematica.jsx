import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TableInfoTematica({ properties }) {
    const data_info = properties;

    return (
        <Box>
            <table cellPadding="10">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción General</th>
                        <th>Modalidad</th>
                        <th>Dirigido a</th>
                        <th>Palabras Claves</th>
                        <th>Duración</th>
                        <th>¿Requiere Acompañamiento?</th>
                    </tr>
                </thead>
                <tbody>
                    {data_info.map((item, index) => (
                        <tr key={index}>
                            <td><a target="_blank" rel="noopener noreferrer" href={item.enlace_actividad}>{item.Nombre}</a></td>
                            <td>{item.descripcion_general}</td>
                            <td>{item.Modalidad}</td>
                            <td>{item.dirigido_a}</td>
                            <td>{item.palabras_claves}</td>
                            <td>{item.Duración}</td>
                            <td>{item.requiere_acompanamiento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    );
}
