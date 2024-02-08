import React from 'react';
import { TextField, Button, Typography, Container, Box, Grid } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import { useForm } from 'react-hook-form';

function AuthLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <Box>
      <Container
        sx={{
          background: 'linear-gradient(to right, #fuchsia-300, #sky-500)',
          height: '40%',
          maxWidth: '100%',
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/free/bg.png')"
        }}
      >
        <Box
          sx={{
            backgroundImage: "url('/free/logo1.svg')",
            width: '50px',
            height: '50px',
            m: '5% auto 0'
          }}
        ></Box>
        <Box
          sx={{
            backgroundImage: "url('/free/logo2.svg')",
            width: '150px',
            height: '30px',
            m: '1% auto 0'
          }}
        ></Box>
        <Typography
          variant="subtitle1"
          align="center"
          style={{
            color: 'white',
            fontSize: '10px',
            margin: '4px auto 0'
          }}
        >
          Vincent Client Login
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
                <img style={{ height: '50px', width: '50px' }} src="/free/login_encrypted.svg" alt="" />
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
                <Button
                  style={{
                    marginTop: '1rem',
                    borderRadius: '0.25rem',
                    background: 'linear-gradient(to right, #gray-400, #gray-600)',
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
            Vincent @2024
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AuthLogin;
