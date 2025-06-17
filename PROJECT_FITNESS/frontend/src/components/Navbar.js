import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../App';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const userInfo = useContext(userContext);
  const navigate = useNavigate();

  const onLogoutFun = () => {
    props.handleLogin('', false);
    navigate('/');
    console.log('Logged out successfully');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        px: '20px',
        py: '10px',
        borderRadius: '12px', // Add rounded edges here
        mx: '0px', // Add horizontal margin for better layout
        mt: '10px', // Add margin-top to separate from top
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%' }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography
            variant="h4"
            sx={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              borderBottom: '3px solid red', // Keep the red underline
            }}
          >
            FitnessPro
          </Typography>
        </Link>

        {/* Navigation Links */}
        <Stack
          direction="row"
          spacing={4}
          fontSize="18px"
          alignItems="center"
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: '#FFFFFF',
              borderBottom: '3px solid transparent',
            }}
            onMouseOver={(e) => (e.target.style.borderBottomColor = '#FF2625')}
            onMouseOut={(e) => (e.target.style.borderBottomColor = 'transparent')}
          >
            Home
          </Link>
          <Link
            to="/exercises"
            style={{
              textDecoration: 'none',
              color: '#FFFFFF',
              borderBottom: '3px solid transparent',
            }}
            onMouseOver={(e) => (e.target.style.borderBottomColor = '#FF2625')}
            onMouseOut={(e) => (e.target.style.borderBottomColor = 'transparent')}
          >
            Exercises
          </Link>
          <Link
            to="/dashboard"
            style={{
              textDecoration: 'none',
              color: '#FFFFFF',
              borderBottom: '3px solid transparent',
            }}
            onMouseOver={(e) => (e.target.style.borderBottomColor = '#FF2625')}
            onMouseOut={(e) => (e.target.style.borderBottomColor = 'transparent')}
          >
            Exercises Dashboard
          </Link>
          <Link
            to="/MealDashboard"
            style={{
              textDecoration: 'none',
              color: '#FFFFFF',
              borderBottom: '3px solid transparent',
            }}
            onMouseOver={(e) => (e.target.style.borderBottomColor = '#FF2625')}
            onMouseOut={(e) => (e.target.style.borderBottomColor = 'transparent')}
          >
            Meal Dashboard
          </Link>
          <Link
            to="/bmi"
            style={{
              textDecoration: 'none',
              color: '#FFFFFF',
              borderBottom: '3px solid transparent',
            }}
            onMouseOver={(e) => (e.target.style.borderBottomColor = '#FF2625')}
            onMouseOut={(e) => (e.target.style.borderBottomColor = 'transparent')}
          >
            BMI
          </Link>
          <Link
            to="/ChatModule"
            style={{
              textDecoration: 'none',
              color: '#FFFFFF',
              borderBottom: '3px solid transparent',
            }}
            onMouseOver={(e) => (e.target.style.borderBottomColor = '#FF2625')}
            onMouseOut={(e) => (e.target.style.borderBottomColor = 'transparent')}
          >
            Chat
          </Link>
        </Stack>

        {/* Logout Section */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="h6">{userInfo?.username}</Typography>
          <LogoutIcon
            fontSize="large"
            sx={{
              cursor: 'pointer',
              color: '#FFFFFF',
              '&:hover': { color: '#FF2625' },
            }}
            onClick={onLogoutFun}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
