import { React, useState } from 'react';
import { TextField, Button, Typography, Container, Box, Grid, Select, MenuItem, InputLabel } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTimezoneSelect, allTimezones } from 'react-timezone-select';
import { useDispatch } from 'react-redux';
import { adminDetails } from 'store/reducers/menu';

function AuthLogin() {
  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const timezones = {
    ...allTimezones
    // Add timezones like below given example
    // 'Europe/Berlin': 'Frankfurt'
  };
  const { options, parseTimezone } = useTimezoneSelect({ timezones, displayValue: 'UTC' });
  const [timezone, setTimezone] = useState(options[0].value);

  const handleTimezone = (e) => {
    setTimezone(e.target.value);
    parseTimezone(e.target.value);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}admin/login`, data, {
        withCredentials: true
      });
      if (response.status === 200) {
        dispatch(adminDetails({ adminDetails: { name: response?.data?.data?.AdminNickName, site: response?.data?.data?.SiteID } }));
        navigate('/');
      }
    } catch (error) {
      reset();
      setError('username', {
        message: 'Invalid credentials.'
      });
      setError('password', {
        message: 'Invalid credentials.'
      });
    }
  };

  return (
    <Box>
      <Container
        sx={{
          height: '40%',
          maxWidth: '100% !important',
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* <Box
          sx={{
            backgroundImage: "url('/logo1.svg')",
            width: '50px',
            height: '50px',
            m: '5% auto 0'
          }}
        ></Box> */}
        {/* <Box
          sx={{
            backgroundImage: "url('/logo2.svg')",
            width: '150px',
            height: '30px',
            m: '1% auto 0'
          }}
        ></Box> */}
        <Typography
          variant="subtitle1"
          align="center"
          style={{
            color: 'white',
            fontSize: '1.5rem',
            margin: '44px auto 0'
          }}
        >
          InsightAdmin
        </Typography>
      </Container>
      <Container
        id="login"
        style={{
          position: 'relative',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          maxWidth: 'sm',
          zIndex: 10
        }}
      >
        <Box
          style={{
            padding: '1.5rem',
            background: 'white',
            borderRadius: '0.75rem',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '3px auto 12px'
                }}
              >
                <img style={{ height: '50px', width: '50px' }} src="/login_encrypted.svg" alt="" />
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 500 }}>Welcome</Typography>
                <Typography sx={{ fontSize: '1rem' }}>Testing Only! Use any credentials.</Typography>
              </Box>
            </Grid>
            <Grid item>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  justifyContent: 'center'
                }}
              >
                <TextField
                  id="username"
                  name="username"
                  {...register('username', {
                    required: 'Username is required.'
                  })}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  label="Username"
                  variant="outlined"
                  size="small"
                  style={{ background: 'white' }}
                />
                <TextField
                  id="password"
                  name="password"
                  {...register('password', {
                    required: 'Password is required.'
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  label="Password"
                  variant="outlined"
                  type="password"
                  size="small"
                  style={{ background: 'white' }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <InputLabel sx={{ width: '10%' }} id="timezone">
                    UTC
                  </InputLabel>
                  <Select
                    labelId="timezone"
                    value={timezone}
                    {...register('timezone')}
                    size="small"
                    onChange={handleTimezone}
                    id="timezone-select"
                    name="timezone"
                    sx={{ width: '90%' }}
                  >
                    {options.map((option) => (
                      <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                  </Select>
                </Box>
                <Button
                  style={{
                    marginTop: '1rem',
                    borderRadius: '0.25rem',
                    backgroundImage: 'linear-gradient(to right, #656D78, #434A54)',
                    color: 'white'
                  }}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </form>
            </Grid>
            <Grid item>
              <Box
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center'
                }}
              >
                <ReactCountryFlag
                  countryCode="KR"
                  style={{ height: '2em', width: '2em', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}
                  svg
                />
                <ReactCountryFlag
                  countryCode="US"
                  style={{ height: '2em', width: '2em', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}
                  svg
                />
                <ReactCountryFlag
                  countryCode="CN"
                  style={{ height: '2em', width: '2em', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}
                  svg
                />
                <ReactCountryFlag
                  countryCode="JP"
                  style={{ height: '2em', width: '2em', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}
                  svg
                />
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" align="center" style={{ color: '#888888', fontSize: '0.75rem', marginTop: '1rem' }}>
            InsightAdmin @2024
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AuthLogin;
