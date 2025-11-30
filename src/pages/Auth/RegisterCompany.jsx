import React from 'react';
import { Card, Typography, TextField, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const RegisterCompany = () => {
  const navigate = useNavigate();

  const handleRegisterCompany = () => {
    // Simulate a registration by redirecting the user
    navigate('/business-dashboard');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card sx={{ padding: '2rem', width: '100%', maxWidth: '500px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register Your Company
        </Typography>
        <form>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Company Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="email"
          />
          <TextField
            label="Industry"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company Website"
            variant="outlined"
            fullWidth
            margin="normal"
            type="url"
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleRegisterCompany} sx={{ marginTop: '1rem' }}>
            Register Company
          </Button>
        </form>
        <Typography variant="body2" sx={{ marginTop: '1rem' }}>
          Already have a company registered?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Login here
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default RegisterCompany;
