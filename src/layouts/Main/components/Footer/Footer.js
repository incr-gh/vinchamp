import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Logo from 'svg/illustrations/vinchamplogo.png';
const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Guardian Call"
            width={80}
          >
            <Box component={'img'} src={Logo.src} height={0.5} width={0.5} />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}></Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; GuardianCall. 2024 Vinchamp. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        ></Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
