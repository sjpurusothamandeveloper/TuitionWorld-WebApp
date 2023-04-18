// Base url

const BaseUrl = "http://localhost:5000/";

// Attendance

export const ATTENDANCE_API = {
    CREATE: `${BaseUrl}attendance`,
    UPDATE:(id) =>  `${BaseUrl}attendance/${id}`
};

// Acadamics

export const ACADAMICS_API = {
    GET_ALL_CLASS :`${BaseUrl}acadamics/class-room`,
    GET_SINGLE_CLASS :`${BaseUrl}acadamics/single-class`,
    POST_CREATE_NEW_CLASS_SECTION: `${BaseUrl}acadamics/new-section`,
    PUT_UPDATE_CLASS_DETAILS: `${BaseUrl}acadamics/update-class-by-section`,
    GET_ALL_STUDENTS: `${BaseUrl}students`,
    GET_ALL_STAFFS: `${BaseUrl}staffs`,
}