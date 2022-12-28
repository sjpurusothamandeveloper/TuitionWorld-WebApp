import { React, useState } from 'react';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Grid, Box, Select,
  MenuItem,
  InputLabel, 
  FormControl, Button, TextField, styled, Typography, Card, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";



const StudentAdditionForm = (props) => {
  
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const submitStudent = (studentData) => {
    console.log("submitStudent", studentData);
  }
  return (
    <div>
      <Card style={{ padding: "15px" }}>
        <br />
        <Typography variant='h5' align='center'><b>Add Student</b></Typography>
        <form>
          <Grid
            container
            direction="row"
            rowSpacing={2}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

              <Typography variant='h6'>Basic Details</Typography>

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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (  <TextField  {...field} fullWidth id="outlined-basic" label="Mobile Number" variant="outlined" />   )}
              />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="Emailid"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (  <TextField  {...field} fullWidth id="outlined-basic" label="Email ID" variant="outlined" /> )}
              />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="Enroleid"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                  <TextField fullWidth id="outlined-basic"  {...field} label="Enrole ID  
" required variant="outlined" /> )}
/></Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="firstName"
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="First Name"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="lasstName"
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({ field }) => (  <TextField    {...field}  fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
              )}
              /> </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="admissionDate"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Admission"
        {...field}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> )}
              /></Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="birthDate"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Birth"
        {...field}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> )} /></Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Roll No" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="gender"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Address"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="city"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="City"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="pinCode"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Pin Code"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="state"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="State"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="country"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Country"  variant="outlined" />)}
/>
                </Grid>

              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

              <Typography variant='h6'>Father Details</Typography>

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
              name="fatherName"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Father Name"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="fatherMobile"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Mobile Number"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="fatheremail"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Email"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="fatherOccupation"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Occupation"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="fatherOrganization"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Organization"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="fatherDesignation"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Designation"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="fatherExperience"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Experience(in Years)"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="fatherQualification"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Highest Qualification"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="fatherIncome"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Annual Income"  variant="outlined" />)}
/>
                </Grid>

              </Grid>
            </Grid>


            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

              <Typography variant='h6'>Mother Details</Typography>

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
              name="motherName"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Mother Name"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="motherMobile"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Mobile Number"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="motheremail"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Email"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="motherOccupation"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Occupation"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="motherOrganization"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Organization"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="motherDesignation"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Designation"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="motherExperience"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Experience(in Years)"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="motherQualification"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Highest Qualification"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="motherIncome"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Annual Income"  variant="outlined" />)}
/>
                </Grid>

              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

<Typography variant='h6'>Guardian Details</Typography>

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
              name="guardianName"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Guardian Name"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="guardianMobile"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Mobile Number"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="guardianemail"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Email"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="guardianOccupation"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Occupation"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="guardianOrganization"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Organization"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="guardianDesignation"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Designation"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="guardianExperience"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Experience(in Years)"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="guardianQualification"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Highest Qualification"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="guardianIncome"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Annual Income"  variant="outlined" />)}
/>
                </Grid>

              </Grid>
</Grid>


<Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

<Typography variant='h6'>Parents Bank Details</Typography>

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
              name="bankname"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Bank Name"  variant="outlined" />)}
/>
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
  <Controller
              control={control}
              name="bankaccNumber"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="Bank Account Number"  variant="outlined" />)}
/>
    
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
  
  <Controller
              control={control}
              name="ifsccode"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field}  fullWidth id="outlined-basic" label="IFSC Code"  variant="outlined" />)}
/>
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
  <Controller
              control={control}
              name="accountholderName"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Account Holder Name"  variant="outlined" />)}
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
              name="religion"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
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
              name="rte"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    RTE
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    label="RTE"
                  >
                    <MenuItem value="Yes">Yes</MenuItem> 
                  <MenuItem value="No">No</MenuItem>
                 
                  </Select>
                </FormControl>
              )}
            />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Nationality" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="bplStudent"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    BPL Student
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    label="BPL Student"
                  >
                   <MenuItem value="Yes">Yes</MenuItem> 
                  <MenuItem value="No">No</MenuItem>
                 
                  </Select>
                </FormControl>
              )}
            />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="BPL Card No." variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="PwD"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Person with Disability (PwD)
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    label="Person with Disability (PwD)"
                  >
                    <MenuItem value="Yes">Yes</MenuItem> 
                  <MenuItem value="No">No</MenuItem>
                 
                  </Select>
                </FormControl>
              )}
            />
                 
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Type of Disability
" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Identification Mark" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Mother Tongue" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Second Language" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Emergency Contact Number" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="singleParentY/N"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Single Parent
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    label="Single Parent"
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
              name="singleParent"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Single Parent
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    label="Single Parent"
                  >
                  <MenuItem value="Male">Male</MenuItem> 
                  <MenuItem value="Female">Female</MenuItem>
                 
                  </Select>
                </FormControl>
              )}
            />
                 
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="sponsorStudent"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Sponsored Student
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    label="Sponsored Student"
                  >
                  <MenuItem value="Yes" >Yes</MenuItem> 
                  <MenuItem value="No">No</MenuItem>
                 
                  </Select>
                </FormControl>
              )}
            />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Sponser Name" variant="outlined" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

              <Typography variant='h6'>Medical Records</Typography>

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
              name="weight"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Weight In Kg"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="height"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Height in cm"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="bmi"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="BMI"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="pulseRate"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Pulse Rate"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="hemoglobin"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Hemoglobin hp"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="allergies"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Allergies"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="covidVaccination"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Covid Vaccination
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    label="Covid Vaccination"
                  >
                  <MenuItem value="single">Single</MenuItem> 
                  <MenuItem value="both">Both</MenuItem>
                  <MenuItem value="none">None</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >

                <Controller
                 name="childImmunisation"
                 control={control}
          render={({ field }) => (
            <FormControl  fullWidth>
            <InputLabel id="demo-simple-select-label">
              Child Immunisation
            </InputLabel>
            <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    label="Child Immunisation" {...field}>
              <MenuItem value={"yes"}>Yes</MenuItem>
              <MenuItem value={"no"}>No</MenuItem>
             
            </Select>  </FormControl>
          )}
         
        />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="immunisationRemarks"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Immunisation Remarks"  variant="outlined" />)}
/>
                </Grid>

              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >

<Typography variant='h6'>Previous School Details</Typography>

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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="School Name"  variant="outlined" />)}
/>
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
  <Controller
              control={control}
              name="schoolAddress"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="School Address"  variant="outlined" />)}
/>
   
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
  <Controller
              control={control}
              name="board"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="board"  variant="outlined" />)}
/>
  
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
  <Controller
              control={control}
              name="medium"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Medium of Instruction"  variant="outlined" />)}
/>
   
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
  <Controller
              control={control}
              name="tcNumber"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="TC Number"  variant="outlined" />)}
/>
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
  <Controller
              control={control}
              name="lastclsPassed"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Last Class Passed"  variant="outlined" />)}
/>
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
  <Controller
              control={control}
              name="percentage/grade"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Percentage / Grade"  variant="outlined" />)}
/>
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
   
  </Grid>
  <Grid item xs={10} sm={5} md={3} lg={2} xl={2} >

    <Button   onClick={handleSubmit(submitStudent)} fullWidth variant='contained' color='warning'>Submit</Button>
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

export default StudentAdditionForm