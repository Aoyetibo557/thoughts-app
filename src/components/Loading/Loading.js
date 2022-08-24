import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading({size}) {
  
  const styles = {
    small: {
      width: '25px',
      height: '25px',
    },
      large:{
      width: '50px',
      height: '50px',
    }
  }

  return (
    <Box  sx={{ display: 'flex' }}>
      <CircularProgress style={size === "small" ? styles.small : styles.large}  />
    </Box>
  );
}
