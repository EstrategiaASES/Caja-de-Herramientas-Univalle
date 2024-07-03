import React, { useState } from "react";
import data_dimensiones from "../../json/data_dimensiones.json";
import imgjs from "../ModuloImagenes/module_img";
import HoverContent from "./HoverContent";
import { Box, Grid } from "@mui/material";
import TableInfoTematica from '../TableInfoTematica/TableInfoTematica'; // Importa el componente refactorizado

export default function CajaHerramientasItems(props) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  let props_data = props.properties;

  const handleOpen = (data) => {
    setModalData(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const event_click = (e) => {
    const id = e.currentTarget.id.split("|")[1];
    const data = data_dimensiones.filter((item) => item.Tematica === id);
    props_data.data_set({ ...props_data.data, data_table: data });
    handleOpen(data);
  };

  return (
    <Box className="container-items-dimension">
      <Grid container spacing={2} className="box-home-category-select-items"
        sx={{
            width: "100%",
        }}
      >
        {props_data.name.map((dimension, dimensionIndex) =>
          create_caja_herramienta({ Dimension: dimension }).map(
            (item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={`${dimensionIndex}-${index}`}
              >
                <Box
                  className="items-herramientas"
                  component="button"
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    border: 0,
                    background: "none",
                    borderBottom: "10px solid #ffb846",
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    margin: 0,
                    boxSizing: "border-box",
                  }}
                >
                  {hoveredItem === `${dimensionIndex}-${index}` && (
                    <HoverContent
                      properties={{
                        name: item.Tematica,
                        json: data_dimensiones,
                      }}
                    />
                  )}
                  <Box
                    id={`${index}|${item.Tematica}`}
                    onClick={event_click}
                    onMouseEnter={() =>
                      setHoveredItem(`${dimensionIndex}-${index}`)
                    }
                    onMouseLeave={() => setHoveredItem(null)}
                    component="img"
                    src={imgjs[item.Codigo.split("-")[0]]}
                    alt={`Caja ${item.Tematica}`}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Grid>
            )
          )
        )}
      </Grid>
      <TableInfoTematica properties={modalData} open={open} handleClose={handleClose} />
    </Box>
  );
}

/**
 *  @decs animacion sencilla para la caja
 */
function create_caja_herramienta(data = {}) {
  const dimension = data_dimensiones.filter(
    (item) => item.Dimension === data.Dimension
  );
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
