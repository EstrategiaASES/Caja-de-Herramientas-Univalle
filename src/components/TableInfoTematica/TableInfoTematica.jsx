import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
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
                {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                    Información de la Temática
                </Typography> */}
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Descripción General</TableCell>
                                <TableCell>Modalidad</TableCell>
                                <TableCell>Dirigido a</TableCell>
                                <TableCell>Palabras Claves</TableCell>
                                <TableCell>Duración</TableCell>
                                <TableCell>¿Requiere Acompañamiento?</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data_info.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <a target="_blank" rel="noopener noreferrer" href={item.enlace_actividad}>
                                            {item.Nombre}
                                        </a>
                                    </TableCell>
                                    <TableCell>{item.descripcion_general}</TableCell>
                                    <TableCell>{item.Modalidad}</TableCell>
                                    <TableCell>{item.dirigido_a}</TableCell>
                                    <TableCell>{item.palabras_claves}</TableCell>
                                    <TableCell>{item.Duración}</TableCell>
                                    <TableCell>{item.requiere_acompanamiento}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Modal>
    );
}
