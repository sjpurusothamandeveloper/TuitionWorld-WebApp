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
 
  const [lastCreatedSection12, setLastCreatedSection12] = useState("A");
  const [lastCreatedSection11, setLastCreatedSection11] = useState("A");
  const [lastCreatedSection10, setLastCreatedSection10] = useState("A");
  const [lastCreatedSection9, setLastCreatedSection9] = useState("A");
  const [lastCreatedSection8, setLastCreatedSection8] = useState("A");
  const [lastCreatedSection7, setLastCreatedSection7] = useState("A");
  const [lastCreatedSection6, setLastCreatedSection6] = useState("A");
  const [lastCreatedSection5, setLastCreatedSection5] = useState("A");
  const [lastCreatedSection4, setLastCreatedSection4] = useState("A");
  const [lastCreatedSection3, setLastCreatedSection3] = useState("A");
  const [lastCreatedSection2, setLastCreatedSection2] = useState("A");
  const [lastCreatedSection1, setLastCreatedSection1] = useState("A");

  const [createdSectionsArr12, setCreatedSectionsArr12] = useState(["A"]);
  const [createdSectionsArr11, setCreatedSectionsArr11] = useState(["A"]);
  const [createdSectionsArr10, setCreatedSectionsArr10] = useState(["A"]);
  const [createdSectionsArr9, setCreatedSectionsArr9] = useState(["A"]);
  const [createdSectionsArr8, setCreatedSectionsArr8] = useState(["A"]);
  const [createdSectionsArr7, setCreatedSectionsArr7] = useState(["A"]);
  const [createdSectionsArr6, setCreatedSectionsArr6] = useState(["A"]);
  const [createdSectionsArr5, setCreatedSectionsArr5] = useState(["A"]);
  const [createdSectionsArr4, setCreatedSectionsArr4] = useState(["A"]);
  const [createdSectionsArr3, setCreatedSectionsArr3] = useState(["A"]);
  const [createdSectionsArr2, setCreatedSectionsArr2] = useState(["A"]);
  const [createdSectionsArr1, setCreatedSectionsArr1] = useState(["A"]);
 


  const sectionArr12 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr11 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr10 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr9 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr8 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr7 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr6 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr5 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr4 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArr1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArrUkg = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArrLkg = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const sectionArrPrekg = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  

  const createNxtNewSection12 = () => {
    let indexOfLastSection = sectionArr12.indexOf(lastCreatedSection12)
    let nextSection = sectionArr12[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr12, ...tempArr]
    setLastCreatedSection12(nextSection)
    setCreatedSectionsArr12(x)
  }

  const createNxtNewSection11 = () => {
    let indexOfLastSection = sectionArr11.indexOf(lastCreatedSection11)
    let nextSection = sectionArr11[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr11, ...tempArr]
    setLastCreatedSection11(nextSection)
    setCreatedSectionsArr11(x)
  }
   
  const createNxtNewSection10 = () => {
    let indexOfLastSection = sectionArr10.indexOf(lastCreatedSection10)
    let nextSection = sectionArr10[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr10, ...tempArr]
    setLastCreatedSection10(nextSection)
    setCreatedSectionsArr10(x)
  }

  const createNxtNewSection9 = () => {
    let indexOfLastSection = sectionArr9.indexOf(lastCreatedSection9)
    let nextSection = sectionArr9[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr9, ...tempArr]
    setLastCreatedSection9(nextSection)
    setCreatedSectionsArr9(x)
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
            <Typography  variant='h6'>Class 12</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection12} >+ Add New Section</Button>
          </StraightFlex>
       
                
                  <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
                  {
            createdSectionsArr12.length > 0 && createdSectionsArr12.map((sect, i) => {
              return (
                    <Grid key={i} item xs={6} sm={3} lg={3} xl={2} md={3} >
                  
                    <ClassCard>
                    <Typography variant='p' fontWeight='bold' fontSize='16px' > 11 - {sect}
                    </Typography>
                    <br />
                    <br />
                  <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                      <Link  to="/academics/subject-management"><Typography variant='p' style={{cursor:"pointer"}}>View Class </Typography></Link>
                      <ArrowForwardIosIcon fontSize='14px' />
                    </span>
                  </ClassCard>
                 </Grid> 
                   )
                  })
                }
                  </Grid>
                 
                  <StraightFlex>
            <Typography  variant='h6'>Class 11</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection11} >+ Add New Section</Button>
          </StraightFlex>
       
                
                  <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
                  {
            createdSectionsArr11.length > 0 && createdSectionsArr11.map((sect, i) => {
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
        <StraightFlex>
            <Typography  variant='h6'>Class 10</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection10} >+ Add New Section</Button>
          </StraightFlex>
        <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
                  {
            createdSectionsArr10.length > 0 && createdSectionsArr10.map((sect, i) => {
              return (
                    <Grid key={i} item xs={6} sm={3} lg={3} xl={2} md={3} >
                  
                    <ClassCard>
                    <Typography variant='p' fontWeight='bold' fontSize='16px' > 10 - {sect}
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
            <Typography  variant='h6'>Class 9</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection9} >+ Add New Section</Button>
          </StraightFlex>
        <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
                  {
            createdSectionsArr9.length > 0 && createdSectionsArr9.map((sect, i) => {
              return (
                    <Grid key={i} item xs={6} sm={3} lg={3} xl={2} md={3} >
                  
                    <ClassCard>
                    <Typography variant='p' fontWeight='bold' fontSize='16px' > 9 - {sect}
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
         </AccordionDetails></Accordion>

      <Accordion className='Accordion-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Middle</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails></Accordion>

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
            <Typography variant='p' >12 - </Typography>
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
            <Typography variant='p' >12 - </Typography>
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
