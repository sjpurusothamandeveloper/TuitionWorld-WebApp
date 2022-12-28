import { React, useState } from 'react';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Grid, Button, MenuItem,
  InputLabel,
  Select, FormControl, TextField, styled, Typography, Card
} from '@mui/material';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";




const AdditionForm = (props) => {

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

              <Typography><Typography variant='h6'>Basic Details</Typography>  </Typography>

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
                    render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="Mobile Number" variant="outlined" />)}
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
                    render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="Email ID" variant="outlined" />)}
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="Empid"
                    rules={{
                      required: false,
                    }}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField fullWidth id="outlined-basic"  {...field} label="Employee ID  
" required variant="outlined" />)}
                  /></Grid>

                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <Controller
                    control={control}
                    name="firstName"
                    rules={{
                      required: true,
                    }}
                    defaultValue=""
                    render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="First Name" variant="outlined" />)}
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
                    render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
                    )}
                  /> </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} > <Controller
                  control={control}
                  name="birthDate"
                  rules={{
                    required: false,
                  }}
                  defaultValue=""
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
                    rules={{
                      required: false,
                    }}
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
                    rules={{
                      required: false,
                    }}
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
                    rules={{
                      required: false,
                    }}
                    defaultValue=""
                    render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="Address" variant="outlined" />)}
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
                    render={({ field }) => (<TextField  {...field} fullWidth id="outlined-basic" label="City" variant="outlined" />)}
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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Job Title"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="designation"
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
              name="department"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Department"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="emp-type"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Employment Type"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="appointmentDate"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Appointed"
        {...field}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> )}
              />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="experience"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Experience in Yrs"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="highestQualification"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Highest Qualification"  variant="outlined" />)}
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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Aadhar Number"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="panNumber"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="PAN Number"  variant="outlined" />)}
/>
                 
                </Grid>
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
              name="maritual-status"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (
                <FormControl  fullWidth>
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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Spouse Name"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="emergencyContact"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Emergency Contact No"  variant="outlined" />)}
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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Institute Name"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="jobtitle"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Job Title"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="joiningDate"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Joined"
        {...field}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> )} />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="releivedDate"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Releiving Date"
        {...field}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> )} />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="workLocation"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Location"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="referenceName"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Reference Name"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="referenceMobileNo"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Reference Mobile Number"  variant="outlined" />)}
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
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Bank Name"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="bankAccountNumber"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Bank Account Number"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="ifsc-code"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="IFSC Code"  variant="outlined" />)}
/>
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                <Controller
              control={control}
              name="accountHolderName"
              rules={{
                required: false,
              }}
              defaultValue=""
              render={({ field }) => (<TextField    {...field} fullWidth id="outlined-basic" label="Account Holder's Name"  variant="outlined" />)}
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


          </Grid></form ></Card>
    </div>
  );

};

export default AdditionForm