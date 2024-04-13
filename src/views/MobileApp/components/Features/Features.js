import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 25,
    subtitle: 'Millions USD Stolen Using Deepfakes',
    suffix: '+',
  },
  {
    title: 550,
    subtitle: '% from the rising of deepfakes afer 2019',
    suffix: '+',
  },
];

const Features = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              The Need for Enhanced Security
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <Typography variant="h2" color={'primary'} gutterBottom>
                    <Box fontWeight={1000}>
                      <VisibilitySensor
                        onChange={(isVisible) =>
                          setViewPortVisibility(isVisible)
                        }
                        delayedCall
                      >
                        <CountUp
                          duration={2}
                          end={viewPortEntered ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </VisibilitySensor>
                    </Box>
                  </Typography>
                  <Typography component="h5">{item.subtitle}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box height={1} width={1} maxHeight={800}>
            <Box
              component={'img'}
              loading="lazy"
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/svg/illustrations/illustration1.svg'
                  : 'https://assets.maccarianagency.com/svg/illustrations/illustration1--dark.svg'
              }
              height={{ xs: 'auto', md: 1 }}
              maxHeight={{ xs: 300, md: 1 }}
              width={1}
              maxWidth={1}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
