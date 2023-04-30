import { React, useEffect, useState } from "react";
import "../academics/index.css";
import {
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  Typography,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSnackbar } from "notistack";
import ACADAMICS_ACTIONS from "app/redux/actions/Acadamics.actions";
import { useDispatch, useSelector } from "react-redux";
import { getClassTypeKey } from "./utils/common";

const StraightFlex = styled(`div`)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));


const ClassCard = styled(Card)(() => ({
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  height: "100px",
  backgroundColor: "#f2f4f8",
}));

const ClassroomSetup = () => {

  const dispatch = useDispatch();

  const { allClassRooms, added } = useSelector(
    (store) => store.acadamics
  );
  const [expanded, setExpanded] = useState({});
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded({ ...expanded, [panel]: isExpanded });
  };
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if(added && added === "new section added") {
      enqueueSnackbar("New Section Added", {
        variant: "success",
        persist: false,
        autoHideDuration: 2000,
      });
      dispatch(ACADAMICS_ACTIONS.clearAcadamicsStates({
        added: null
      }))
    }
  }, [dispatch, enqueueSnackbar, added])
  useEffect(() => {
    dispatch(ACADAMICS_ACTIONS.getAllClassRooms("643932a60b60b95484f9d253"));
  }, [dispatch]);

  const newSectionHandler = async (tp, std) => {
    const data = {
      standard: std,
      classType: getClassTypeKey(tp),
    };
    dispatch(ACADAMICS_ACTIONS.createNewClassSection(data));
  };
  const SingleClassTypeItem = ({
    classType,
    classesByClassType,
    newSectionHandler,
  }) => {
    const panel = classType;
    const isExpanded = expanded[panel];
    return (
      <Accordion className="Accordion-main"  expanded={isExpanded}
      onChange={handleChange(panel)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Typography variant="h6">{classType}</Typography>{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {classesByClassType.length > 0 &&
            classesByClassType.map((classByType, k1) => {
              const keyLevel1 = k1;
              return (
                <div key={keyLevel1}>
                  <StraightFlex>
                    <Typography variant="h6">{`Class ${classByType.standards}`}</Typography>{" "}
                    <Button
                      style={{ float: "right" }}
                      onClick={() => newSectionHandler(classType, classByType.standards)}
                    >
                      + Add New Section
                    </Button>
                  </StraightFlex>

                  <Grid
                    container
                    direction="row"
                    columnSpacing={2}
                    rowSpacing={2}
                    justifyContent="flex-start"
                    alignContent="center"
                  >
                    {classByType.sections.length > 0 &&
                      classByType.sections.map((sect, k2) => {
                        const keyLevel2 = k2;
                        return (
                          <Grid
                            key={keyLevel2}
                            item
                            xs={6}
                            sm={3}
                            lg={3}
                            xl={2}
                            md={3}
                          >
                            <ClassCard>
                              <Typography
                                variant="p"
                                fontWeight="bold"
                                fontSize="16px"
                              >
                             
                                {`${classByType.standards} - ${sect}`}
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
                                  to="/academic/class-management"
                                  state={{ classDetails: {
                                    standard: classByType.standards,
                                    section: sect,
                                  } }}
                                  replace={true}
                                >
                                  <Typography
                                    variant="p"
                                    style={{ cursor: "pointer" }}
                                  >
                                    View Class{" "}
                                  </Typography>
                                </Link>
                                <ArrowForwardIosIcon fontSize="14px" />
                              </span>
                            </ClassCard>
                          </Grid>
                        );
                      })}
                  </Grid>
                </div>
              );
            })}
        </AccordionDetails>
      </Accordion>
    );
  };
  return (
    <div style={{ padding: "15px" }}>
      {allClassRooms.length > 0 &&
        allClassRooms.map((item, k) => {
          const key = k;
          return (
            <SingleClassTypeItem
              classesByClassType={item.class}
              classType={item.classType}
              newSectionHandler={newSectionHandler}
              key={key}
            />
          );
        })}
    </div>
  );
};

export default ClassroomSetup;
