import React, { Component ,useState} from 'react';
import PropTypes from 'prop-types';
import { Grid,AppBar,Tabs,Tab, Box,styled, Typography, Card, Collapse,DialogActions,DialogTitle,DialogContent,TextField,DialogContentText ,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow, Dialog, Button} from '@mui/material';
import './index.css';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { indexOf } from 'lodash';


const SpaceBetwwenDiv = styled(`div`)(() => ({
    width: '100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between' ,
    alignItems:'center'
  }));



const studentList = [
    { id: 1,enroleID:98763, name: "Geetha", subject: "Tamil", attendance:"absent",email: "9786587657", classes: "9", coteaching: "Social" },
    { id: 2,enroleID:98765, name: "Priya", subject: "English", attendance:"absent",email: "9786587657", classes: "8", coteaching: "Science" },
    { id: 3,enroleID:98763, name: "Karthiga", subject: "Maths", attendance:"absent",email: "9786587657", classes: "4", coteaching: "English" },
    { id: 4,enroleID:98764, name: "Ramya", subject: "Science", attendance:"absent",email: "9786587657", classes: "5", coteaching: "Science" },
    { id: 5,enroleID:98762, name: "Maheshwari", subject: "Social", attendance:"absent",email: "9786587657", classes: "7", coteaching: "Maths" },
    { id: 6,enroleID:98769, name: "Sheela", subject: "P.E.T", attendance:"absent",email: "9786587657", classes: "1", coteaching: "Social" },
    { id: 7,enroleID:98761, name: "Mala", subject: "Tamil", attendance:"absent",email: "9786587657", classes: "3", coteaching: "English" },
    { id: 8,enroleID:98767, name: "Supriya", subject: "Maths", attendance:"absent",email: "9786587657", classes: "2", coteaching: "Science" },
  ]

const AdmissionDetails = () => {

    const [value, setValue] = useState(0);
    const[students,setStudents] = useState(studentList)
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      const deleteEnquiry = id => {
      setStudents(students.filter(student => student.id != id))
      
      };

    return ( 
    <div>
<Card className='padding-15'>
    <SpaceBetwwenDiv>
      <div></div>
        <Typography variant="h6">All Enquiries</Typography>
       <Link to='/administration/admission/enquiry'> <Button color="primary" >+ Add Enquiry</Button></Link>
    </SpaceBetwwenDiv><br />

       
       
        
        <TableContainer  component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
            <TableCell className="padding-15-left " align="center">No</TableCell>
            <TableCell align="left">Student ID</TableCell>
              <TableCell align="left">Student Name</TableCell>
              <TableCell align="center">Class</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Action</TableCell>
              {/* <TableCell align="center"></TableCell> */}
            </TableRow>
          </TableHead>
         
          <TableBody >
            {students.map((student) => (
              <TableRow key={student.id}>
                 <TableCell className="padding-15-left " align="center">{student.id}</TableCell>
                <TableCell align="left">{student.enroleID}</TableCell>
                <TableCell align="left">{student.name}</TableCell>
                <TableCell align="center">
              
                {student.classes}
     
                </TableCell>
                <TableCell align="center">{student.email}</TableCell>
                <TableCell align="center"><span onClick={() =>deleteEnquiry(student.id)}><DeleteIcon  color="error" /></span></TableCell>
                 {/* <TableCell align="center"><Button>View</Button></TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></Card>
    </div> );
}
 
export default AdmissionDetails;