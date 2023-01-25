import { Box, Button, styled,Card,Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./index.css";
import pic1 from '../../assets/images/2.jpg'

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  color:'#FFFFFF'
}));

const ProfileCard = styled(Card)(() => ({
  width: '100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'flex-end',
  minHeight:'140px',
  padding:'20px'

}));


const LeaveCard = styled(Card)(() => ({
  width: '100%',
  display:'flex',
  
  flexDirection:'column',
  justifyContent:'center',
  gap:'20px',
  alignItems:'center',
  height:'150px',
  padding:'20px'

}));

const JustifyBox = styled(FlexBox)(() => ({
 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'flex-start'
}));

const SpaceBox = styled(FlexBox)(() => ({
  flexDirection: 'row',
  gap:'20px',
  justifyContent:'flex-start',
  alignItems:'flex-start'
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


const LeaveManagement = () => {
  const navigate = useNavigate();
  
  return (
   <React.Fragment>
    
     <Paper className='component-paper'>
     <ProfileCard className='profile-card-major'> 
     <SpaceBox>
      <img className='img-rounded' src={pic1}></img>
     
      <JustifyBox ><Typography variant="h6">Sabash , <strong>Purusothaman</strong></Typography>
      
      <Typography variant="subtitle1">Mail:<strong>dinesh@gmail.com</strong> &emsp;Designation : <strong>Tutor</strong></Typography>
      </JustifyBox></SpaceBox>
      <Link to="/hrms/apply-leave"><Button variant="outlined" color="secondary" align="right">Apply</Button></Link>
     </ProfileCard>
     <br />
     <Grid container direction='row'  justifyContent="space-between" alignItems="center">
      <Grid item md={3} lg={3} xl={3} >
        <LeaveCard className='pink-card'>
        <Typography variant="subtitle1"><strong>Total Leave</strong></Typography>
        <Typography variant="h3"><strong>28</strong></Typography>
        </LeaveCard></Grid>
        <Grid item md={3} lg={3} xl={3} >
        <LeaveCard className="blue-card">
        <Typography variant="subtitle1"><strong>Remaining Leave</strong> </Typography>
        <Typography variant="h3"><strong>25</strong></Typography>
        </LeaveCard></Grid>
        <Grid item md={3} lg={3} xl={3} >
        <LeaveCard className='green-card'>
        <Typography variant="subtitle1"><strong>Working Days</strong></Typography>
        <Typography variant="h3"><strong>21</strong></Typography>
        </LeaveCard>
      </Grid>

     </Grid>
     </Paper>
    </React.Fragment>
  );
};

export default LeaveManagement;
