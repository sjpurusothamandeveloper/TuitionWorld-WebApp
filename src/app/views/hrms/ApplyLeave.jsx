import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Box, styled, Paper,
  Button, TextField, Typography, Card, AppBar, Tabs, Tab
} from '@mui/material';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./index.css";
import { useSnackbar } from 'notistack';
import { saveLeave, getLeaves } from 'app/services/AppService.js';
import { teacherslist } from '../academics/Constants';

const dateTday = new Date();
const dateNextday = dateTday + 1;

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF'
}));

const SpaceBetwwenDiv = styled(`div`)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const ProfileCard = styled(Card)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: '20px',
  alignItems: 'flex-start',
  minHeight: '140px',
  padding: '20px'

}));

const LeaveCard = styled(Card)(() => ({
  width: '100%',
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
  alignItems: 'center',
  height: '150px',
  padding: '20px'

}));

const JustifyBox = styled(FlexBox)(() => ({
  maxWidth: 320,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start'
}));

const IMG = styled('img')(() => ({
  width: '100%',
  marginBottom: '32px',
}));

const NotFoundRoot = styled(FlexBox)(() => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh !important',
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const ApplyLeave = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setisLoading] = useState(false)
  const [leaveList, setLeaveList] = useState([])
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const handleReset = () => {
    reset();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 1) {
      handleGetLeaveList()
    }
  };

  const submitLeave = async (leaveData) => {
    console.log(leaveData)
    setisLoading(true)
    try {
      const responseFromApi = await saveLeave(leaveData)
      console.log("resp", responseFromApi)
      if (responseFromApi && responseFromApi.statusCode === 200) {
        setisLoading(false)
        handleToastMessage(true, responseFromApi.message)
        reset()
      }
      else {
        setisLoading(false)
        handleToastMessage(false, responseFromApi.message)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleToastMessage = (typeOfMsg, msg) => {
    const failureMessage = 'Something went wrong :(';

    enqueueSnackbar(msg ? msg : failureMessage, {
      variant: typeOfMsg ? "success" : "error",
      persist: false,
      autoHideDuration: 2000
    });
  }

  useEffect(() => {
    handleGetLeaveList()
  }, [])

  const handleGetLeaveList = async () => {
    try {
      const responseFromApi = await getLeaves()
      console.log("getCall", responseFromApi)
      if (responseFromApi && responseFromApi.statusCode === 200) {
        if (responseFromApi.data && responseFromApi.data.length > 0) {
          setLeaveList(responseFromApi.data)
        }
        else {
          setLeaveList([])
        }
      }

    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <React.Fragment>

      <Box sx={{ width: '100%' }}>

        <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>

          <AppBar className="appbar" position="static">
            <Tabs centered
              value={value}
              onChange={handleChange}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Apply Leave" {...a11yProps(1)} />
              <Tab label="Manage Leave" {...a11yProps(0)} />
            </Tabs>
          </AppBar>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container justifyContent="center" >

            <Grid item md={12} lg={12} xl={12}>
              <Paper className='apply-form-paper'>
                <form >
                  <Grid container columnSpacing={2} rowSpacing={2} direction='row' justifyContent="space-between" alignItems="center">

                    <Grid item md={12} lg={12} xl={12} >
                      <Controller
                        control={control}
                        name="designation"
                        defaultValue=""
                        render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="Designation" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item md={6} lg={6} xl={6} >
                      <Controller
                        control={control}
                        name="workEmail"
                        defaultValue=""
                        render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="Work Email" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item md={6} lg={6} xl={6} >
                      <Controller
                        control={control}
                        name="noOfLeaves"
                        defaultValue=""
                        render={({ field }) => (<TextField type="number" InputProps={{ inputProps: { min: 0, max: 10 } }} {...field} fullWidth id="outlined-basic" label="No of Leaves Required" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item md={6} lg={6} xl={6} >
                      <Controller
                        control={control}
                        name="leaveStartDate"
                        defaultValue={dateTday}
                        render={({ field }) => (<LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker minDate={dateTday}
                            label="Start Date"
                            {...field}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                        </LocalizationProvider>)} />
                    </Grid>
                    <Grid item md={6} lg={6} xl={6} >
                      <Controller
                        control={control}
                        name="leaveEndDate"
                        defaultValue={dateNextday}
                        render={({ field }) => (<LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker minDate={dateNextday}
                            label="End Date"
                            {...field}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                        </LocalizationProvider>)} />
                    </Grid>
                    <Grid item md={12} lg={12} xl={12} >
                      <Controller
                        control={control}
                        name="reasonForLeave"
                        defaultValue=""
                        render={({ field }) => (<TextField multiline rows={4} {...field} fullWidth id="outlined-basic" label="Reason For Leave" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid align="right" item md={12} lg={12} xl={12} >
                      <Button className='submission-button' style={{ "backgroundColor": "#ed6c02", "color": "white" }} disableRipple={true} onClick={handleSubmit(submitLeave)}>Submit</Button>&emsp;
                      <Button color="warning" variant="outlined" onClick={handleReset}>Reset</Button>
                    </Grid>
                  </Grid></form></Paper></Grid>
          </Grid></TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container rowSpacing={2} direction="column" justifyContent="center">
            {leaveList.map((empLeaveObj) =>
              <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <Card className='padding-15'>
                  <SpaceBetwwenDiv>
                    <Typography variant='subtitle2' component='p'>{empLeaveObj.reasonForLeave}</Typography>
                  </SpaceBetwwenDiv>
                  <Typography variant='subtitle2' component='p'>{`From: `}{empLeaveObj.leaveStartDate} {`to `}{empLeaveObj.leaveEndDate}</Typography>

                  {/* <Typography variant='body2' component='p'>{teacher.emailId}</Typography> */}
                </Card>
              </Grid>
            )}
          </Grid>
        </TabPanel>
      </Box>
    </React.Fragment>
  );
};

export default ApplyLeave;
