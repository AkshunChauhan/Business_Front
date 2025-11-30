import React from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const SubmitRequirement = () => {
  return (
    <Card>
      <h2>Submit a New Requirement</h2>
      <form>
        <Input type="text" placeholder="Requirement Description" />
        <Input type="text" placeholder="Time Estimate (optional)" />
        <Button>Submit</Button>
      </form>
    </Card>
  );
};

export default SubmitRequirement;
