import React, { useState } from "react";
import data_dimensiones from "../../json/data_dimensiones.json";
import imgjs from "../ModuloImagenes/module_img";
import { Box, Grid, Typography } from "@mui/material";
import TooltipWithContent from "./CustomTooltip";

export default function CajaHerramientasItems(props) {
  const props_data = props.properties;

  return (
    <Box className="container-items-dimension">
      <Typography variant="h4" sx={{ color: "#fff", textAlign: "center" }}>{data_dimensiones.Dimension}</Typography>
      <Grid container spacing={0} sx={{ width: "100%" }} columns={7}>
        {props_data.name.map((dimension, dimensionIndex) =>
          create_caja_herramienta({ Dimension: dimension }).map(
            (item, index) => (
              <Grid
                columns={8}
                item
                key={`${dimensionIndex}-${index}`}
                md={1}
              >
                <Box
                  className="items-herramientas"
                  component="button"
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    border: 0,
                    background: "none",
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    paddingInline: "10px",
                    paddingTop: "15px",
                    margin: 0,
                    boxSizing: "border-box",
                    borderBottom: "10px solid #ffb846",
                    flexGrow: 1,
                  }}
                >
                  <TooltipWithContent properties={{ name: item.Tematica, json: data_dimensiones }}>
                    <Box
                      id={`${index}|${item.Tematica}`}
                      component="img"
                      src={imgjs[item.Codigo.split("-")[0]]}
                      alt={`Caja ${item.Tematica}`}
                      sx={{
                        position: "relative",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        cursor: "pointer",
                      }}
                    />
                  </TooltipWithContent>
                </Box>
              </Grid>
            )
          )
        )}
      </Grid>
    </Box>
  );
}

function create_caja_herramienta(data = {}) {
  const dimension = data_dimensiones.filter(
    (item) => item.Dimension === data.Dimension
  );
  return dimension.filter((item, index) => {
    if (index === 0 || item.Tematica !== dimension[index - 1].Tematica) {
      return item;
    }
    return null;
  });
}