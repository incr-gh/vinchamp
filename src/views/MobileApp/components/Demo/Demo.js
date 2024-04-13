import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';

const Demo = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{ fontWeight: 700 }}
          variant={'h4'}
          align={'center'}
          gutterBottom
        >
          Our demo
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          Detecting deepfakes video call with high accuracy
        </Typography>
      </Box>
      <CardContent align="center">
        <iframe
          src="https://incrhf-ydcc-vinchamp.hf.space"
          width="1080"
          height="720"
        ></iframe>
      </CardContent>
    </Box>
  );
};

export default Demo;
