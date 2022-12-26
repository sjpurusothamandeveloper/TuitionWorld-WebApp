import * as React from 'react';
import { Grid, Box, Button, styled, Typography, Card, Collapse,DialogActions,DialogTitle ,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow, Dialog} from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';



const SpaceBetwwenDiv = styled(`div`)(() => ({
    width: '100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between' ,
    alignItems:'center'
  }));

export default function SubjectManagement(props) {
  const [open, setOpen] = React.useState(false);
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
             <Link to='/academic/addition-form'><Button>+ Assign Class Teacher</Button></Link></Card>
          </Grid>

          <Grid  item lg={12} xl={12} md={12} sm={12} xs={12}>
          <TableContainer  style={{padding:"10px"}} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SUBJECT NAME</TableCell>
            <TableCell>SUBJECT TYPE</TableCell>
            <TableCell>SUBJECT TEACHER</TableCell>
            <TableCell>CO-TEACHER</TableCell>
            <TableCell>CO-TEACHER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
          
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>Accountancy</TableCell>
              <TableCell> 
             </TableCell>
              <TableCell><Button>Assign</Button></TableCell>
              <TableCell><Button>Assign</Button></TableCell>
              <TableCell><Button><MoreVertIcon /></Button></TableCell>
            </TableRow>

            <TableRow
          
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell>Accountancy</TableCell>
          <TableCell>Accountancy</TableCell>
          <TableCell>Accountancy</TableCell>
          <TableCell>Accountancy</TableCell>
        </TableRow>
       
        
        </TableBody>
      </Table>
    </TableContainer>
    <Button>+ Add Subject</Button>
          </Grid>

          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card style={{padding:"20px"}} xs={12} sm={12} md={12} lg={12} xl={12}>
             <SpaceBetwwenDiv> <Typography variant='h6'>Manage students for 12 - A</Typography></SpaceBetwwenDiv>
             <Link to='/academic/add-student-form'><Button>+ Add Students</Button></Link></Card>
          </Grid>
        </Grid>
        </Card>
      </div>
    );
}