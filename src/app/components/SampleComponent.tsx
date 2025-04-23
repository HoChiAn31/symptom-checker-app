import React from 'react';
import { Button, Typography } from '@mui/material';

const SampleComponent: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <Typography variant="h5" className="mb-4">
        Welcome to Next.js with Material UI
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
};

export default SampleComponent;