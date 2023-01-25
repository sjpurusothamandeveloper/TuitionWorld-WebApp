import React, { useState, useEffect } from 'react';
import {
  Grid, Box, styled, Paper,
   Button, TextField, Typography, Card
} from '@mui/material';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./index.css";
import { useSnackbar } from 'notistack';
import { saveLeave } from 'app/services/AppService.js';

const dateTday = new Date();
const dateNextday = dateTday + 1;

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF'
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

const ApplyLeave = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setisLoading] = useState(false)
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const handleReset = () => {
    reset();
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

  return (
    <React.Fragment>
      <Grid container justifyContent="center" >

        <Grid item md={12} lg={12} xl={12}>
          <Paper className='apply-form-paper'>
            <form >
              <Grid container columnSpacing={2} rowSpacing={2} direction='row' justifyContent="space-between" alignItems="center">
                <Grid item md={12} lg={12} xl={12} ><Typography variant="h5" align="center"><strong>Apply for Leave</strong></Typography></Grid>
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
      </Grid>
    </React.Fragment>
  );
};

export default ApplyLeave;
