import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper, styled, Box,
  Button, Grid, Card, Typography, CardActions, TextField, Chip, Avatar, FormControlLabel, Switch
} from '@mui/material';
import '../academics/index.css';
import id from "date-fns/esm/locale/id/index.js";


const FlexBox = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '15px',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  alignItems: 'center',
}));

const FlexCard = styled(Card)(() => ({
  display: 'flex',
  padding: '15px',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '5px',
  backgroundColor: '#1976D226',
  alignItems: 'center',
}));

const SpaceBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '25px',
  flexWrap: "wrap",
  alignItems: 'center',
}));

const SpaceStart = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: "3%",
  flexWrap: "wrap",
  justifyContent: 'flex-start',
  gap: '25px',
  alignItems: 'center',
}));

const studentList = [
  { id: 1, enroleID: 98763, name: "Geetha", subject: "Tamil", attendance: "absent", email: "dkumar2023@email.com", classes: "9", coteaching: "Social" },
  { id: 2, enroleID: 98765, name: "Priya", subject: "English", attendance: "absent", email: "dkumar2023@email.com", classes: "8", coteaching: "Science" },
  { id: 3, enroleID: 98763, name: "Karthiga", subject: "Maths", attendance: "absent", email: "dkumar2023@email.com", classes: "4", coteaching: "English" },
  { id: 4, enroleID: 98764, name: "Ramya", subject: "Science", attendance: "absent", email: "dkumar2023@email.com", classes: "5", coteaching: "Science" },
  { id: 5, enroleID: 98762, name: "Maheshwari", subject: "Social", attendance: "absent", email: "dkumar2023@email.com", classes: "7", coteaching: "Maths" },
  { id: 6, enroleID: 98769, name: "Sheela", subject: "P.E.T", attendance: "absent", email: "dkumar2023@email.com", classes: "1", coteaching: "Social" },
  { id: 7, enroleID: 98761, name: "Mala", subject: "Tamil", attendance: "absent", email: "dkumar2023@email.com", classes: "3", coteaching: "English" },
  { id: 8, enroleID: 98767, name: "Supriya", subject: "Maths", attendance: "absent", email: "dkumar2023@email.com", classes: "2", coteaching: "Science" },
]

const AttendanceToggle = ({ studentId, handleToggleChange }) => {
  const [state, setState] = useState({
    checked: false,
  });


  const handleChange = (event) => {
    setState({ ...state, checked: event.target.checked });
    handleToggleChange(studentId, event.target.checked);
  };

  return (
    <div >
      <FormControlLabel
        control={
          <Switch
            checked={state.checked}
            onChange={handleChange}
            value="checked"
          />
        }
        label={state.checked ? "Present" : "Absent"}
      />
    </div>
  );
};


const StudentAttendance = (props) => {
  const [students, setStudents] = useState([...studentList]);
  const [attendanceData, setAttendanceData] = useState({});


  const [selectedOption, setSelectedOption] = useState({});
  const [allPresent, setAllPresent] = useState(false);

  const handleOptionChange = (studentId) => (event) => {

    setSelectedOption({ ...selectedOption, [studentId]: event.target.value });
  };

  const handledSelectAll = () => {
    setAllPresent(!allPresent);
    const newSelectedOption = {};
    students.forEach((student) => {
      newSelectedOption[student.id] = allPresent ? 'absent' : 'present';
    });
    setSelectedOption(newSelectedOption);
  };

  const handleAttendanceChange = (id) => {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          return { ...student, attendance: !student.attendance };
        }
        return student;
      })
    );

  };
  const present = Object.keys(selectedOption).filter((student) => student.id === "present");
  const absent = Object.keys(selectedOption).filter((student) => student.id === "absent");
  const percentage = present.length * 100 / students.length;

  //  const options = {
  //   pieHole:0.2,
  //   title: "Attendance Percentage",
  //   is3D: false,
  //   colors: ['#4791db', '#115293']
  // };


  const submission = () => {
    console.log(students)
    console.log(present.length)
    console.log(absent.length)
  }
  const handleSubmit = (event) => {
    console.log(students)
    event.preventDefault();

  };
  const handleToggleChange = (studentId, isPresent) => {
    setAttendanceData({
      ...attendanceData,
      [studentId]: isPresent,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(attendanceData);
  };

  const subdata = [
    ["Attendance", "Today"],
    ["Present", present.length],
    ["Absent", absent.length],
  ];
  return (
    <Card style={{ position: 'relative' }}>
      <form onSubmit={handleFormSubmit}>
        {/* <Card className="padding-15-left-right">
       <FlexBox >
        <FlexCard>
        <Typography variant='body1'>Total Students </Typography>
        <Typography variant='h5'> {students.length} </Typography></FlexCard> 
        <FlexCard>  <Typography variant='body2'>Present | Absent  </Typography>
        <Typography variant='h5'> {present.length} : {absent.length} </Typography></FlexCard>
        <FlexCard>  <Typography variant='body2'>Percentage </Typography>
        <Typography variant='h5'> {percentage} </Typography>
        </FlexCard>
        <Chart
      chartType="PieChart"
      
      data={subdata}
      options={options}
      width={"auto"}
      height={"150px"}
    />
      </FlexBox>
      
        </Card> */}


        <Grid container direction="row" justifyContent="flex-start" alignItems="stretch" columnSpacing={2}>

          <Grid className="card-content" item xs={12} sm={12} md={12} xl={12} lg={12}>
            <TableContainer component={Paper}>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell className="padding-15-left " align="left">No</TableCell>
                    <TableCell align="left">Student ID</TableCell>
                    <TableCell align="left">Student Name</TableCell>
                    <TableCell align="center">Attendance</TableCell>
                    <TableCell align="center">Notes</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody >
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="padding-15-left " align="left">{student.id}</TableCell>
                      <TableCell align="left">{student.enroleID}</TableCell>
                      <TableCell align="left">{student.name}</TableCell>
                      <TableCell align="center">

                        <AttendanceToggle
                          key={student.id}
                          studentId={student.id}
                          handleToggleChange={handleToggleChange}
                        />

                      </TableCell>
                      <TableCell align="center"><TextField size="small"></TextField></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer></Grid>
          {/* <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
        <Card className="padding-15">
          <Typography variant="h5">Attendance Report</Typography >
        
      <FlexBox marginTop={1}>
        <FlexCard>
        <Typography variant='body1'>Total Students </Typography>
        <Typography variant='h5'> {students.length} </Typography></FlexCard> 
        <FlexCard>  <Typography variant='body2'>Present | Absent  </Typography>
        <Typography variant='h5'> {present.length} : {absent.length} </Typography></FlexCard>
        <FlexCard>  <Typography variant='body2'>Percentage </Typography>
        <Typography variant='h5'> {percentage} </Typography>
        </FlexCard>
      </FlexBox>
      <Chart
      chartType="PieChart"
      
      data={subdata}
      options={options}
      width={"100%"}
      height={"150px"}
    /> <br /><SpaceBox> <Button variant="contained" color={allSelected ? "warning" : "success"} onClick={handleSelectAll}>
    {allSelected  ? "Absent All" : "Present All"}
  </Button>
  <Button className="submission-button" onClick={submission} variant="text" color="primary">
    Submit
  </Button></SpaceBox>
        </Card>
      </Grid> */}



          <Grid style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }} padding={1} marginLeft={2} marginRight={2} item xs={12} sm={12} md={12} xl={12} lg={12}>
            <SpaceStart>
              <Chip
                avatar={<Avatar alt="Present" src="/assets/images/faces/smiling-face.gif" />}
                label="Present"
                variant="outlined"
              />
              <Chip
                avatar={<Avatar alt="Absent" src="/assets/images/faces/crying-face.gif" />}
                label="Absent"
                variant="outlined"
              />
              <Chip
                avatar={<Avatar alt="Total" src="/assets/images/faces/100.gif" />}
                label="Total"
                variant="outlined"
              /></SpaceStart>
            <SpaceBox>
              <Button variant="contained" color={allPresent ? "error" : "success"} onClick={handledSelectAll}>
                {allPresent ? 'Absent All' : 'Present All'}
              </Button>
              <Button className="submission-button" type="submit" variant="text" color="primary">
                Submit
              </Button></SpaceBox>
          </Grid></Grid></form>
    </Card>
  );
}

export default StudentAttendance;


