import React from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const CreateProject = () => {
  return (
    <Card>
      <h2>Create a New Project</h2>
      <form>
        <Input type="text" placeholder="Project Name" />
        <Input type="text" placeholder="Project Summary" />
        <Input type="text" placeholder="Link to Project" />
        <Button>Create Project</Button>
      </form>
    </Card>
  );
};

export default CreateProject;
