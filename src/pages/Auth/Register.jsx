import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import { Typography, Box } from '@mui/material';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your register logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card>
        <Typography variant="h4" component="h2" gutterBottom>
          Create an Account
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Get started with a free account.
        </Typography>
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleRegister}>Register</Button>
        </form>
        <Typography variant="body2">
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Login here
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default Register;
