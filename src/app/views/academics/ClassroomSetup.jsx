import { React, useEffect, useState } from 'react';
import { Grid, Box, Button, Accordion, AccordionSummary, AccordionDetails, styled, Typography, Card, Collapse } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { indexOf } from 'lodash';




const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const StraightFlex = styled(`div`)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const JustifyBox = styled(FlexBox)(() => ({
  maxWidth: 320,
  flexDirection: 'column',
  justifyContent: 'center',
}));

const IMG = styled('img')(() => ({
  width: '100%',
  marginBottom: '32px',
}));

const ClassCard = styled(Card)(() => ({
  width: '100%',
  maxWidth: '200px',
  padding: '12px',
  borderRadius: '8px',
  height: '100px',
  backgroundColor: '#f2f4f8'
}));

const CustomGrid = styled(Grid)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  padding: '12px',

}));

const NotFoundRoot = styled(FlexBox)(() => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh !important',
}));

const ClassroomSetup = (props) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [section, setSection] = useState(["A"]);
  
  const classes = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
   
  const addClassCard = (index) =>{
    setSection([...section , classes[index]] )
  }

  // var list= 
  //   {
  //     id: 1,
  //     name: "Avy"
  //   }
  // ;
  // useEffect(() => {
   
  //   setSection([...section, list])

  // }, [])
  // console.log("hii",section)
  // section = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  // const [categories,setCategories]=useState([]);
  // categories=["senior-secondary","secondary","middle","primary","pre-primary"]

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <div >
      <Card style={{padding:"15px"}}>
      <Accordion style={{marginTop:"10px",borderRadius:"10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Senior Secondary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StraightFlex><Typography>Class 12</Typography><Button onClick={addClassCard} >Add New Class</Button></StraightFlex>
        
          <ClassCard>
            <Typography variant='p' > 12 - {section}
             {/* {section && section.map
((item) => <p>{item.name}</p>)} */}
</Typography>
            <br />
            <br />
            <br />
            <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> <Typography variant='p'>View Class </Typography><ArrowForwardIosIcon fontSize='14px' /></span>
          </ClassCard></AccordionDetails></Accordion>
         
      <Accordion style={{marginTop:"10px",borderRadius:"10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Secondary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClassCard>
            <Typography variant='p' >12 - {section}</Typography>
            <br />
            <br />
            <br />
            <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> <Typography variant='p'>View Class </Typography><ArrowForwardIosIcon fontSize='14px' /></span>
          </ClassCard></AccordionDetails></Accordion>
          
      <Accordion style={{marginTop:"10px",borderRadius:"10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Middle</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClassCard>
            <Typography variant='p' >12 - {section}</Typography>
            <br />
            <br />
            <br />
            <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> <Typography variant='p'>View Class </Typography><ArrowForwardIosIcon fontSize='14px' /></span>
          </ClassCard></AccordionDetails></Accordion>
         
      <Accordion style={{marginTop:"10px",borderRadius:"10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Primary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClassCard>
            <Typography variant='p' >12 - {section}</Typography>
            <br />
            <br />
            <br />
            <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> <Typography variant='p'>View Class </Typography><ArrowForwardIosIcon fontSize='14px' /></span>
          </ClassCard></AccordionDetails></Accordion> 
      <Accordion style={{marginTop:"10px",borderRadius:"10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Pre-Primary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClassCard>
            <Typography variant='p' >12 - {section}</Typography>
            <br />
            <br />
            <br />
            <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> <Typography variant='p'>View Class </Typography><ArrowForwardIosIcon fontSize='14px' /></span>
          </ClassCard></AccordionDetails></Accordion>
          </Card>
    </div>

    // <NotFoundRoot>
    //   <JustifyBox>
    //     <IMG src="/assets/images/illustrations/404.svg" alt="" />
    //     <Button
    //       color="primary"
    //       variant="contained"
    //       sx={{ textTransform: 'capitalize' }}
    //       onClick={() => navigate(-1)}
    //     >
    //       Classroom Setup
    //     </Button>
    //   </JustifyBox>
    // </NotFoundRoot>
  );
};

export default ClassroomSetup;
