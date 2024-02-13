import { Grid } from '@mui/material';
import AuthLogin from './auth-forms/AuthLogin';

const Login = () => (
  <>
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={10} sm={6} md={4}>
        <AuthLogin />
      </Grid>
    </Grid>
  </>
);

export default Login;
