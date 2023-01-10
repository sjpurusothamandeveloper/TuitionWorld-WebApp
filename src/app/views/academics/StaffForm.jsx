import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Grid, Button, MenuItem,
  InputLabel,
  Select, FormControl, TextField, styled, Typography, Card, Tabs, Tab, Box, AppBar,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow
} from '@mui/material';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from 'react-router-dom';
import '../academics/index.css';
import { teacherslist } from './Constants';
const dateTday = new Date();


const SpaceBetwwenDiv = styled(`div`)(() => ({
  width: '100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between' ,
  alignItems:'center'
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

const AdditionForm = (props) => {


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  
  const submitStaff = (staffData) => {
    console.log("submitStaff", staffData);
  }

  return (
    <div>
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
              <Tab label="Teacher Directory" {...a11yProps(1)} />
              <Tab label="Add Teacher" {...a11yProps(0)} />
            </Tabs>
          </AppBar>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container rowSpacing={2} direction="column"  justifyContent="center">
          {teacherslist.map((teacher)=>
         <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
             <Card className='padding-15'>
       <SpaceBetwwenDiv><Typography variant='subtitle2' component='p'>{teacher.name}</Typography><Button >Assign</Button></SpaceBetwwenDiv>
       <Typography variant='body2' component='p'>{teacher.email}</Typography></Card></Grid>)}</Grid>
       
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card style={{ padding: "15px" }}>
            <br />
            <Typography variant='h5' align='center'><b>Add Staff</b></Typography>
            <form>
              <Grid
                container
                direction="row"
                rowSpacing={2}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                  <Typography>
                    <Typography variant='h6'>Basic Details</Typography>
                  </Typography>
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
                        name="Empid"
                        defaultValue=""
                        render={({ field }) => (
                          <TextField fullWidth id="outlined-basic"  {...field} label="Employee ID" required variant="outlined" />)}
                      /></Grid>

                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="firstName"
                        defaultValue=""
                        render={({ field }) => (<TextField  required  {...field} fullWidth id="outlined-basic" label="First Name" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="lastName"
                        defaultValue=""
                        render={({ field }) => (<TextField  required  {...field} fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
                        )}
                      /> </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} > <Controller
                      control={control}
                      name="birthDate"
                      defaultValue={dateTday}
                      render={({ field }) => (<LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date of Birth"
                          {...field}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>)} />
                    </Grid>
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
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="bloodgroup"

                        defaultValue=""
                        render={({ field }) => (
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Blood Group
                            </InputLabel>
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              variant="outlined"
                              label="Blood Group"
                            >
                              <MenuItem value="A+" >A+</MenuItem>
                              <MenuItem value="A-" >A-</MenuItem>
                              <MenuItem value="B+" >B+</MenuItem>
                              <MenuItem value="B-" >B+</MenuItem>
                              <MenuItem value="AB+" >AB+</MenuItem>
                              <MenuItem value="AB-" >AB-</MenuItem>
                              <MenuItem value="O+" >O+</MenuItem>
                              <MenuItem value="O-" >O-</MenuItem>

                            </Select>
                          </FormControl>
                        )}
                      />
                    </Grid>

                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

                  <Typography variant='h6'>Address Details</Typography>

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
                        name="address"

                        defaultValue=""
                        render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="Address" variant="outlined" />)}
                      />
                    </Grid>

                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="city"

                        defaultValue=""
                        render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="City" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="pinCode"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Pin Code" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="state"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="State" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="country"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Country" variant="outlined" />)}
                      />
                    </Grid>

                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

                  <Typography variant='h6'>Employment Details</Typography>

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
                        name="jobtitle"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Job Title" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="designation"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Designation" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="department"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Department" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="emp-type"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Employment Type" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="appointmentDate"

                        defaultValue={dateTday}
                        render={({ field }) => (<LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Date of Appointed"
                            {...field}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="experience"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Experience in Yrs" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="highestQualification"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Highest Qualification" variant="outlined" />)}
                      />
                    </Grid>

                  </Grid>
                </Grid>


                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

                  <Typography variant='h6'>Additional Details</Typography>

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
                        name="aadharNumber"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Aadhar Number" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="panNumber"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="PAN Number" variant="outlined" />)}
                      />

                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="religion"

                        defaultValue=""
                        render={({ field }) => (
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Religion
                            </InputLabel>
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              variant="outlined"
                              label="Religion"
                            >
                              <MenuItem value="Hindu">Hindu</MenuItem>
                              <MenuItem value="Christian">Christian</MenuItem>
                              <MenuItem value="Islam">Islam</MenuItem>
                              <MenuItem value="Others">Others</MenuItem>
                            </Select>
                          </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="category"

                        defaultValue=""
                        render={({ field }) => (
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Category
                            </InputLabel>
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              variant="outlined"
                              label="Category"
                            >
                              <MenuItem value="OBC" >OBC</MenuItem>
                              <MenuItem value="ST/Sc" >ST/Sc</MenuItem>
                              <MenuItem value="MBC" >MBC</MenuItem>
                              <MenuItem value="Others" >Others</MenuItem>
                            </Select>
                          </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="fatherName"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Father Name" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="motherName"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Mother Name" variant="outlined" />)}
                      />
                    </Grid>

                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="maritual-status"

                        defaultValue=""
                        render={({ field }) => (
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Maritual Status
                            </InputLabel>
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              variant="outlined"
                              label="Maritual Status"
                            >
                              <MenuItem value="Yes">Yes</MenuItem>
                              <MenuItem value="No">No</MenuItem>

                            </Select>
                          </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="spouseName"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Spouse Name" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="emergencyContact"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Emergency Contact No" variant="outlined" />)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                  <Typography variant='h6'>Previous Experience</Typography>
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
                        name="instituteName"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Institute Name" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="jobtitle"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Job Title" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="joiningDate"

                        defaultValue={dateTday}
                        render={({ field }) => (<LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Date of Joined"
                            {...field}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>)} />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="releivedDate"

                        defaultValue={dateTday}
                        render={({ field }) => (<LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Releiving Date"
                            {...field}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>)} />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="workLocation"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Location" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="referenceName"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Reference Name" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="referenceMobileNo"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Reference Mobile Number" variant="outlined" />)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                  <Typography variant='h6'>Bank Details</Typography>
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
                        name="bankName"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Bank Name" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="bankAccountNumber"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Bank Account Number" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="ifsc-code"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="IFSC Code" variant="outlined" />)} />
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                      <Controller
                        control={control}
                        name="accountHolderName"

                        defaultValue=""
                        render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Account Holder's Name" variant="outlined" />)}
                      />
                    </Grid>
                    <Grid item xs={10} sm={5} md={3} lg={2} xl={2} >
                      <Button onClick={handleSubmit(submitStaff)} fullWidth variant='contained' color='warning'>Submit</Button>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3} lg={2} xl={2} >
                      <Button fullWidth variant='contained' color='inherit'>Cancel</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form >
          </Card>
        </TabPanel>
      </Box>

    </div>
  );

};

export default AdditionForm