import { React, useState } from 'react';
import { Grid, Box, Button, Accordion, AccordionSummary, AccordionDetails, TextField, styled, Typography, Card, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const StudentAdditionForm = (props) => {
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
                  <TextField fullWidth id="outlined-basic" label="Date of Admission" variant="outlined" /></Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Date of Birth" variant="outlined" /></Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Roll No" variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
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

              <Typography variant='h6'>Father Details</Typography>

              <Grid container
                direction="row"
                rowSpacing={2}
                columnSpacing={2}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Mobile No" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="EMail ID" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Occupation" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Organization" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Designation" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Experience (Years)" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Highest Qualification" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Annual Income" variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Mobile No" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="EMail ID" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Occupation" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Organization" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Designation" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Experience (Years)" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Highest Qualification" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Annual Income" variant="outlined" />
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
    <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Mobile No" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="EMail ID" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Occupation" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Organization" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Designation" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Experience (Years)" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Highest Qualification" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Annual Income" variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Religion" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Category" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Right To Education (RTE)" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Nationality" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="BPL Student" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="BPL Card No." variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Person with Disability (PwD)" variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Single Parent Child" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Single Parent" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Sponsered Student" variant="outlined" />
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
                  <TextField fullWidth id="outlined-basic" label="Weight (kg)" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Height (cm)" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Body Mass Index (BMI)" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Pulse Rate" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Haemoglobin (Hb)" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Allergies" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="COVID Vaccination" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Child Immunisation" variant="outlined" />
                </Grid>
                <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
                  <TextField fullWidth id="outlined-basic" label="Immunisation Remarks" variant="outlined" />
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
    <TextField fullWidth id="outlined-basic" label="School Name" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="School Address" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Board" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Medium of Instruction" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="T.C.Number" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Last Class Passed" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
    <TextField fullWidth id="outlined-basic" label="Percentage/Grade" variant="outlined" />
  </Grid>
  <Grid item xs={10} sm={6} md={3} lg={3} xl={3} >
   
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

export default StudentAdditionForm