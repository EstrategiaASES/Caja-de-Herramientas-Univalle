import React from "react";
import { Grid, Box } from "@mui/material";
import estanteria_1 from "../../assets/estanteria_1.png";
import estanteria_2 from "../../assets/estanteria_2.png";
import estanteria_3 from "../../assets/estanteria_3.png";
import estanteria_4 from "../../assets/estanteria_4.png";
import CajaHerramientasItems from "../Cajaherramientas/CajaHerramientasItems";
import logoUnivalle from "../../assets/left_2.png"; // Verifica la ruta de la imagen
import personImg from "../../assets/rigth_11.png";
import TableInfoTematica from "../TableInfoTematica/TableInfoTematica";

function Body(props) {
  let array_estanteria = [
    { img: estanteria_1 },
    { name: ["D1 Academica"], img: estanteria_2 },
    { name: ["D3 Familiar", "D4 Indivividual"], img: estanteria_3 },
    { name: ["D2 Economica", "D5 Vida Universitaria"], img: estanteria_4 },
  ];

  const [data, setData] = React.useState({
    data_table: [],
  });

  return (
    <Box
      sx={{
        backgroundColor: "#ba0017",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Grid
        className="grid_Container"
        container
        sx={{
          flex: 1,
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <Grid
          className="grid_columna_izquierda"
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: 0,
          }}
        >
          <Box
            className="imagen_rompehielo"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <img
              src={logoUnivalle}
              alt="Univalle Logo"
              style={{ width: "80%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid
          className="grid_Estanteria"
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: 0,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              spacing={0}
              sx={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
            >
              {array_estanteria.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    padding: 0,
                  }}
                >
                  {index > 0 && item.name && Array.isArray(item.name) && (
                    <CajaHerramientasItems
                      properties={{
                        name: item.name,
                        data: data,
                        data_set: setData,
                      }}
                    />
                  )}
                  <img
                    src={item.img}
                    alt={`Estanteria ${index}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid
          className="grid_columna_derecha"
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: 0,
          }}
        >
          <Box className="personas_box_img"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <img
              src={personImg}
              alt="Personas"
              style={{ width: "16vw", height: "40vh" }}
            />
          </Box>
        </Grid>
      </Grid>
      <TableInfoTematica properties={data.data_table} />
    </Box>
  );
}

export default Body;
