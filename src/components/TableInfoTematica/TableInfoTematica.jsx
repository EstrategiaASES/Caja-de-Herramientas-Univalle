import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  maxHeight: '90vh',
  overflow: 'auto',
  borderRadius: '20px',
};

const tableHeaderStyles = {
  bgcolor: '#00c1ec', // Fondo azul para encabezados
  color: 'white', // Texto blanco para contraste
  border: '3px dashed white',
  fontSize: '1.5rem', // Tamaño de fuente similar a H1
  fontFamily: 'Arial, sans-serif', // Cambia esto a la fuente que prefieras
};
const tableHeaderStyles2 = {
  bgcolor: '#ee0000', // Fondo rojo para encabezados
  color: 'white', // Texto blanco para contraste
  border: '3px dashed white',
  fontSize: '1.5rem', // Tamaño de fuente similar a H1
  fontFamily: 'Arial, sans-serif', // Cambia esto a la fuente que prefieras
};

const tableCellStyles = {
  bgcolor: '#c3edfa', // Fondo azul claro para celdas
  border: '3px dashed white',
};
const tableCellStyles2 = {
  bgcolor: '#ffffff', // Fondo blanco para celdas
  border: '3px dashed white',
};

export default function TableInfoTematica({ properties, open, handleClose }) {
  const data_info = properties;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={tableHeaderStyles2}>Nombre</TableCell>
                <TableCell sx={tableHeaderStyles2}>Descripción General</TableCell>
                <TableCell sx={tableHeaderStyles}>Modalidad</TableCell>
                <TableCell sx={tableHeaderStyles}>Dirigido a</TableCell>
                <TableCell sx={tableHeaderStyles}>Palabras Claves</TableCell>
                <TableCell sx={tableHeaderStyles}>Duración</TableCell>
                <TableCell sx={tableHeaderStyles}>¿Requiere Acompañamiento?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data_info.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={tableCellStyles2}>
                    <a target="_blank" rel="noopener noreferrer" href={item.enlace_actividad}>
                      {item.Nombre}
                    </a>
                  </TableCell>
                  <TableCell sx={tableCellStyles2}>{item.descripcion_general}</TableCell>
                  <TableCell sx={tableCellStyles}>{item.Modalidad}</TableCell>
                  <TableCell sx={tableCellStyles}>{item.dirigido_a}</TableCell>
                  <TableCell sx={tableCellStyles}>{item.palabras_claves}</TableCell>
                  <TableCell sx={tableCellStyles}>{item.Duración}</TableCell>
                  <TableCell sx={tableCellStyles}>{item.requiere_acompanamiento}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}
