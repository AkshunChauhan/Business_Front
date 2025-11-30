import React from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const RegisterCompany = () => {
  return (
    <Card>
      <h2>Register Your Company</h2>
      <form>
        <Input type="text" placeholder="Company Name" />
        <Input type="email" placeholder="Contact Email" />
        <Input type="text" placeholder="Primary Domain" />
        <Button>Register</Button>
      </form>
    </Card>
  );
};

export default RegisterCompany;
