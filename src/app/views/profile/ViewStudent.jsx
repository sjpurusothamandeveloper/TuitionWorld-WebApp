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
               <QuesTag marginTop={2}>Enrole ID </QuesTag>
               <AnsTag>TN07AL4777 </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Mobile No </QuesTag>
               <AnsTag>7384839223 </AnsTag>
               <QuesTag marginTop={2}>Date of Admission </QuesTag>
               <AnsTag>Wilson </AnsTag>
               <QuesTag marginTop={2}>Roll No </QuesTag>
               <AnsTag>Wilson </AnsTag>
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>   
               <QuesTag>Gender </QuesTag>
               <AnsTag>TN07AL4777 </AnsTag>          
               <QuesTag marginTop={2}>Date of Birth </QuesTag>
               <AnsTag>A+ </AnsTag>
               <QuesTag marginTop={2}>Blood Group </QuesTag>
               <AnsTag>TN07AL4777 </AnsTag>   
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
               
               <QuesTag marginTop={2}>Pin Code </QuesTag>
               <AnsTag>634657 </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag marginTop={2}>City </QuesTag>
               <AnsTag>Koduvai </AnsTag>
               
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>State </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
              
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag marginTop={2}>Country</QuesTag>
               <AnsTag>Vada India </AnsTag>
               
               </FlexBox>
               </Grid></Grid>
                </ProfileCard>
                <br />
                <ProfileCard>
                    <h2 style={{margin:"0px"}}>Father Details</h2>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>Father Name</QuesTag>
               <AnsTag>3-706, Ellapalayam Pudhur</AnsTag>
               <QuesTag marginTop={2}>Organization </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Experience(in Years) </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>  
               <QuesTag >Mobile Number </QuesTag>
               <AnsTag>Koduvai </AnsTag>           
              
              
               <QuesTag marginTop={2}>Designations</QuesTag>
               <AnsTag>Vada India </AnsTag>
               
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>  
               <QuesTag >Email </QuesTag>
               <AnsTag>634657 </AnsTag>           
              
               
               <QuesTag marginTop={2}>Annual Income </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>  
               <QuesTag >Occupation</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Highest Qualification </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
                  
               </FlexBox>
               </Grid></Grid>
                </ProfileCard>
                <br />
                <ProfileCard>
                    <h2 style={{margin:"0px"}}>Mother Details</h2>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>Mother Name</QuesTag>
               <AnsTag>3-706, Ellapalayam Pudhur</AnsTag>
               <QuesTag marginTop={2}>Organization </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Experience(in Years) </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>  
               <QuesTag >Mobile Number </QuesTag>
               <AnsTag>Koduvai </AnsTag>           
              
              
               <QuesTag marginTop={2}>Designations</QuesTag>
               <AnsTag>Vada India </AnsTag>
               
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>  
               <QuesTag >Email </QuesTag>
               <AnsTag>634657 </AnsTag>           
              
               
               <QuesTag marginTop={2}>Annual Income </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>  
               <QuesTag >Occupation</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Highest Qualification </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
                  
               </FlexBox>
               </Grid></Grid>
                </ProfileCard>
                <br />
                <ProfileCard>
                    <h2 style={{margin:"0px"}}>Parents Bank Details</h2>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>Bank Name</QuesTag>
               <AnsTag>3-706, Ellapalayam Pudhur</AnsTag>
               
              
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>   

               <QuesTag>Account Holder's Name</QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag >Bank Account Number</QuesTag>
               <AnsTag>Koduvai </AnsTag>
               
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag >IFSC Code</QuesTag>
               <AnsTag>634657 </AnsTag>
               
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
               <QuesTag marginTop={2}>Second Language</QuesTag>
               <AnsTag>634657 </AnsTag>
               <QuesTag marginTop={2}>Sponser Name</QuesTag>
               <AnsTag>634657 </AnsTag>
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Category</QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>RTE</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Nationality</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Emergency Contact Number</QuesTag>
               <AnsTag>Vada India </AnsTag>
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag> BPL Student</QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>BPL Card No.</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Person with Disability (PwD)</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Single Parent</QuesTag>
               <AnsTag>Vada India </AnsTag>
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag> Type of Disability</QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Identification Mark</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Mother Tongue</QuesTag>
               <AnsTag>Vada India </AnsTag>
               <QuesTag marginTop={2}>Sponsored Student</QuesTag>
               <AnsTag>Vada India </AnsTag>
               </FlexBox>
               </Grid></Grid>
                </ProfileCard>

                <br />
                <ProfileCard>
                    <h2 style={{margin:"0px"}}>Previous School Details</h2>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <FlexBox>             
               <QuesTag>School Name</QuesTag>
               <AnsTag>3-706, Ellapalayam Pudhur</AnsTag>
               <QuesTag marginTop={2}>Medium of Instruction</QuesTag>
               <AnsTag>Koduvai </AnsTag>
               
               </FlexBox></Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>School Address </QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>TC Number</QuesTag>
               <AnsTag>Vada India </AnsTag>
             
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag>Board</QuesTag>
               <AnsTag>Tamilnadu </AnsTag>
               <QuesTag marginTop={2}>Last Class Passed</QuesTag>
               <AnsTag>Vada India </AnsTag>             
              
               </FlexBox>
               </Grid>
               <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
               <FlexBox>             
               <QuesTag marginTop={2}>Percentage / Grade</QuesTag>
               <AnsTag>634657 </AnsTag>        
              
               </FlexBox>
               </Grid></Grid>
                </ProfileCard>
                
            </ProfilePaper>
        </Fragment>
    );
}

export default ViewStaff;