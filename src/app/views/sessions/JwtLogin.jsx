// import { Google } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, Card, Checkbox, Grid, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import { GoogleLogin } from 'react-google-login';
import { getUserAuth } from 'app/services/AppService';
import { useSnackbar } from 'notistack';
import jwt from "jwt-simple";
import jwt_decode from "jwt-decode";

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  email: '',
  password: '',
  remember: false,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  // const { login } = useAuth();

  const handleresponseGoogle = (response) => {
    var userObj = jwt_decode(response.credential)
    sessionStorage.setItem("googleUserObj", response.credential)
    if(userObj){
      navigate('/dashboard/default')
    }
    else{
      navigate('/session/signin')
    }
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "983869947959-6lsgr8ur9sfeoh9kdise23dn04n5vdgv.apps.googleusercontent.com",
      callback: handleresponseGoogle
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"), {
        theme: "outline", size: "large"
      }
    )
  },[])



  const handleFormSubmit = async (values) => {
    try {
      setLoading(true);
      const responseFromApi = await getUserAuth(values)
      console.log("resp", responseFromApi)
      if (responseFromApi && responseFromApi.statusCode === 200) {
        setLoading(false)
        handleToastMessage(true, responseFromApi.message)
        var payload = { userData: responseFromApi.data };
        var secret = 'TU!tI0nW0R1d';
        var token = jwt.encode(payload, secret);
        sessionStorage.setItem('twSampleData', token)
        navigate('/dashboard/default');
      }
      else{
        handleToastMessage(false, responseFromApi.message)
        setLoading(false)
        navigate('/session/signin');
      }
    } catch (e) {
      handleToastMessage(false)
      setLoading(false);
      navigate('/session/signin');
    }
  };

  const handleToastMessage = (typeOfMsg, msg) => {
    const failureMessage = 'Something went wrong :(';

    enqueueSnackbar(msg ? msg : failureMessage, {
      variant: typeOfMsg ? "success" : "error",
      persist: false,
      autoHideDuration: 2000
    });
  }

  const handleLogout = (response) => {
    console.log(response);
  }

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img src="/assets/images/illustrations/dreamer.svg" width="100%" alt="" />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    />

                    <FlexBox justifyContent="space-between">
                      <FlexBox gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          onChange={handleChange}
                          checked={values.remember}
                          sx={{ padding: 0 }}
                        />

                        <Paragraph>Remember Me</Paragraph>
                      </FlexBox>

                      <NavLink
                        to="/session/forgot-password"
                        style={{ color: theme.palette.primary.main }}
                      >
                        Forgot password?
                      </NavLink>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      Login
                    </LoadingButton>
                    <div id="signInDiv"></div>
                    <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="/session/signup"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Register
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default JwtLogin;
