import React from 'react';
import { Box, Stack, Typography, Grid, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
  <Box
    mt="30px"
    sx={{
      bgcolor: '#000000',
      color: '#FFFFFF',
      py: '20px',
      px: '40px',
      fontSize: '16px',
    }}
  >
    <Grid container spacing={4} justifyContent="center">
      {/* About Section */}
      <Grid item xs={12} sm={4}>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: '10px',
            borderBottom:'3px solid red'
          }}
        >
          About
        </Typography>
        <Typography sx={{ textAlign: 'center' }}>
          Our mission is to help you stay fit and healthy by providing tools and insights for your fitness journey.
        </Typography>
      </Grid>

      {/* Support Section */}
      <Grid item xs={12} sm={4}>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: '10px',
          }}
        >
          Support
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            mt: '10px',
            position: 'relative',
          }}
        >
          {/* Left Column */}
          <Stack spacing={1} sx={{ textAlign: 'center', pr: 2 }}>
            <Typography>Help Center</Typography>
            <Typography>FAQs</Typography>
            <Typography>Contact Us</Typography>
          </Stack>

          {/* Vertical Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: '#FF2625',
              borderWidth: 2,
              height: 'auto',
            }}
          />

          {/* Right Column */}
          <Stack spacing={1} sx={{ textAlign: 'center', pl: 2 }}>
            <Typography>Terms of Service</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Feedback</Typography>
          </Stack>
        </Stack>
      </Grid>

      {/* Follow Us Section */}
      <Grid item xs={12} sm={4}>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: '10px',
            borderBottom:'3px solid red'
          }}
        >
          Follow Us
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <FacebookIcon sx={{ cursor: 'pointer', fontSize: '24px' }} />
          <TwitterIcon sx={{ cursor: 'pointer', fontSize: '24px' }} />
          <InstagramIcon sx={{ cursor: 'pointer', fontSize: '24px' }} />
          <LinkedInIcon sx={{ cursor: 'pointer', fontSize: '24px' }} />
        </Stack>
      </Grid>
    </Grid>
    <Typography
      variant="body2"
      sx={{
        textAlign: 'center',
        mt: '20px',
        fontSize: '14px',
        color: '#AAAAAA',
      }}
    >
      © 2024 FitnessPro. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
