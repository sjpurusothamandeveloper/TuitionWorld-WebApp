import { React, useState } from 'react';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Grid, Box, Select,
  MenuItem,
  InputLabel,
  FormControl, Button, TextField, styled, Typography, Card, Collapse, IconButton
} from '@mui/material';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const dateTday = new Date();


const EnquiryForm = (props) => {

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const submitEnqury = (EnquryData) => {
    console.log("submitEnqury", EnquryData);
  }
  return (
    <div>
      <Card style={{ padding: "15px" }}>
        <br />
        <Typography variant='h5' align='center'><b>Add Enquiry</b></Typography>
        <form>
          <Grid
            container
            direction="row"
            rowSpacing={2}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

              <Typography marginBottom={1} variant='h6'>Basic Details</Typography>

              <Grid container
                direction="row"
                rowSpacing={2}
                columnSpacing={2}
                justifyContent="flex-start"
                alignItems="center"
              >
                 <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="fullName"
                    defaultValue=""
                    render={({ field }) => (<TextField  required  {...field} fullWidth id="outlined-basic" label="Full Name" variant="outlined" />)}
                  />
                </Grid>
                
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="mobileNumber"

                    defaultValue=""
                    render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="Mobile Number" variant="outlined" />)}
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="Emailid"
                    defaultValue=""
                    render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="Email ID" variant="outlined" />)}
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="birthDate"
                    defaultValue={dateTday}
                    render={({ field }) => (<LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date of Birth"
                        {...field}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                      />
                    </LocalizationProvider>)} /></Grid>
                
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="gender"

                    defaultValue=""
                    render={({ field }) => (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Gender
                        </InputLabel>
                        <Select
                          {...field}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          variant="outlined"
                          label="Gender"
                        >
                          <MenuItem value="Male" >Male</MenuItem>
                          <MenuItem value="Female" >Female</MenuItem>
                          <MenuItem value="Others" >Others</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>
                
              </Grid>
            </Grid>
  
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

              <Typography marginBottom={1} variant='h6'>Previous School Details</Typography>

              <Grid container
                direction="row"
                rowSpacing={2}
                columnSpacing={2}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="schoolName"

                    defaultValue=""
                    render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="School Name" variant="outlined" />)}
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="schoolAddress"

                    defaultValue=""
                    render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="School Address" variant="outlined" />)}
                  />

                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="board"

                    defaultValue=""
                    render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Board" variant="outlined" />)}
                  />

                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
                    control={control}
                    name="medium"
                   
                    defaultValue=""
                    render={({ field }) => (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Medium
                        </InputLabel>
                        <Select
                          {...field}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          variant="outlined"
                          label="Medium"
                        >
                          <MenuItem value="Tamil" >Tamil</MenuItem>
                          <MenuItem value="English" >English</MenuItem>
                         
                        </Select>
                      </FormControl>
                    )}
                  />

                </Grid>
               
                
               
                
                <Grid item xs={10} sm={5} md={3} lg={2} xl={2} >

                  <Button onClick={handleSubmit(submitEnqury)} fullWidth variant='contained' color='warning'>Submit</Button>
                </Grid>
                <Grid item xs={10} sm={5} md={3} lg={2} xl={2} >

                  <Button fullWidth variant='contained' color='inherit'>Cancel</Button>
                </Grid>

              </Grid>
            </Grid>


          </Grid></form ></Card>
    </div>
  );

};

export default EnquiryForm