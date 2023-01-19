import { Box, Button, styled, Typography,Grid,Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  IconButton} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { studentsList } from './Constants';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import PanToolIcon from '@mui/icons-material/PanTool';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';
import FaceIcon from '@mui/icons-material/Face';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const StraightFlex = styled(`div`)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const JustifyBox = styled(FlexBox)(() => ({
  maxWidth: 320,
  flexDirection: 'column',
  justifyContent: 'center',
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

const StudentAttendance = () => {
  const navigate = useNavigate();
 

  return (
    <React.Fragment>
      <div className='padding-15'>
        <StraightFlex ><Typography variant="h6">Student Attendance</Typography></StraightFlex>
     <br />
     
      <br />
      <Grid container columnSpacing={2} rowSpacing={2} display="row" alignItems="center" justifyContent="space-evenly">
       {studentsList.map((student)=> 
        <Grid item md={2} lg={2} xl={2} sm={2} xs={5}>
          <Card className='card-student padding-15'>
             <img class="card-photo" src={student.image}></img>
          <Typography className='padding-15'>{student.name}</Typography> 
          <StraightFlex><IconButton><FaceIcon className='present-color' /></IconButton><IconButton><FaceRetouchingOffIcon className='absent-color' /></IconButton></StraightFlex>
           </Card>
        </Grid>
        )}
      </Grid>
      </div>

    </React.Fragment>
  );
};

export default StudentAttendance;
