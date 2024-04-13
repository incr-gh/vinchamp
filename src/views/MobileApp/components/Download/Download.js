import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Download = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          An extension
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>
          Could help you to prevent malicious threats. Unmask hidden dangers and
          safeguard yourself online!
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box display="flex" marginTop={1}>
            <Box
              component={Avatar}
              bgcolor={'primary.main'}
              width={{ xs: 40, sm: 50 }}
              height={{ xs: 40, sm: 50 }}
            >
              <Box
                component={'img'}
                src={
                  'https://assets.maccarianagency.com/svg/icons/app-store-icon.svg'
                }
                alt={'app store'}
                width={{ xs: 15, md: 20 }}
              />
            </Box>
            <Box
              component={Avatar}
              bgcolor={'primary.main'}
              marginLeft={1}
              width={{ xs: 40, sm: 50 }}
              height={{ xs: 40, sm: 50 }}
            >
              <Box
                component={'img'}
                src={
                  'https://assets.maccarianagency.com/svg/icons/play-store-icon.svg'
                }
                alt={'play store'}
                sx={{ filter: 'brightness(0) invert(1)' }}
                width={{ xs: 15, md: 20 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Download;
