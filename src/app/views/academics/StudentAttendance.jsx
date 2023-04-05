import React, { useState } from "react";
import { Table, TableBody, TableCell,styled,Box,Paper, TableContainer, TableHead, TableRow, Switch, Card, Button, Chip, Avatar, Grid } from '@mui/material';
import './index.css';

const SpaceBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection:'row',
  justifyContent:'flex-end',
  marginRight:"3%",
  gap:'25px',
  flexWrap:"wrap",
  alignItems: 'center',
}));

const SpaceStart = styled(Box)(() => ({
  display: 'flex',
  flexDirection:'row',
  marginLeft:"3%",
  flexWrap:"wrap",
  justifyContent:'flex-start',
  gap:'25px',
  alignItems: 'center',
}));

const initialAttendanceData = [
  { id: 1,enroleID:98763, name: "Geetha", subject: "Tamil", attendance:false,email: "9786587657", classes: "9", coteaching: "Social" },
    { id: 2,enroleID:98765, name: "Priya", subject: "English", attendance:false,email: "9786587657", classes: "8", coteaching: "Science" },
    { id: 3,enroleID:98763, name: "Karthiga", subject: "Maths", attendance:false,email: "9786587657", classes: "4", coteaching: "English" },
    { id: 4,enroleID:98764, name: "Ramya", subject: "Science", attendance:false,email: "9786587657", classes: "5", coteaching: "Science" },
    { id: 5,enroleID:98762, name: "Maheshwari", subject: "Social", attendance:false,email: "9786587657", classes: "7", coteaching: "Maths" },
    { id: 6,enroleID:98769, name: "Sheela", subject: "P.E.T", attendance:false,email: "9786587657", classes: "1", coteaching: "Social" },
    { id: 7,enroleID:98761, name: "Mala", subject: "Tamil", attendance:false,email: "9786587657", classes: "3", coteaching: "English" },
    { id: 8,enroleID:98767, name: "Supriya", subject: "Maths", attendance:false,email: "9786587657", classes: "2", coteaching: "Science" },
];

const StudentAttendance = () => {
  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);
  const [presentAll , setPresentAll] = useState(false)

  
  const handlePresentAll = (event) => {
    const updatedAttendanceData = attendanceData.map((student) => ({
      ...student,
      attendance: event.target.checked,
    }));
    setAttendanceData(updatedAttendanceData);
    setPresentAll(!presentAll)
  };

  const handleAttendanceToggle = (id) => {
    const updatedAttendanceData = attendanceData.map((student) => {
      if (student.id === id) {
        return { ...student, attendance: !student.attendance };
      }
      return student;
    });
    setAttendanceData(updatedAttendanceData);
  };

  const presentCount = attendanceData.filter((student) => student.attendance).length;
  const absentCount = attendanceData.filter((student) => !student.attendance).length;
  const percentage = presentCount * 100 / attendanceData.length;

  return (
    <Grid  container direction="row" justifyContent="flex-start" alignItems="stretch" columnSpacing={2}>
      
    <Grid className="card-content" item xs={12} sm={12} md={12} xl={12} lg={12}>
     <Card className="table-card">
    <TableContainer  component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
          <TableCell className="padding-15-left">No</TableCell>
            <TableCell>Enrole ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="padding-15-left">{student.id}</TableCell>
              <TableCell>{student.enroleID}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>
                <Switch checked={student.attendance} onChange={() => handleAttendanceToggle(student.id)} />
              </TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer></Card></Grid>
    <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
   <Card className="attendance-footer" >
    <SpaceStart>
       <Chip
        avatar={<Avatar alt="Present" src="/assets/images/faces/smiling-face.gif" />}
        label={"Present :" + presentCount}
        variant="outlined"
      />
  <Chip
        avatar={<Avatar alt="Absent" src="/assets/images/faces/crying-face.gif" />}
        label={"Absent :" + absentCount}
        variant="outlined"
      /> 
  <Chip
        avatar={<Avatar alt="Total" src="/assets/images/faces/100.gif" />}
        label={"Percentage:" +percentage}
        variant="outlined"
      /></SpaceStart>
      <SpaceBox>
        <span> <Switch color="secondary" checked={presentCount === attendanceData.length} onChange={handlePresentAll} />
        {presentAll ?   "Absent All" :"Present All"}</span>
              
         {/* <Button variant="contained" color={presentAll ? "error" : "success"} onClick={{handlePresentAll}}>
          {presentAll ? 'Absent All' : 'Present All'}
  </Button> */}
  <Button className="submission-button" type="submit" variant="text" color="primary" onClick={() => console.log(attendanceData)}>
    Submit
  </Button></SpaceBox>
  </Card> </Grid></Grid>
 
  );
};

export default StudentAttendance;
