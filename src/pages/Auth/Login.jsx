import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import { Typography, Box } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
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
          Welcome Back!
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Sign in to continue to your account.
        </Typography>
        <form onSubmit={(e) => e.preventDefault()}>
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
          <Button onClick={handleLogin}>Login</Button>
        </form>
        <Typography variant="body2">
          Don't have an account?{' '}
          <Link to="/register" style={{ textDecoration: 'none' }}>
            Register here
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default Login;
