import { React, useState, useEffect } from 'react';
import { Grid, Box, Button, Radio, RadioGroup, FormControl, FormControlLabel, styled, Typography, Card, Collapse, DialogActions, DialogTitle, DialogContent, TextField, DialogContentText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, Chip, Avatar } from '@mui/material';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import LabelledSwitch from '../material-kit/switch/LabelledSwitch';
import './index.css';
import pic1 from "../../assets/images/2.jpg"
import { getStaffs } from "../../services/AppService"
import { studentsList } from './Constants';

const maxDialog = "500px";


const SpaceBetwwenDiv = styled(`div`)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

export default function SubjectManagement(props) {
  const location = useLocation()
  const { classDetails } = location.state
  const [open, setOpen] = useState(false);
  const [assignOpen, setAssignOpen] = useState(false);
  const [values, setValues] = useState("compulsory");
  const usersData = [
    { id: 1, name: "Tamil", subtype: "compulsory" },
    { id: 2, name: "English", subtype: "objective" },
    { id: 3, name: "Mathematics", subtype: "objective" }
  ];

  const initialFormState = { id: null, name: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [assignedTeacher, setAssignedTeacher] = useState("");
  const [isAssignedTeacher, setIsAssignedTeacher] = useState(false);
  const [staffList, setStaffList] = useState([])

  const [user, setUser] = useState(
    editing ? currentUser : initialFormState
  );
  const staffData = [
    { id: 1, name: "Purus" },
    { id: 2, name: "Thaman" },
    { id: 3, name: "HipHop" }
  ];
  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const resetAddUser = () => {
    setEditing(false);
    setOpen(!true)
    setUser(initialFormState);
    setCurrentUser(initialFormState);
  };

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setOpen(!true)
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const editRow = user => {
    setEditing(true);
    setOpen(true)
    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setOpen(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
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

  const handleAssignOpen = () => {
    setAssignOpen(true);
  };

  const handleAssignClose = () => {
    setAssignOpen(false);
  };

  const assigningTeacher = (name) => {
    setAssignedTeacher(name)
    setIsAssignedTeacher(true)
    handleAssignClose(true)
  }

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

  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase();
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
              <SpaceBetwwenDiv> <Typography variant='h6'>{`Manage class teacher, attendance for`} {classDetails}</Typography><Button>{`Manage Attendance`}</Button></SpaceBetwwenDiv>
              {isAssignedTeacher ? <Chip avatar={<Avatar alt="Natacha" src={pic1} />} label={assignedTeacher} variant="outlined" /> : <Button onClick={handleAssignOpen}><Typography color="primary">{`+ Assign Class Teacher`}</Typography></Button>}</Card>
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <TableContainer style={{ padding: "10px" }} component={Paper}>
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
                  {users.length > 0 ? (
                    users.map(user => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                          <Button

                            onClick={() => {
                              editRow(user);
                            }}
                          >
                            {`Edit`}
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button

                            onClick={() => deleteUser(user.id)}
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
                    if (!user.name) return;
                    editing ? updateUser(user.id, user) : addUser(user);
                    resetAddUser();
                  }}
                >
                  <br />
                  <TextField
                    fullWidth
                    type="text"
                    name="name"
                    label="Subject"
                    variant="outlined"
                    value={user.name}
                    onChange={handleInputChange}
                  />
                  <br /><br />
                  <Button style={{ backgroundColor: "#34314c" }} variant="contained" type="submit">{editing ? "Update" : "Add"}</Button>
                  {editing && (
                    <Button onClick={resetAddUser} >
                      {`Cancel`}
                    </Button>
                  )}
                </form>
              </DialogContent>

            </Dialog>

          </Grid>

          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card style={{ padding: "20px" }} xs={12} sm={12} md={12} lg={12} xl={12}>
              <SpaceBetwwenDiv> <Typography variant='h6'>{`Manage students for 12 - A`}</Typography></SpaceBetwwenDiv>
              <Link to='/academic/new-student'><Button>{`+ Add Students`}</Button></Link>
              <br />
              <Grid className='students-flex' lg={12} xl={12} md={12} sm={12} xs={12}>
                {studentsList.map((stud) => (
                  <Chip avatar={<Avatar>{capitalizeFirst(stud.name)}</Avatar>} label={stud.name} variant="outlined" />
                ))}</Grid>
            </Card>
          </Grid>
        </Grid>
      </Card>

      <Dialog fullWidth maxWidth="sm" open={assignOpen} onClose={handleAssignClose}>
        <DialogTitle><SpaceBetwwenDiv>{`Assign Staff`} <span onClick={handleAssignClose}><CloseIcon /></span></SpaceBetwwenDiv></DialogTitle>
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
    </div>
  );
}