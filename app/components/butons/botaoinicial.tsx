import * as React from 'react';
import Button from '@mui/material/Button';




export default function home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',    
        height: '100vh',    
        backgroundColor: 'white',     
      }}
    >
      <Button 
        sx={{
          width: '150px',
          height: '50px',
          borderRadius: '30px',
          backgroundColor: 'error',
        }} 
        color='error' 
        variant='outlined'
      >
        Clica
      </Button>
    </div>
  );
  
}



