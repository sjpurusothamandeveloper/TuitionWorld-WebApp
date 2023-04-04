// Base url

const BaseUrl = "http://localhost:5000/";

// Attendance

export const ATTENDANCE_API = {
    CREATE: `${BaseUrl}attendance`,
    UPDATE:(id) =>  `${BaseUrl}attendance/${id}`
};