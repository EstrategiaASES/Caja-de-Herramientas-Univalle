import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HoverContent(props) {
  let props_data = props.properties;

  return (
    <Box className='container-items-hover' sx={{ p: 2, backgroundColor: '#fff', borderRadius: 1, position: 'absolute', zIndex:100, width: 'auto'}}>
      <Typography variant="h6" className='title-tematica'>{props_data.name}</Typography>
      <Box className='content-tematicas'>
        {create_text_hover(props_data.json, props_data.name).map((item, index) => (
          <Typography key={index} variant="body2">{item}</Typography>
        ))}
      </Box>
    </Box>
  );
}

function create_text_hover(json = {}, name = '') {
  let text_hover = [];
  const data = json.filter((item) => item.Tematica === name);

  data.forEach((item) => {
    text_hover.push(`${item.Codigo}-${item.Nombre}`);
  });

  return text_hover;
}
