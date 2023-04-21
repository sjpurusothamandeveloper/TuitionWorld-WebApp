import axios from 'axios';
import { ACADAMICS_API } from '../api';
import { getReqPayloadForSingleClass, reStructureAllClassPayload, reStructureAllStaffsPayload, reStructureAllStudentsPayload, reStructureClassPayload } from '../payload/acadamics.payload';

export const ACADAMICS_ACTION_TYPES ={
    GET_ALL_CLASS_ROOMS: "GET_ALL_CLASS_ROOMS",
    CREATE_NEW_SECTION: "CREATE_NEW_SECTION",
    GET_SINGLE_CLASS_DETAILS: "GET_SINGLE_CLASS_DETAILS",
    UPDATE_SINGLE_CLASS_DETAILS: "UPDATE_SINGLE_CLASS_DETAILS",
    GET_ALL_STUDENTS_LIST: "GET_ALL_STUDENTS_LIST",
    GET_ALL_STAFFS_LIST: "GET_ALL_STAFFS_LIST",
    CLEAR_ACADAMICS_STATE: "CLEAR_ACADAMICS_STATE",
    SET_INITIAL_VALUES: "SET_INITIAL_VALUES",
}

const getUserId = () => {
    return sessionStorage.getItem('userId');
}
const getAllClassRooms =  (userId) => async (dispatch) =>{

    try {
        const {data} = await axios.get(ACADAMICS_API.GET_ALL_CLASS, { params: { userId: getUserId() } });

        const re = reStructureAllClassPayload(data)
        if (re) {
            dispatch({type: ACADAMICS_ACTION_TYPES.GET_ALL_CLASS_ROOMS, payload: re})
        }
    } catch (error) {
        console.log('err',error)
    }
}

const createNewClassSection = (det) => async (dispatch) => {

    try {

        const {data} = await axios.post(ACADAMICS_API.POST_CREATE_NEW_CLASS_SECTION, {...det,userId:getUserId() })

        if (data && data.msg === "new section added") {
            dispatch({type: ACADAMICS_ACTION_TYPES.CREATE_NEW_SECTION, payload: data})
            dispatch(getAllClassRooms(getUserId()))
        }
    } catch (error) {
        console.log('err',error)
    }
}

const getSingleClassRoom = ({ standard, section}) => async (dispatch) =>{

    try {
        const {data} = await axios.get(ACADAMICS_API.GET_SINGLE_CLASS, { params: { userId:getUserId(), section, standard } });

        const re = reStructureClassPayload(data)
        if (re) {
            dispatch({type: ACADAMICS_ACTION_TYPES.GET_SINGLE_CLASS_DETAILS, payload: re})
        }

    } catch (error) {
        console.log('err',error)
    }
}

const updateSingleClassRoom = (dat) => async (dispatch) =>{

    try {
        const restrPayload = getReqPayloadForSingleClass(dat);
        const {data} = await axios.post(ACADAMICS_API.PUT_UPDATE_CLASS_DETAILS,  { classId: dat.classId,details:restrPayload } );
        if (data.msg === "updated") {
            dispatch({type: ACADAMICS_ACTION_TYPES.UPDATE_SINGLE_CLASS_DETAILS, payload: data})
            dispatch(getSingleClassRoom({userId: getUserId(), section: dat.section, standard: dat.standard,}))
        }
    } catch (error) {
        console.log('err',error)
    }
}
const getAllStudents =  () => async (dispatch) =>{

    try {
        const {data} = await axios.get(ACADAMICS_API.GET_ALL_STUDENTS);

        const re = reStructureAllStudentsPayload(data.data)

        if (re) {
            dispatch({type: ACADAMICS_ACTION_TYPES.GET_ALL_STUDENTS_LIST, payload: re})
        }
    } catch (error) {
        console.log('err',error)
    }
}

const getAllStaffs =  () => async (dispatch) =>{

    try {
        const {data} = await axios.get(ACADAMICS_API.GET_ALL_STAFFS);

        const re = reStructureAllStaffsPayload(data.data)
        if (re) {
            dispatch({type: ACADAMICS_ACTION_TYPES.GET_ALL_STAFFS_LIST, payload: re})
        }
    } catch (error) {
        console.log('err',error)
    }
}

const clearAcadamicsStates = (data) => async (dispatch) => {
    try {
        dispatch({type: ACADAMICS_ACTION_TYPES.CLEAR_ACADAMICS_STATE, payload: data})
    } catch (error) {
        console.log('err',error)
    }
}
const setInitialValues = () => async (dispatch) => {
    try {
        dispatch({type: ACADAMICS_ACTION_TYPES.SET_INITIAL_VALUES})
    } catch (error) {
        console.log('err',error)
    }
}
const ACADAMICS_ACTIONS = {
    createNewClassSection,
    getAllClassRooms,
    getSingleClassRoom,
    updateSingleClassRoom,
    getAllStaffs,
    getAllStudents,
    clearAcadamicsStates,
    setInitialValues,
}

export default ACADAMICS_ACTIONS;