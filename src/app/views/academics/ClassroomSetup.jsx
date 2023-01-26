import { React, useEffect, useState } from 'react';
import '../academics/index.css';
import { Grid, Box, Button, Accordion, AccordionSummary, AccordionDetails, styled, Typography, Card, Collapse } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { indexOf } from 'lodash';
import { getSection } from 'app/services/AppService';




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
  const [lastCreatedSectionUkg, setLastCreatedSectionUkg] = useState("A");
  const [lastCreatedSectionLkg, setLastCreatedSectionLkg] = useState("A");
  const [lastCreatedSectionPreKg, setLastCreatedSectionPreKg] = useState("A");

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
  const [createdSectionsArrUkg, setCreatedSectionsArrUkg] = useState(["A"]);
  const [createdSectionsArrLkg, setCreatedSectionsArrLkg] = useState(["A"]);
  const [createdSectionsArrPreKg, setCreatedSectionsArrPreKg] = useState(["A"]);
  const [sectionListArr, setSectionListArr] = useState([])
  const [sectionDefList, setSectionDefList] = useState([])

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
  const sectionArrPreKg = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  useEffect(() => {
    getInitialSections()
  }, [])

  // const handleGetSections = async () => {
  //   let saveSection = await getSection()
  //   console.log("SectionsList", saveSection)
  //   setSectionListArr(saveSection)
  // }

  const createNxtNewSection12 = async () => {
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

  const createNxtNewSection8 = () => {
    let indexOfLastSection = sectionArr8.indexOf(lastCreatedSection8)
    let nextSection = sectionArr8[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr8, ...tempArr]
    setLastCreatedSection8(nextSection)
    setCreatedSectionsArr8(x)
  }

  const createNxtNewSection7 = () => {
    let indexOfLastSection = sectionArr7.indexOf(lastCreatedSection7)
    let nextSection = sectionArr7[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr7, ...tempArr]
    setLastCreatedSection7(nextSection)
    setCreatedSectionsArr7(x)
  }

  const createNxtNewSection6 = () => {
    let indexOfLastSection = sectionArr6.indexOf(lastCreatedSection6)
    let nextSection = sectionArr6[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr6, ...tempArr]
    setLastCreatedSection6(nextSection)
    setCreatedSectionsArr6(x)
  }

  const createNxtNewSection5 = () => {
    let indexOfLastSection = sectionArr5.indexOf(lastCreatedSection5)
    let nextSection = sectionArr5[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr5, ...tempArr]
    setLastCreatedSection5(nextSection)
    setCreatedSectionsArr5(x)
  }

  const createNxtNewSection4 = () => {
    let indexOfLastSection = sectionArr4.indexOf(lastCreatedSection4)
    let nextSection = sectionArr4[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr4, ...tempArr]
    setLastCreatedSection4(nextSection)
    setCreatedSectionsArr4(x)
  }

  const createNxtNewSection3 = () => {
    let indexOfLastSection = sectionArr3.indexOf(lastCreatedSection3)
    let nextSection = sectionArr3[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr3, ...tempArr]
    setLastCreatedSection3(nextSection)
    setCreatedSectionsArr3(x)
  }

  const createNxtNewSection2 = () => {
    let indexOfLastSection = sectionArr2.indexOf(lastCreatedSection2)
    let nextSection = sectionArr2[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr2, ...tempArr]
    setLastCreatedSection2(nextSection)
    setCreatedSectionsArr2(x)
  }

  const createNxtNewSection1 = () => {
    let indexOfLastSection = sectionArr1.indexOf(lastCreatedSection1)
    let nextSection = sectionArr1[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArr1, ...tempArr]
    setLastCreatedSection1(nextSection)
    setCreatedSectionsArr1(x)
  }

  const createNxtNewSectionUkg = () => {
    let indexOfLastSection = sectionArrUkg.indexOf(lastCreatedSectionUkg)
    let nextSection = sectionArrUkg[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArrUkg, ...tempArr]
    setLastCreatedSectionUkg(nextSection)
    setCreatedSectionsArrUkg(x)
  }

  const createNxtNewSectionLkg = () => {
    let indexOfLastSection = sectionArrLkg.indexOf(lastCreatedSectionLkg)
    let nextSection = sectionArrLkg[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArrLkg, ...tempArr]
    setLastCreatedSectionLkg(nextSection)
    setCreatedSectionsArrLkg(x)
  }

  const createNxtNewSectionPreKg = () => {
    let indexOfLastSection = sectionArrPreKg.indexOf(lastCreatedSectionPreKg)
    let nextSection = sectionArrPreKg[indexOfLastSection + 1]
    let tempArr = []
    tempArr.push(nextSection)
    let x = [...createdSectionsArrPreKg, ...tempArr]
    setLastCreatedSectionPreKg(nextSection)
    setCreatedSectionsArrPreKg(x)
  }
  
  const getInitialSections = async () => {
    // let defSectionListResp = await getSectionByClass()
    // console.log("Sect -->", defSectionListResp)
    // if (defSectionListResp.statusCode === 200) {
    //   setSectionDefList(defSectionListResp.data)
    // }
    // else {
    //   setSectionDefList([])
    // }
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
            <Typography variant='h6'>Class 12</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection12} >+ Add New Section</Button>
          </StraightFlex>


          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArr12.length > 0 && createdSectionsArr12.map((sect, i) => {
                return (
                  <Grid key={i} item xs={6} sm={3} lg={3} xl={2} md={3} >
                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > 12 - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                      <Link to="/academic/class-management" state={{ classDetails: '12 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid>

          <StraightFlex>
            <Typography variant='h6'>Class 11</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection11} >+ Add New Section</Button>
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
                        <Link to="/academic/class-management" state={{ classDetails: '11 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
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
            <Typography variant='h6'>Class 10</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection10} >+ Add New Section</Button>
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
                        <Link to="/academic/class-management" state={{ classDetails: '10 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid>
          <StraightFlex>
            <Typography variant='h6'>Class 9</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection9} >+ Add New Section</Button>
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
                        <Link to="/academic/class-management" state={{ classDetails: '9 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>)
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
          <StraightFlex>
            <Typography variant='h6'>Class 8</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection8} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArr8.length > 0 && createdSectionsArr8.map((sect, i) => {
                return (
                  <Grid key={i} item xs={6} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > 8 - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: '8 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid>
          <StraightFlex>
            <Typography variant='h6'>Class 7</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection7} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArr7.length > 0 && createdSectionsArr7.map((sect, i) => {
                return (
                  <Grid key={i} item xs={6} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > 7 - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: '7 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid>
          <StraightFlex>
            <Typography variant='h6'>Class 6</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection6} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArr6.length > 0 && createdSectionsArr6.map((sect, i) => {
                return (
                  <Grid key={i} item xs={6} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > 6 - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: '6 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>)
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
          <Typography><Typography variant='h6'>Primary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StraightFlex>
            <Typography variant='h6'>Class 5</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection5} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArr5.length > 0 && createdSectionsArr5.map((sect, i) => {
                return (
                  <Grid key={i} item xs={5} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > 6 - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: '5 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid>
          <StraightFlex>
            <Typography variant='h6'>Class 4</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection4} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArr4.length > 0 && createdSectionsArr4.map((sect, i) => {
                return (
                  <Grid key={i} item xs={5} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > 4 - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: '4 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid>
          <StraightFlex>
            <Typography variant='h6'>Class 3</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection3} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArr3.length > 0 && createdSectionsArr3.map((sect, i) => {
                return (
                  <Grid key={i} item xs={5} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > 3 - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: '3 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid>
          <StraightFlex>
            <Typography variant='h6'>Class 2</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection2} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArr2.length > 0 && createdSectionsArr2.map((sect, i) => {
                return (
                  <Grid key={i} item xs={5} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > 2 - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: '2 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>)
              })
            }
          </Grid>
          <StraightFlex>
            <Typography variant='h6'>Class 1</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSection1} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArr1.length > 0 && createdSectionsArr1.map((sect, i) => {
                return (
                  <Grid key={i} item xs={5} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > 1 - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: '1 - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid></AccordionDetails></Accordion>
      <Accordion className='Accordion-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Typography variant='h6'>Pre-Primary</Typography>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StraightFlex>
            <Typography variant='h6'>Class UKG</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSectionUkg} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArrUkg.length > 0 && createdSectionsArrUkg.map((sect, i) => {
                return (
                  <Grid key={i} item xs={5} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > UKG - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: 'UKG - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid>
          <StraightFlex>
            <Typography variant='h6'>Class LKG</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSectionLkg} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArrLkg.length > 0 && createdSectionsArrLkg.map((sect, i) => {
                return (
                  <Grid key={i} item xs={5} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > LKG - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: 'LKG - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>
                )
              })
            }
          </Grid>
          <StraightFlex>
            <Typography variant='h6'>Class PREKG</Typography> <Button style={{ float: "right" }} onClick={createNxtNewSectionPreKg} >+ Add New Section</Button>
          </StraightFlex>
          <Grid container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="flex-start" alignContent="center" >
            {
              createdSectionsArrPreKg.length > 0 && createdSectionsArrPreKg.map((sect, i) => {
                return (
                  <Grid key={i} item xs={5} sm={3} lg={3} xl={2} md={3} >

                    <ClassCard>
                      <Typography variant='p' fontWeight='bold' fontSize='16px' > PREKG - {sect}
                      </Typography>
                      <br />
                      <br />
                      <span style={{ display: "flex", color: "#1DA1F2", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <Link to="/academic/class-management" state={{ classDetails: 'PREKG - ' + sect }} ><Typography variant='p' style={{ cursor: "pointer" }}>View Class </Typography></Link>
                        <ArrowForwardIosIcon fontSize='14px' />
                      </span>
                    </ClassCard>
                  </Grid>)
              })
            }
          </Grid>
        </AccordionDetails></Accordion>

    </div>
  );
};

export default ClassroomSetup;
