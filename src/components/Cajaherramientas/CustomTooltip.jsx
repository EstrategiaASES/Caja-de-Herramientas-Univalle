import React from 'react';
import { Tooltip, Typography, Box, Chip, Link, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }}
    placement="top"
    slotProps={{
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -14],
            },
          },
        ],
      },
    }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: 'red',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    maxHeight: '300px',
    minWidth: 'auto',
    overflowY: 'auto',
    overflowX: 'hidden',
    maxWidth: '300px',
    position: 'relative',
  },
});

function create_text_hover(json = {}, name = '') {
  let text_hover = [];
  const data = json.filter((item) => item.Tematica === name);

  data.forEach((item) => {
    text_hover.push(<Link color="inherit" href={item.enlace_actividad} target="_blank" rel="noopener noreferrer">{item.Codigo}-{item.Nombre}</Link>);
  });

  return text_hover;
}

export default function TooltipWithContent(props) {
  const { properties, children } = props;
  const props_data = properties;

  return (
    <CustomTooltip
      title={
        <Box className='container-items-hover'>
          <Stack direction="row" alignItems="center" spacing={1}>
        <Typography>{props_data.name}</Typography>
        <LaunchIcon />
      </Stack>
          <Box className='content-tematicas'>
            {create_text_hover(props_data.json, props_data.name).map((item, index) => (
              <Typography key={index} variant="body2">{item}</Typography>
            ))}
          </Box>
        </Box>
      }
    >
      {children}
    </CustomTooltip>
  );
}
