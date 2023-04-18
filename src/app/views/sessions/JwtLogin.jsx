import { Google } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import jwt from "jwt-simple";
import jwt_decode from "jwt-decode";
import { reStructureAllClassPayload } from 'app/redux/payload/acadamics.payload';

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
  email: 'jason@ui-lib.com',
  password: 'dummyPass',
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Password must be 2 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { login } = useAuth();


  // useEffect(() => {
  //   //Global Google
  //   google.accounts.id.initialize({
  //     client_id: "333302395939-90eii6bjop7bnq02sfvsp8t7ndc76kef.apps.googleusercontent.com",
  //     callback: responseGoogle
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"), {
  //       theme: "outline", size: "large"
  //     }
  //   )
  // },[])

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      let userObj = await login(values.email, values.password);
      console.log("UserObj", userObj)
      // sessionStorage.setItem("googleUserObj", response.credential)
      if (userObj?.data?.statusCode === 200 && userObj?.data?.message === "Login Successful") {
        setLoading(false);
        handleToastMessage(true, userObj?.data?.message)
        var payload = { userData: userObj?.data };
        var secret = 'TU!tI0nW0R1d';
        var token = jwt.encode(payload, secret);
        sessionStorage.clear();
        sessionStorage.setItem('twSampleData', token)
        sessionStorage.setItem('userId', userObj?.data?.data?._id)
        navigate('/dashboard/default')
      }
      else {
        setLoading(false);
        handleToastMessage(false, userObj?.data?.message)
        navigate('/session/signin')
      }
    } catch (e) {
      setLoading(false);
      handleToastMessage(false)
      navigate('/session/signin')
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
                    {/* <GoogleLogin
                      clientId="333302395939-90eii6bjop7bnq02sfvsp8t7ndc76kef.apps.googleusercontent.com"
                      buttonText="Sign in with Google "
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    /> */}

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