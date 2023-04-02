import { React, useState, useEffect } from 'react';
import { Grid, Box, Button, Radio, RadioGroup, FormControl, FormControlLabel, styled, Typography, Card, Collapse, DialogActions, DialogTitle, DialogContent, TextField, DialogContentText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, Chip, Avatar, List, ListItem, Checkbox, ListItemButton, ListItemAvatar, ListItemText, Select, MenuItem } from '@mui/material';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import LabelledSwitch from '../material-kit/switch/LabelledSwitch';
import './index.css';
import pic1 from "../../assets/images/2.jpg"
import {  getStaffs, getStudents } from "../../services/AppService"
import { studentsList } from './Constants';
import StudentList from './StudentList';

import { useSnackbar } from 'notistack';
const maxDialog = "500px";


const SpaceBetwwenDiv = styled(`div`)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

export default function SubjectManagement({selectedFilms}) {
  const location = useLocation()
  const { classDetails } = location.state
  const [open, setOpen] = useState(false);
  const [staffModel, setStaffModel] = useState(false);
  const [substaffModel, setsubStaffModel] = useState(false);
  const [studentModel, setStudentModel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [studentDb, setStudentDb] = useState([]);
  const [values, setValues] = useState("compulsory");
  const subjectsData = [
    { id: 1, name: "Tamil",subTeacher:null },
    { id: 2, name: "English",subTeacher:null },
    { id: 3, name: "Mathematics",subTeacher:null }
  ];
  const { enqueueSnackbar } = useSnackbar();
  const initialFormState = { id: null, name: "" };

  const [subjects, setSubjects] = useState(subjectsData);
  const [editing, setEditing] = useState(false);
  const [currentSubject, setCurrentSubject] = useState(initialFormState);
  const [assignedTeacher, setAssignedTeacher] = useState("");
  const [isAssignedTeacher, setIsAssignedTeacher] = useState(false);
  const [assignedSubTeacher, setAssignedSubTeacher] = useState("");
  const [isAssignedSubTeacher, setIsAssignedSubTeacher] = useState(false);
  const [staffList, setStaffList] = useState([])
  const [studentList, setStudentList] = useState([])
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);


  const [subject, setSubject] = useState(
    editing ? currentSubject : initialFormState
  );
  const staffData = [
    { id: 1, name: "Purus" },
    { id: 2, name: "Thaman" },
    { id: 3, name: "HipHop" }
  ];
  const handleInputChange = event => {
    const { name, value } = event.target;

    setSubject({ ...subject, [name]: value });
  };

  useEffect(() => {
    setSubject(currentSubject);
  }, [currentSubject]);

  useEffect(() => {
    getStaffList()
  }, [])

  const getStaffList = async () => {
    let staffListResp = await getStaffs()
    if (staffListResp.statusCode === 200) {
      setStaffList(staffListResp.data)
    }
    else {
      setStaffList([])
    }
  }

  useEffect(() => {
    getAllStudentsDetails()
  }, []);

  const getAllStudentsDetails = async () => {
    try {
      const studListResp = await getStudents()
      console.log("resp", studListResp)
      if (studListResp && studListResp.statusCode === 200) {
        handleToastMessage(true, studListResp.message)
        if(studListResp?.data && studListResp?.data.length > 0){
          setStudentDb(studListResp?.data)
        }
      }
      else {
        handleToastMessage(false, studListResp.message)
        setStudentDb([])
      }
    } catch (e) {
      handleToastMessage(false)
      setStudentDb([])
    }
  }

  const handleToastMessage = (typeOfMsg, msg) => {
    const failureMessage = 'Something went wrong :(';

    enqueueSnackbar(msg ? msg : failureMessage, {
      variant: typeOfMsg ? "success" : "error",
      persist: false,
      autoHideDuration: 2000
    });
  }

  const resetAddSubject = () => {
    setEditing(false);
    setOpen(!true)
    setSubject(initialFormState);
    setCurrentSubject(initialFormState);
  };

  const addSubject = subject => {
    subject.id = subjects.length + 1;
    const newSubjectObj = { id: subject.id, name: subject.name, subTeacher: "" };
    setSubjects([...subjects, newSubjectObj]);
    setOpen(!true)
  };

  const deleteSubject = id => {
    setEditing(false);
    setSubjects(subjects.filter(subject => subject.id !== id));
  };

  const editRow = subject => {
    setEditing(true);
    setOpen(true)
    setCurrentSubject(subject);
  };

  const updateSubject = (id, updatedSubject) => {
    setEditing(false);
    setOpen(false)
    setSubjects(subjects.map(subject => (subject.id === id ? updatedSubject : subject)));
  };

  const handleChange = (type, event) => {
    const { name, value } = event.target;

    setValues({ type, [name]: value });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const StaffModelOpen = () => {
    setStaffModel(true);
  };

  const StaffModelClose = () => {
    setStaffModel(false);
  };

  const subStaffModelOpen = () => {
    setsubStaffModel(true);
  };

  const subStaffModelClose = () => {
    setsubStaffModel(false);
  };

  const StudentModelOpen = () => {
    setStudentModel(true);
  };

  const StudentModelClose = () => {
    setStudentModel(false);
  };

  const openModal = (id) => {
    setSelectedSubjectId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubjectId(null);
    setSelectedTeacher("");
  };

  const assigningTeacher = (name) => {
    setAssignedTeacher(name)
    setIsAssignedTeacher(true)
    StaffModelClose(true)
  }
  // const assigningSubTeacher = (name) => {
  //   setAssignedSubTeacher(name)
    
  //   setIsAssignedSubTeacher(true)
  //   StaffModelClose(true)
  // }

  const assignTeacher = (id, teacher) => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, subTeacher: teacher } : subject
    );
    setSubjects(updatedSubjects);
    setIsModalOpen(false);
    setSelectedSubjectId(null);
    setSelectedTeacher("");
  };


  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase();
  }

  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    let filteredObject = studentsList.filter((obj) => {
      return (
        obj.id === value
      );
    })
    //API goes here
    setStudentList([...studentList, filteredObject]);
    console.log(studentList)
    setChecked(newChecked);
  };

  useEffect(() => {
    console.log(checked)
  }, [checked])

  const addStudentsList = () => {
    let getList = []

  }


  return (
    <div>
      <Card style={{ padding: "15px" }}>
        <Grid
          container
          direction="row"
          rowSpacing={2}
          justifyContent="flex-start"
          alignItems="center">
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card style={{ padding: "20px" }} xs={12} sm={12} md={12} lg={12} xl={12}>
              <SpaceBetwwenDiv> <Typography variant='h6'>{classDetails && classDetails}
              </Typography>
              </SpaceBetwwenDiv></Card>
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card style={{ padding: "20px" }} xs={12} sm={12} md={12} lg={12} xl={12}>
              <SpaceBetwwenDiv> <Typography variant='h6'>{`Manage class teacher, attendance for`} {classDetails}</Typography>
              {/* <Button>{`Manage Attendance`}</Button> */}
              </SpaceBetwwenDiv>
              {isAssignedTeacher  ? <Chip avatar={<Avatar alt="Natacha" src={pic1} />} label={assignedTeacher} variant="outlined" /> : <Button onClick={StaffModelOpen}><Typography color="primary">{`+ Assign Class Teacher`}</Typography></Button>}</Card>
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <TableContainer style={{ padding: "20px" }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{`SUBJECT NAME`}</TableCell>
                    <TableCell>{`SUBJECT TEACHER`}</TableCell>
                    <TableCell>{`EDIT SUBJECT`}</TableCell>
                    <TableCell>{`DELETE SUBJECT`}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subjects.length > 0 ? (
                    subjects.map(subject => (
                      <TableRow key={subject.id}>
                        <TableCell>{subject.name}</TableCell>
                        {/* <TableCell>{subject.subTeacher !== null && subject.subTeacher !== "" ? <Chip avatar={<Avatar alt="Teacher" src={pic1} />} label={subject.subTeacher} variant="outlined" /> : <Button onClick={openModal}><Typography color="primary">{`+ Assign Subject Teacher`}</Typography></Button>}</TableCell> */}
                         <TableCell> {subject.subTeacher ?  <Chip avatar={<Avatar alt="Teacher" src={pic1} />} label={subject.subTeacher} variant="outlined" /> : (
                  <Button
                   
                    color="primary"
                    onClick={() => openModal(subject.id)}
                  >
                   + Assign 
                  </Button>
                )}</TableCell>
                        <TableCell>
                          <Button

                            onClick={() => {
                              editRow(subject);
                            }}
                          >
                            {`Edit`}
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button

                            onClick={() => deleteSubject(subject.id)}
                          >
                            {`Delete`}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3}>{`No Subject available :(`}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <Button onClick={handleClickOpen}>{`+ Add Subject`}</Button>
            <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
              <DialogTitle>{editing ? "Edit Subject" : "Add Subject"}</DialogTitle>
              <DialogContent>
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    if (!subject.name) return;
                    editing ? updateSubject(subject.id, subject) : addSubject(subject);
                    resetAddSubject();
                  }}
                >
                  <br />
                  <TextField
                    fullWidth
                    type="text"
                    name="name"
                    label="Subject"
                    variant="outlined"
                    value={subject.name}
                    onChange={handleInputChange}
                  />
                  <br /><br />
                  <Button style={{ backgroundColor: "#34314c" }} variant="contained" type="submit">{editing ? "Update" : "Add"}</Button>
                  {editing && (
                    <Button onClick={resetAddSubject} >
                      {`Cancel`}
                    </Button>
                  )}
                </form>
              </DialogContent>

            </Dialog>

          </Grid>
          {/* Final student chips list */}
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <Card style={{ padding: "20px" }} xs={12} sm={12} md={12} lg={12} xl={12}>
            <StudentList /></Card>
          </Grid>

          {/* <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card style={{ padding: "20px" }} xs={12} sm={12} md={12} lg={12} xl={12}>
              <SpaceBetwwenDiv> <Typography variant='h6'>{`Manage students for 12 - A`}</Typography></SpaceBetwwenDiv>
              <Button onClick={StudentModelOpen}>{`+ Add Students`}</Button>
              <br />
              <Grid className='students-flex' lg={12} xl={12} md={12} sm={12} xs={12}>
                {studentDb.map((stud) => (
                  <Chip avatar={<Avatar>{capitalizeFirst(stud.firstName)}</Avatar>} label={stud.firstName} variant="outlined" />
                ))}</Grid>
            </Card>
          </Grid> */}
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Button className='submit-btn' variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Card>

      <Dialog fullWidth maxWidth="sm" open={staffModel} onClose={StaffModelClose}>
        <DialogTitle><SpaceBetwwenDiv>{`Assign Staff`} <span onClick={StaffModelClose}><CloseIcon /></span></SpaceBetwwenDiv></DialogTitle>
        <DialogContent>
          <TableContainer style={{ padding: "10px" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{`STAFF`}</TableCell>
                  <TableCell align="center">{`ACTION`}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffList.map((staff, i) => (
                  <TableRow key={staff.id}>
                    <TableCell>{staff.firstName + " " + staff.lastName}</TableCell>
                    <TableCell align="center">
                      <Button onClick={() => {
                        assigningTeacher(staff.firstName + " " + staff.lastName);
                      }}>{`Assign`}</Button></TableCell>
                  </TableRow>
                ))} </TableBody></Table></TableContainer>
        </DialogContent>
      </Dialog>

      <Dialog fullWidth maxWidth="sm" open={isModalOpen} onClose={closeModal}>
        <DialogTitle><SpaceBetwwenDiv>{`Assign Staff`} <span onClick={closeModal}><CloseIcon /></span></SpaceBetwwenDiv></DialogTitle>
        <DialogContent>
          <TableContainer style={{ padding: "10px" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{`STAFF`}</TableCell>
                  <TableCell align="center">{`ACTION`}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>


                
            
                  <TableRow >
                    <TableCell><Select fullWidth
            labelId="teacher-select-label"
            id="teacher-select"
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
          >
            {staffList.map((teacher) => (
              <MenuItem key={teacher.id} value={teacher.firstName  + " " + teacher.lastName}>
                {teacher.firstName  + " " + teacher.lastName}
              </MenuItem>
            ))}
          </Select></TableCell>
                   <TableCell align='center'>   <Button 
                        onClick={() => assignTeacher(selectedSubjectId, selectedTeacher)}
                      >{`Assign`}</Button></TableCell>
                  </TableRow>
               </TableBody></Table></TableContainer>
        </DialogContent>
      </Dialog>
      <Dialog fullWidth maxWidth="xs" open={studentModel} onClose={StudentModelClose}>
          <DialogTitle><SpaceBetwwenDiv>Assign Student <span onClick={StudentModelClose}><CloseIcon /></span></SpaceBetwwenDiv></DialogTitle>
          <DialogContent>
          <TableContainer  style={{padding:"10px",maxWidth:"500px"}} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
       
 <TableRow>
 <TableCell align="center">STUDENT</TableCell>
 
 
</TableRow>
          
         
        </TableHead>
        <TableBody>
        <List>
       {studentsList.map((student) => {
        const labelId = `checkbox-list-secondary-label-${student.id}`;
        return (
          <ListItem
            key={student.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(student)}
                checked={checked.indexOf(student.id) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={capitalizeFirst(`${student.name}`)}
                  src={`/static/images/avatar/${student.id + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${student.name}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List> </TableBody></Table></TableContainer>
          </DialogContent>
          <DialogActions><Button onClick={addStudentsList} className='submit-btn' variant="contained">Add Students</Button></DialogActions>
        </Dialog>
    </div>
  );
}