import { React, useState, useEffect, useCallback } from "react";
import {
   Grid,
   Button,
   styled,
   Typography,
   Card
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const ClassCard = styled(Card)(() => ({
   width: "100%",
   padding: "12px",
   borderRadius: "8px",
   height: "100px",
   backgroundColor: "#f2f4f8",
}));

const AttendanceIndex = () => {

   const standards = [11, 12, 9];
   const sections = ['A', 'B'];   
   return (
     
         <Card style={{margin:"10px",padding:"20px"}}>
         <h2>Attendance Management</h2>
         <Grid
            container
            direction="row"
            columnSpacing={2}
            rowSpacing={2}
            justifyContent="flex-start"
            alignContent="center"
         > {standards.map(std => (
            sections.map(sec => (
            <Grid item xs={6} sm={3} lg={3} xl={2} md={3}
          >
            <ClassCard key={`${std}-${sec}`}>
            <Typography
                                variant="p"
                                fontWeight="bold"
                                fontSize="16px"
                              >
                             
                             {std}-{sec}
                              </Typography>
                              <br />
                              <br />
                              <span
                                style={{
                                  display: "flex",
                                  color: "#1DA1F2",
                                  flexDirection: "row",
                                  justifyContent: "flex-end",
                                  alignItems: "center",
                                }}
                              >
                                <Link
                                  to="/academic/student-attendance" >
                                  <Typography
                                    variant="p"
                                    style={{ cursor: "pointer" }}
                                  >
                                    Go to Class{" "}
                                  </Typography>
                                </Link>
                                <ArrowForwardIosIcon fontSize="14px" />
                              </span>
            </ClassCard>
          </Grid> ))
      ))}
         </Grid></Card>
     
   )
}

export default AttendanceIndex