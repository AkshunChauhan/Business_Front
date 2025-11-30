import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This is the about page.
      </Typography>
    </Container>
  );
};

export default About;
