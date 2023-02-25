import { React, useState, Fragment } from 'react';
import {
    Grid, Box,
    TextField, styled, Typography, Card, Paper, Button
} from '@mui/material';
import './index.css'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection:'column', 
    color:'#1c1c1c',
    fontWeight:'bold',
    alignItems: 'flex-start',
  }));
  
const ProfileCard = styled(Card)(() => ({
    width:"100%",
    padding:'15px',
    backgroundColor:'#f1f3f4',
  }));

  const AnsTag = styled(Typography)(() => ({
   color:'#1C1C1C',
   fontWeight:'bold'
  }));

  const QuesTag = styled(Typography)(() => ({
    color:'#9d9fa2',
    fontWeight:'regular',
    fontSize:'small'

   }));

  const ProfilePaper = styled(Paper)(() => ({
    display: 'flex',
    userSelect:'none',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    padding:'15px',
    backgroundColor:'#ffffff',
    
  }));
  
 
  
  const IMG = styled('img')(() => ({
    width: '100%',
    maxWidth:'200px',
    borderRadius:'10px'
  }));

const ViewStaff = () => {
    return (
        <Fragment>
            <ProfilePaper>
              <Typography marginLeft={2} variant='h4'>Dinesh Kumar&nbsp;<Button className='border-radius-50' color="success" variant="outlined">Active</Button></Typography> 
                <Typography marginLeft={2} variant='body2'> Maahali Thunai&nbsp;| Software Engineer</Typography> <br />
                <ProfileCard>
                
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <IMG src="/assets/images/faces/2.jpg" alt="file"></IMG></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>First Name </QuesTag>
               <AnsTag>Cameron Wilson </AnsTag>
               <QuesTag marginTop={2}>Last Name </QuesTag>
               <AnsTag>Wilson </AnsTag>
               <QuesTag marginTop={2}>Employee ID: </QuesTag>
               <AnsTag>TN07AL4777 </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Mobile No </QuesTag>
               <AnsTag>7384839223 </AnsTag>
               <QuesTag marginTop={2}>Email </QuesTag>
               <AnsTag>Wilson </AnsTag>
              
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>   
               <QuesTag>Gender </QuesTag>
               <AnsTag>TN07AL4777 </AnsTag>          
               <QuesTag marginTop={2}>Blood Group </QuesTag>
               <AnsTag>A+ </AnsTag>
               
               </FlexBox></Grid>
               </Grid>
                </ProfileCard>
                <br />
                <ProfileCard>
                    <h2 style={{margin:"0px"}}>Address Details</h2>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>Address </QuesTag>
               <AnsTag>3-706, Ellapalayam Pudhur</AnsTag>
               <QuesTag marginTop={2}>City </QuesTag>
               <AnsTag>Koduvai </AnsTag>
               <QuesTag marginTop={2}>Pin Code </QuesTag>
               <AnsTag>634657 </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>State </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Country</QuesTag>
               <AnsTag>Vada India </AnsTag>
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               </Grid></Grid>
                </ProfileCard>
                <br />
                <ProfileCard>
                    <h2 style={{margin:"0px"}}>Employment Details</h2>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>Job Title</QuesTag>
               <AnsTag>3-706, Ellapalayam Pudhur</AnsTag>
               <QuesTag marginTop={2}>Designation </QuesTag>
               <AnsTag>Koduvai </AnsTag>
               <QuesTag marginTop={2}>Department </QuesTag>
               <AnsTag>634657 </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Employment Type </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Date of Appointed</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Experience in Yrs</QuesTag>
               <AnsTag>Vada India </AnsTag>
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Highest Qualification </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               
               </FlexBox>
               </Grid></Grid>
                </ProfileCard>
                <br />
                <ProfileCard>
                    <h2 style={{margin:"0px"}}>Additional Details</h2>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>Aadhar Number </QuesTag>
               <AnsTag>3-706, Ellapalayam Pudhur</AnsTag>
               <QuesTag marginTop={2}>PAN Number</QuesTag>
               <AnsTag>Koduvai </AnsTag>
               <QuesTag marginTop={2}>Religion</QuesTag>
               <AnsTag>634657 </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Father Name </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Mother Name</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Maritual Status</QuesTag>
               <AnsTag>Vada India </AnsTag>
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Spouse Name</QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Emergency Contact No</QuesTag>
               <AnsTag>Vada India </AnsTag>

               </FlexBox>
               </Grid></Grid>
                </ProfileCard>

                <br />
                <ProfileCard>
                    <h2 style={{margin:"0px"}}>Previous Experience</h2>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>Institute Name </QuesTag>
               <AnsTag>3-706, Ellapalayam Pudhur</AnsTag>
               <QuesTag marginTop={2}>Job Title</QuesTag>
               <AnsTag>Koduvai </AnsTag>
               <QuesTag marginTop={2}>Date of Joined</QuesTag>
               <AnsTag>634657 </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Releiving Date </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Location</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Reference Name</QuesTag>
               <AnsTag>Vada India </AnsTag>
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Reference Mobile Number</QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Emergency Contact No</QuesTag>
               <AnsTag>Vada India </AnsTag>

               </FlexBox>
               </Grid></Grid>
                </ProfileCard>
                <br />
                <ProfileCard>
                    <h2 style={{margin:"0px"}}>Bank Details</h2>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>Bank Name</QuesTag>
               <AnsTag>3-706, Ellapalayam Pudhur</AnsTag>
               <QuesTag marginTop={2}>Bank Account Number</QuesTag>
               <AnsTag>Koduvai </AnsTag>
               <QuesTag marginTop={2}>IFSC Code</QuesTag>
               <AnsTag>634657 </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Account Holder's Name</QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               
               </Grid></Grid>
                </ProfileCard>
            </ProfilePaper>
        </Fragment>
    );
}

export default ViewStaff;