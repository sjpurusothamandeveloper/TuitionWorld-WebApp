import { Box, Button, styled, Typography,Grid,Select,
    MenuItem,
    InputLabel,
    FormControl,
    Card,
    IconButton} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../academics/index.css';
import { studentsList } from '../academics/Constants';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import PanToolIcon from '@mui/icons-material/PanTool';
  import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
  import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';
  import FaceIcon from '@mui/icons-material/Face';
  import EventBusyIcon from '@mui/icons-material/EventBusy';
  import EventAvailableIcon from '@mui/icons-material/EventAvailable';

  const StraightFlex = styled(`div`)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }));


const StaffAttendance = () => {
    return ( 
        <React.Fragment>
      <div className='padding-15'>
        <StraightFlex ><Typography variant="h6">Staff Attendance</Typography></StraightFlex>
    
     {/* <Card><br />
      <Grid container display="row" alignItems="center" justifyContent="space-evenly">
      
        <Grid item sm={5} xs={10} md={3} xl={3} lg={3}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Class</InputLabel>
       <Select
       size="medium"   
              
         id="demo-simple-select" 
         labelId="demo-simple-select-label"
         label="Select Class"
         >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item sm={5} xs={10} md={3} xl={3} lg={3}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
       <Select
       size="medium"     
            
         id="demo-simple-select" 
         labelId="demo-simple-select-label"
         label="Select Subject"
         >
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
       </Select>
     </FormControl>
        </Grid>
        <Grid item sm={5} xs={10} md={3} xl={3} lg={3}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Section</InputLabel>
       <Select
       size="medium"  
            
         id="demo-simple-select" 
         labelId="demo-simple-select-label"
         label="Select Section"
         >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Grid>
         </Grid>
      <br /></Card> */}
      <br /> <br />
      <Grid container columnSpacing={2} rowSpacing={2} display="row" alignItems="center" justifyContent="space-evenly">
       {studentsList.map((student)=> 
        <Grid item md={2} lg={2} xl={2} sm={2} xs={5}>
          <Card className='card-student padding-15'>
             <img class="card-photo" src={student.image}></img>
          <Typography className='padding-15'>{student.name}</Typography> 
          <StraightFlex><IconButton><EventAvailableIcon className='present-color' /></IconButton><IconButton><EventBusyIcon className='absent-color' /></IconButton></StraightFlex>
           </Card>
        </Grid>
        )}
      </Grid>
      </div>

    </React.Fragment>
     );
}

export default StaffAttendance;