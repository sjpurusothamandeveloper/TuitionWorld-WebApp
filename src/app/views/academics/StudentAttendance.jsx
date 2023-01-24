import { Box, Button, styled, Typography,Grid,
  Card,
  IconButton} from '@mui/material';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { studentsList } from './Constants';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import PanToolIcon from '@mui/icons-material/PanTool';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';
import FaceIcon from '@mui/icons-material/Face';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import FaceRetouchingOffOutlinedIcon from '@mui/icons-material/FaceRetouchingOffOutlined';
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

  const [presented ,setPresented] = useState(null)
  const [absented ,setAbsented] = useState(null)
  
  const handleStudentAtt = (stud,presence) =>{
    
  let obj={
    "studentName":stud.name,
    "presence":presence
  }
  let studAttArr = []
  studAttArr.push(obj)
  console.log(studAttArr)
  
  
    if(presence === "present" ){
      setAbsented(false)
      setPresented(true)
    }
    if(presence === "absent" ){
      setAbsented(true)
      setPresented(false)
    }
    console.log(stud,presence)
  } 
  
 

  return (
    <React.Fragment>
      <div className='padding-15'>
        <StraightFlex ><Typography variant="h6">Student Attendance</Typography></StraightFlex>
     <br />
     
      <br />
      <Grid container columnSpacing={2} rowSpacing={2} display="row" alignItems="center" justifyContent="space-evenly">
       {studentsList.map((student,index)=> 
        <Grid item md={2} lg={2} xl={2} sm={2} xs={5}>
          <Card className='card-student padding-15'>
             <img class="card-photo" src={student.image}></img>
          <Typography className='padding-15'>{student.name}</Typography> 
          <StraightFlex>
            <IconButton onClick={()=>handleStudentAtt(student,"present")}>{presented ? <FaceIcon  value="present" className='present-color' /> : <FaceOutlinedIcon className='present-color' />}</IconButton>
            <IconButton onClick={()=>handleStudentAtt(student,"absent")}>{absented  ?  <FaceRetouchingOffIcon value="absent" className='absent-color' /> : <FaceRetouchingOffOutlinedIcon className='absent-color' />}</IconButton>
            </StraightFlex>
           </Card>
        </Grid>
        )}
      </Grid>
      </div>

    </React.Fragment>
  );
};

export default StudentAttendance;
