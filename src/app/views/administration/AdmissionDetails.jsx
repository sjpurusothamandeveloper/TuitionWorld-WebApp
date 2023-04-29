import React, { Component ,useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { Grid,AppBar,Tabs,Tab, Box,styled, Typography, Card, Collapse,DialogActions,DialogTitle,DialogContent,TextField,DialogContentText ,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow, Dialog, Button} from '@mui/material';
import './index.css';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { indexOf } from 'lodash';
import { getAdmission } from 'app/services/AppService';


const SpaceBetwwenDiv = styled(`div`)(() => ({
    width: '100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between' ,
    alignItems:'center'
  }));

const AdmissionDetails = () => {

    const [value, setValue] = useState(0);
   
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };


      useEffect(() => {
        handleGetAdmissionList()
      }, [])    

      // const deleteEnquiry = id => {
      // setStudents(students.filter(student => student.id != id))
      // };

      const [admissionList, setAdmissionList] = useState([])
      const handleGetAdmissionList = async () => {
        try {
          const responseFromApi = await getAdmission()
          console.log("getCall", responseFromApi)
          if (responseFromApi && responseFromApi.statusCode === 200) {
            if (responseFromApi.data && responseFromApi.data.length > 0) {
              setAdmissionList(responseFromApi.data)
            }
            else {
              setAdmissionList([])
            }
          }
    
        }
        catch (err) {
          console.log(err)
        }
      }


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
            {admissionList.map((student) => (
              <TableRow>
                 {/* <TableCell className="padding-15-left " align="center">{student.id}</TableCell> */}
                <TableCell align="left">{student.mobileNumber}</TableCell>
                <TableCell align="left">{student.fullNname}</TableCell>
                <TableCell align="center">
              
                {student.email}
     
                </TableCell>
                <TableCell align="center">{student.schoolBoard}</TableCell>
                {/* <TableCell align="center"><span onClick={() =>deleteEnquiry(student.id)}><DeleteIcon  color="error" /></span></TableCell> */}
                 {/* <TableCell align="center"><Button>View</Button></TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></Card>
    </div> );
}
 
export default AdmissionDetails;