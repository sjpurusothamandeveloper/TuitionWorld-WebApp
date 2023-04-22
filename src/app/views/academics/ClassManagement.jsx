import { React, useState, useEffect, useCallback } from "react";
import {
  Grid,
  Button,
  styled,
  Typography,
  Card,
  TextField,
  Chip,
  Avatar,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import pic1 from "../../assets/images/2.jpg";
import StudentList from "./StudentList";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import ACADAMICS_ACTIONS from "app/redux/actions/Acadamics.actions";
import DialogBox from "app/components/DialogBox";
import EnhancedTable from "app/components/EnhancedTable";
import DropDown from "app/components/DropDown";
import "./index.css";

const SpaceBetwwenDiv = styled(`div`)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));


const ModalBodyContent = ({ forClassTeacher, onChange, modalStateValues, allStaffs }) => {
  return (
    <Grid
      marginY={5}
      container
      columnSpacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {!forClassTeacher && (
        <Grid item xs={4}>
          <TextField
            fullWidth
            type="text"
            name="name"
            label="Subject"
            variant="outlined"
            defaultValue={modalStateValues?.subName}
            onChange={(e) => onChange("subName", e.target.value)}
          />
        </Grid>
      )}

      <Grid item xs={4}>
        <DropDown
          name="staff"
          label="Select Teacher"
          onChange={(op) => onChange("staff", op)}
          options={allStaffs?.map((item) => ({
            id: item._id,
            name: `${item.firstName},${item.lastName}`,
          }))}
          value={modalStateValues?.staff}
        />
      </Grid>
    </Grid>
  );
};

export default function SubjectManagement() {
  const location = useLocation();
  const {
    classDetails: { standard, section },
  } = location.state;

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    singleClassRoomDetails,
    allStaffs,
    allStudents,
    updated,
  } = useSelector((store) => store.acadamics);

  useEffect(() => {
    dispatch(ACADAMICS_ACTIONS.getAllStaffs());
    dispatch(ACADAMICS_ACTIONS.getAllStudents());

    return () => {
      dispatch(ACADAMICS_ACTIONS.setInitialValues());
    };
  }, [dispatch]);

  useEffect(() => {
    setTableData((pr) => ([]))
    if (standard && section) {
      dispatch(
        ACADAMICS_ACTIONS.getSingleClassRoom({
          standard,
          section,
        })
      );
    }
  }, [standard, section, dispatch]);

  useEffect(() => {
    if(updated && updated === "updated") {
      enqueueSnackbar("Updated Successfully", {
        variant: "success",
        persist: false,
        autoHideDuration: 2000,
      });
      dispatch(ACADAMICS_ACTIONS.clearAcadamicsStates({
        updated: null
      }))
    }
  }, [dispatch, enqueueSnackbar, updated])
  const [assignedClassTeacher, setAssignedClassTeacher] = useState({
    id: "",
    name: "",
  });
  const [tableData, setTableData] = useState([]);
  const [tablePreData, setTablePreData] = useState([]);
  const [studentListArr, setstudentListArr] = useState([]);

  const [modalState, setModalState] = useState({
    show: "",
  });

  const [modalStateValues, setModalStateValues] = useState({
    subName: "",
    staff: "",
  });

  useEffect(() => {
    if (singleClassRoomDetails) {
      // table data
      const subjTable = singleClassRoomDetails?.subjects;
      let temp = [];
      if (subjTable && subjTable.length > 0) {
        subjTable.map((item, k) => {
          const ke = k + 1;
          temp.push({
            subject: item?.subjectName,
            staffName: item?.subStaff,
            key: ke,
            staffRefId: item?.staffId,
          });
        });
        setTablePreData(temp);
      }

      // assigned class teacher
      const apiCT = singleClassRoomDetails?.classTeacher;
      setAssignedClassTeacher({
          ...apiCT
      })

      // students
      const selectedStudents = singleClassRoomDetails?.students;
      setstudentListArr(selectedStudents);

    }
  }, [singleClassRoomDetails]);

  useEffect(() => {
    let temp = [];
    if (tablePreData && tablePreData.length > 0) {
      tablePreData.map((item) => {

        temp.push({
          subject: item?.subject,
          staffName: item?.staffName ? (
            <Chip
              avatar={<Avatar alt="Natacha" src={pic1} />}
              label={item.staffName}
              variant="outlined"
            />
          ) : (
            "click edit to assign"
          ),

          edit: (
            <Button
              onClick={() =>
                handleModalState("EDIT_SUBJECT_STAFF", {
                  subject: item.subject,
                  staffName: item.staffName,
                  key: item.key,
                  staffRefId: item.staffRefId,

                })
              }
            >{`Edit`}</Button>
          ),
          delete: (
            <Button
              onClick={() =>
                handleModalState("DELETE_SUBJECT_STAFF", { key: item.key })
              }
            >{`Delete`}</Button>
          ),
          hiddenValues: item,
        });
      });
    }
    setTableData(temp);
  }, [handleModalState, tablePreData]);

  const handleInputChange = (key, value) => {

    return setModalStateValues((prev) => ({ ...prev, [key]: value }));
  };


  const getObj = (arr = [], id) => {
    const res = arr.filter((ob) => ob.id === id);

    return res[0];
  };

  const getUpdatedClassTeacher = (vl) => {
    let data = {
      name: "",
      id: "",
    };
    const clName = getObj(
      allStaffs?.map((item) => ({
        id: item._id,
        name: `${item.firstName},${item.lastName}`,
      })),
      vl
    );
    return {
      ...data,
      ...clName,
    };
  };
  const handleModalState = useCallback(
    (type, data) => {

      switch (type) {
        case "ASSIGN_CLASS_TEACHER":
          setModalState({
            show: "ASSIGN",
          });
          break;
        case "EDIT_SUBJECT_STAFF":
          setModalStateValues((prev) => ({...prev, staff: data.staffRefId, subName: data.subject}))
          setModalState({
            show: "EDIT",
            rowId: data.key,
          });
          break;
        case "ADD_SUBJECT_STAFF":
          setModalState({
            show: "ADD",
          });
          break;
        case "DELETE_SUBJECT_STAFF":
          setModalState({
            show: "DELETE",
            rowId: data.key,
          });

          break;
        default:
          setModalStateValues({ subName: "", staff: "" });
          break;
      }
    },
    []
  );




  const handleModalActionStates = (k, val) => {
    const assignT = modalStateValues.staff && getUpdatedClassTeacher(modalStateValues.staff);
    const filterById = modalState?.rowId && tablePreData?.filter((it) => it.key !== modalState.rowId);

    let temp;
    switch (k) {
      case "ADD":
        const newSub = {
          subject: modalStateValues.subName,
          staffName: assignT?.name,
          staffRefId: assignT?.id,
          key: tablePreData.length + 1,
        };
        
        setTablePreData((prev) => [...prev, newSub]);

        break;

      case "ASSIGN":
        setAssignedClassTeacher(assignT);
        handleModalActionStates("CLOSE");
        break;

      case "EDIT":
        const edited = {
          subject: modalStateValues.subName,
          staffName: assignT?.name,
          staffRefId: assignT?.id,
          key: modalState.rowId,
        };

        setTablePreData((prev) => [...filterById, edited]);
        handleModalState("CLOSE");
        break;

      case "DELETE":
        setTablePreData((prev) => [...filterById]);
        handleModalState("CLOSE");
        break;
      case "CLOSE":
        setModalStateValues(null);
        break;

      default:
        break;
    }

    setModalState(temp);
  };

// final
  const onSubmitClassDetails = () => {
    const payload = {
      tablePreData,
      assignedClassTeacher,
      studentListArr,
      standard, section,
      classId: singleClassRoomDetails?.classId,
    }
    dispatch(ACADAMICS_ACTIONS.updateSingleClassRoom(payload));
  };

  return (
    <div>
      <Card style={{ padding: "15px" }}>
        <Grid
          container
          direction="row"
          rowSpacing={2}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card
              style={{ padding: "20px" }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <SpaceBetwwenDiv>
                <Typography variant="h6">
                  {standard && section ? `${standard}-${section}` : ""}
                </Typography>
              </SpaceBetwwenDiv>
            </Card>
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card
              style={{ padding: "20px" }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <SpaceBetwwenDiv>
                {" "}
                <Typography variant="h6">
                  {`Manage class teacher, attendance for`}{" "}
                  {`${standard}-${section}`}
                </Typography>
                {/* <Button>{`Manage Attendance`}</Button> */}
              </SpaceBetwwenDiv>
              {/* one ================================================================= */}
              {assignedClassTeacher.name ? (
                <Chip
                  avatar={<Avatar alt="Natacha" src={pic1} />}
                  label={assignedClassTeacher.name}
                  variant="outlined"
                />
              ) : (
                <Button
                  onClick={() => handleModalState("ASSIGN_CLASS_TEACHER")}
                >
                  <Typography color="primary">{`+ Assign Class Teacher`}</Typography>
                </Button>
              )}
            </Card>
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <EnhancedTable
              heading={[
                "SUBJECT NAME",
                "SUBJECT TEACHER",
                "EDIT SUBJECT",
                "DELETE SUBJECT",
              ]}
              rows={tableData}
              callBackFn={(da) => console.log("subjects", da)}
            />
            <Button
              onClick={() => handleModalState("ADD_SUBJECT_STAFF")}
            >{`+ Add Subject`}</Button>
          </Grid>
          {/* Final student chips list */}
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Card
              style={{ padding: "20px" }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <StudentList
                defaultValue={studentListArr}
                tempcallback={(selectedStud) =>
                  setstudentListArr(selectedStud)
                }
                studentList={allStudents}
                forClass={`${standard}-${section}`}
              />
            </Card>
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Button
              className="submit-btn"
              variant="contained"
              onClick={onSubmitClassDetails}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Card>

      {/* ==========ADD============ */}
      {modalState && modalState.show === "ADD" && (
        <DialogBox
          title={"Add Subject"}
          closeModal={() => handleModalActionStates("CLOSE")}
          isModalOpen
          onAction={() => handleModalActionStates("ADD")}
          actionText={"Add"}
          cancelText={"Cancel"}
        >
          <ModalBodyContent allStaffs={allStaffs} modalStateValues={modalStateValues} onChange={handleInputChange} />
        </DialogBox>
      )}
      {/* ==========Assign============ */}

      {modalState && modalState.show === "ASSIGN" && (
        <DialogBox
          title={"Add Class Teacher"}
          closeModal={() => handleModalActionStates("CLOSE")}
          isModalOpen
          onAction={() => handleModalActionStates("ASSIGN")}
          actionText={"Assign"}
          cancelText={"Cancel"}
        >
          <ModalBodyContent forClassTeacher allStaffs={allStaffs} modalStateValues={modalStateValues} onChange={handleInputChange} />
        </DialogBox>
      )}
      {/* ==========Edit============ */}

      {modalState && modalState.show === "EDIT" && (
        <DialogBox
          title={"Edit Class Teacher"}
          closeModal={() => handleModalActionStates("CLOSE")}
          isModalOpen
          onAction={() => handleModalActionStates("EDIT")}
          actionText={"Update"}
          cancelText={"Cancel"}
        >
          <ModalBodyContent allStaffs={allStaffs} modalStateValues={modalStateValues} onChange={handleInputChange} />
        </DialogBox>
      )}
      {/* ==========Edit============ */}

      {modalState && modalState.show === "DELETE" && (
        <DialogBox
          title={"Delete Confirmation"}
          closeModal={() => handleModalActionStates("CLOSE")}
          isModalOpen
          onAction={() => handleModalActionStates("DELETE")}
          actionText={"Confirm"}
          cancelText={"Cancel"}
          bodyDesc={"Do you really wants to delete ?"}
        ></DialogBox>
      )}
    </div>
  );
}
