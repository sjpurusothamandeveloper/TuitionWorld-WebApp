import { React, useState } from 'react';
import { Grid, Box, Button, Accordion, AccordionSummary, AccordionDetails, TextField, styled, Typography, Card, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const AdditionForm = (props) => {
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
                  <TextField fullWidth id="outlined-basic" label="Mobile Number" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Email ID" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Employee ID
" required variant="outlined" /></Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} ><TextField fullWidth id="outlined-basic" label="First Name
" required variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Middle Name" variant="outlined" /></Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} ><TextField fullWidth id="outlined-basic" label="Date of Birth" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Gender" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Blood Group
" required variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Address Line 1" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Address Line 2" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="City" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="PinCode" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="State" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Country" variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Job Title" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Designation" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Department" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Employment Type" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Appointment Date" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Experience (Years)" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Highest Qualification" variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Aadhar Number" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="PAN Number" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Religion" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Category" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Father's Name" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Mother's Name" variant="outlined" />
                </Grid>

                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Marital Status" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Spouse Name" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Emergency Contact Number" variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Institute Name" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Job Title" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Joining Date" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Relieving Date" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Location" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Reference Name" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Reference Mobile Number" variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Bank Name" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Bank Account Number" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="IFSC Code" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Account Holder's Name" variant="outlined" />
                </Grid>

                <Grid item xs={10} sm={5} md={3} lg={2} xl={2} >

                  <Button fullWidth variant='contained' color='warning'>Submit</Button>
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