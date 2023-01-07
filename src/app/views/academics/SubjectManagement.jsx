import  {React,useState,useEffect} from 'react';
import { Grid, Box, Button,Radio,RadioGroup, FormControl,FormControlLabel, styled, Typography, Card, Collapse,DialogActions,DialogTitle,DialogContent,TextField,DialogContentText ,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow, Dialog} from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import LabelledSwitch from '../material-kit/switch/LabelledSwitch';





const SpaceBetwwenDiv = styled(`div`)(() => ({
    width: '100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between' ,
    alignItems:'center'
  }));

export default function SubjectManagement(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("compulsory");
  const usersData = [
    { id: 1, name: "Tamil" },
    { id: 2, name: "English" },
    { id: 3, name: "Mathematics" }
  ];
  const initialFormState = { id: null, name: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);
 
  const [user, setUser] = useState(
    editing ? currentUser : initialFormState
  );

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const resetAddUser = () => {
    setEditing(false);
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

 const handleChange =(e) =>{
  setValue(e.target.value)
 }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



    return (
      <div>
         <Card style={{padding:"15px"}}>
        <Grid
            container
            direction="row"
            rowSpacing={2}
            justifyContent="flex-start"
            alignItems="center">
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card style={{padding:"20px"}} xs={12} sm={12} md={12} lg={12} xl={12}>
             <SpaceBetwwenDiv> <Typography variant='h6'>12 - A &ensp;<EditIcon fontSize='18px' /></Typography><DeleteIcon /></SpaceBetwwenDiv></Card>
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card style={{padding:"20px"}} xs={12} sm={12} md={12} lg={12} xl={12}>
             <SpaceBetwwenDiv> <Typography variant='h6'>Manage class teacher, attendance for 12 - A</Typography><Button>Manage Attendance</Button></SpaceBetwwenDiv>
             <Link to='/academic/new-staff'><Button>+ Assign Class Teacher</Button></Link></Card>
          </Grid>

          <Grid  item lg={12} xl={12} md={12} sm={12} xs={12}>
          <TableContainer  style={{padding:"10px"}} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SUBJECT NAME</TableCell>
            <TableCell>SUBJECT TYPE</TableCell>
            <TableCell>SUBJECT TEACHER</TableCell>
            <TableCell>EDIT SUBJECT</TableCell>
            <TableCell>DELETE SUBJECT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  

        {users.length > 0 ? (
        users.map(user => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>

            <FormControl component="fieldset" className="formControl">      
        <RadioGroup
          value={value}
          name="gender1"
          className="group"
          aria-label="Gender"
          onChange={handleChange}
        >
          <FormControlLabel value="compulsory" control={<Radio />} label="compulsory" />
          <FormControlLabel value="optional" control={<Radio />} label="optional" />
        </RadioGroup>
      </FormControl>
             </TableCell><TableCell></TableCell>
            <TableCell>
              <Button
                
                onClick={() => {
                  editRow(user);
                }}
              >
                Edit
              </Button>
              </TableCell>
               <TableCell>
              <Button
               
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={3}>No users</TableCell>
        </TableRow>
      )}
      
          {/* <TableRow >
            <TableCell></TableCell>
            <TableCell>
            <TableCell><FormControl component="fieldset" className="formControl">      
        <RadioGroup
          value={value}
          name="gender1"
          className="group"
          aria-label="Gender"
          onChange={handleChange}
        >
          <FormControlLabel value="compulsory" control={<Radio />} label="compulsory" />
          <FormControlLabel value="optional" control={<Radio />} label="optional" />
        </RadioGroup>
      </FormControl>
             </TableCell>
            </TableCell>
            <TableCell>
              
              <Button
                className="button muted-button"
                
              >
                Delete
              </Button>
            </TableCell>
            <TableCell><Button  >Edit</Button></TableCell>
          </TableRow>
      
        <TableRow>
          <TableCell align="center" colSpan={5}>No Subjects</TableCell>
        </TableRow> */}
      


           
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={handleClickOpen}>+ Add Subject</Button>
    <Dialog open={open} onClose={handleClose}>
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
        type="text"
        name="name"
        label="Subject"
        variant="outlined"
        value={ user.name}
        onChange={handleInputChange}
      />
     
      <br />
      <Button type="submit">{editing ? "Update Subject" : "Add Subject"}</Button>
      {editing && (
        <Button onClick={resetAddUser} >
          Cancel
        </Button>
      )}
    </form>
        </DialogContent>
       
      </Dialog>

          </Grid>

          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card style={{padding:"20px"}} xs={12} sm={12} md={12} lg={12} xl={12}>
             <SpaceBetwwenDiv> <Typography variant='h6'>Manage students for 12 - A</Typography></SpaceBetwwenDiv>
             <Link to='/academic/new-student'><Button>+ Add Students</Button></Link></Card>
          </Grid>
        </Grid>
        </Card>
      </div>
    );
}