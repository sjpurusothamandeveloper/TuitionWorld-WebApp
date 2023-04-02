import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { studentsList } from "./Constants";
import { Avatar, Button, Card, Chip, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const SpaceBetwwenDiv = styled(`div`)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }));



const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase();
  }


const StudentList = ({tempcallback})=> {
  const [selectedStudents, setSelectedStudents] = React.useState([]);
  
  const handleStudentSubmit = (event) => {
    console.log("Selected students:", selectedStudents);
   
    event.preventDefault();
  };
  
 
  return (
    <div>
   
    <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            
              <SpaceBetwwenDiv> <Typography variant='h6'>{`Manage students for 12 - A`}</Typography></SpaceBetwwenDiv>
             
              <br />
              <form onSubmit={handleStudentSubmit}>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={studentsList}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label="Students List" placeholder="Pick them..." />
        )}
        onChange={(event, value) =>{ setSelectedStudents(value); tempcallback(value)}}
        value={selectedStudents}
      />
    
    </form><br />
              <Grid className='students-flex' lg={12} xl={12} md={12} sm={12} xs={12}>
                {selectedStudents.map((stud) => (
                  <Chip key={stud.id} avatar={<Avatar>{capitalizeFirst(stud.name)}</Avatar>} label={stud.name} variant="outlined" />
                ))}</Grid>
            
          </Grid>
    </div>
  );
}

export default StudentList;