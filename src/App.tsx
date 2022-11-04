import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Chart from './components/Chart';
import './App.css';

function Copyright() {
  return (
    <Typography className="copyright" variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Convex Chart
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Chart name="Asset TVL" />
        <Copyright />
      </Box>
    </Container>
  );
}