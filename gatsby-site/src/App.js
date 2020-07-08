import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BottomNavigation, BottomNavigationAction, Button } from '@material-ui/core';


export default function App() {

  
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          AI in Trading
        </Typography>
      </Box>
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="AI Dashboard"  />
        <BottomNavigationAction label="Positions"  />
        <BottomNavigationAction label="Analytics"  />
      </BottomNavigation>

      <Button variant="contained" color="primary">
        Trigger Signal Generator
      </Button>
      <Button variant="contained" color="primary">
        Generate StopLoss/Target
      </Button>
    </Container>
  );
}
