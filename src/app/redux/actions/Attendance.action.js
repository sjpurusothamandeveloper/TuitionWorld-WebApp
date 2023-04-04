import axios from 'axios';
import { ATTENDANCE_API } from '../api';

export const ATTENDANCE_ACTION_TYPES ={
    CREATE: "CREATE_ATTENDANCE",
    UPDATE: "UPDATE_ATTENDANCE",
}


const createNewAttendance = (attDetails) => (dispatch) => {

    try {
        const {data} = axios.post(ATTENDANCE_API.CREATE, {attendance: attDetails})
        dispatch({type: ATTENDANCE_ACTION_TYPES.CREATE, payload: data})
    } catch (error) {
        console.log('err',error)
    }
}

const updateNewAttendance = () => {

    // try {
        
    // } catch (error) {
        
    // }
}

const ATTENDANCE_ACTIONS = {
    createNewAttendance,
    updateNewAttendance
}

export default ATTENDANCE_ACTIONS;