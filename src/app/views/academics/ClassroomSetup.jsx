import { React, useEffect, useState } from 'react';
import '../academics/index.css';
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
 
  const [lastCreatedSection, setLastCreatedSection] = useState("A");
  const [createdSectionsArr, setCreatedSectionsArr] = useState(["A"]);
  const sectionArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 

  const createNxtNewSection = (x) => {
    let indexOfLastSection = sectionArr.indexOf(lastCreatedSection)
    let nextSection = sectionArr[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    x = [...createdSectionsArr, ...tempArr]
    setLastCreatedSection(nextSection)
    setCreatedSectionsArr(x)
  }

  return (

    <div style={{ padding: "15px" }}>

      <Accordion className='Accordion-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Senior Secondary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
         
          <StraightFlex>
            <Typography  variant='h6'>Class 12</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection} >+ Add New Section</Button>
          </StraightFlex>
       
                
                  <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
                  {
            createdSectionsArr.length > 0 && createdSectionsArr.map((sect, i) => {
              return (
                    <Grid key={i} item xs={6} sm={3} lg={3} xl={2} md={3} >
                  
                    <ClassCard>
                    <Typography variant='p' fontWeight='bold' fontSize='16px' > 11 - {sect}
                    </Typography>
                    <br />
                    <br />
                  <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                      <Typography variant='p' style={{cursor:"pointer"}}>View Class </Typography>
                      <ArrowForwardIosIcon fontSize='14px' />
                    </span>
                  </ClassCard>
                 </Grid> 
                   )
                  })
                }
                  </Grid>
                 
                  <StraightFlex>
            <Typography  variant='h6'>Class 12</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection} >+ Add New Section</Button>
          </StraightFlex>
       
                
                  <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
                  {
            createdSectionsArr.length > 0 && createdSectionsArr.map((sect, i) => {
              return (
                    <Grid key={i} item xs={6} sm={3} lg={3} xl={2} md={3} >
                  
                    <ClassCard>
                    <Typography variant='p' fontWeight='bold' fontSize='16px' > 11 - {sect}
                    </Typography>
                    <br />
                    <br />
                  <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                      <Typography variant='p' style={{cursor:"pointer"}}>View Class </Typography>
                      <ArrowForwardIosIcon fontSize='14px' />
                    </span>
                  </ClassCard>
                 </Grid> 
                   )
                  })
                }
                  </Grid>
                 
            

        </AccordionDetails>
      </Accordion>

      <Accordion className='Accordion-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Secondary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClassCard>
            <Typography variant='p' >12 - {lastCreatedSection}</Typography>
            <br />
            <br />
            <br />
            <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> <Typography variant='p'>View Class </Typography><ArrowForwardIosIcon fontSize='14px' /></span>
          </ClassCard></AccordionDetails></Accordion>

      <Accordion className='Accordion-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Middle</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClassCard>
            <Typography variant='p' >12 - {lastCreatedSection}</Typography>
            <br />
            <br />
            <br />
            <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> <Typography variant='p'>View Class </Typography><ArrowForwardIosIcon fontSize='14px' /></span>
          </ClassCard></AccordionDetails></Accordion>

      <Accordion className='Accordion-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Primary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClassCard>
            <Typography variant='p' >12 - {lastCreatedSection}</Typography>
            <br />
            <br />
            <br />
            <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> <Typography variant='p'>View Class </Typography><ArrowForwardIosIcon fontSize='14px' /></span>
          </ClassCard></AccordionDetails></Accordion>
      <Accordion className='Accordion-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Pre-Primary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClassCard>
            <Typography variant='p' >12 - {lastCreatedSection}</Typography>
            <br />
            <br />
            <br />
            <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> <Typography variant='p'>View Class </Typography><ArrowForwardIosIcon fontSize='14px' /></span>
          </ClassCard></AccordionDetails></Accordion>

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
