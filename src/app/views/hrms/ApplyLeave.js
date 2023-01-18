import { Box, Button, styled,Card,Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  justifyContent:'flex-start',
  gap:'20px',
  alignItems:'flex-start',
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
  maxWidth: 320,
  flexDirection: 'column',
  justifyContent: 'center',
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

const ApplyLeave = () => {
  const navigate = useNavigate();

  return (
   <React.Fragment>
     <Paper className='component-paper'>
     
     <Grid container direction='row'  justifyContent="space-between" alignItems="center">
      <Grid item md={3} lg={3} xl={3} >
       </Grid>
        <Grid item md={3} lg={3} xl={3} >
        </Grid>
        <Grid item md={3} lg={3} xl={3} >
        
      </Grid>

     </Grid>
     </Paper>
    </React.Fragment>
  );
};

export default ApplyLeave;
