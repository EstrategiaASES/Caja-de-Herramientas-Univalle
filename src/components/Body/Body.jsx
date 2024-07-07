import React from "react";
import { Grid, Box } from "@mui/material";
import estanteria_1 from "../../assets/estanteria_1.png";
import estanteria_2 from "../../assets/estanteria_2.png";
import estanteria_3 from "../../assets/estanteria_3.png";
import estanteria_4 from "../../assets/estanteria_4.png";
import CajaHerramientasItems from "../Cajaherramientas/CajaHerramientasItems";
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
        display: 'relative',
        justifyContent: 'center',
        alignItems: 'bottom',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: 0,
        paddingBottom: '0%',
      }}
    >
      <Grid
        className="grid_Estanteria"
        item
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)',
          width: "100%",
          position: "relative",
          display: "block",
          padding: "6px",
          background: "#C96F3D",
          borderRadius: "8px",
          border: "10px solid #C96F3D",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={0}
            sx={{
              clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)',
              width: "100%",
              margin: 0,
              padding: 0 
            }}
          >
            {array_estanteria.map((item, index) => (
              <Grid
                item
                key={index}
                sx={{
                  display: "absolute",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  width: "100%",
          backgroundColor: "#e5e5f7",
          opacity: 0.8,
          backgroundImage: "repeating-linear-gradient(0deg, #444cf7, #444cf7 1px, #e5e5f7 1px, #e5e5f7)",
          backgroundSize: "20px 20px",
                }}
              >
                <img
                  src={item.img}
                  alt={`Estanteria ${index}`}
                  style={{ width: "100%", height: "auto" }}
                />
                
                <Box>
                  {index > 0 && item.name && Array.isArray(item.name) && (
                    <CajaHerramientasItems
                      properties={{
                        name: item.name,
                        data: data,
                        data_set: setData,
                      }}
                    />
                  )}
                </Box>
                
              </Grid>
            ))}
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                padding: 0,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#60686f",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <TableInfoTematica properties={data.data_table} />
      
    </Box>
  );
}

export default Body;
