import { staffByIdUrl, leaveListUrl,admissionUrl,attendanceUrl, leaveApplyUrl, sectionsListUrl, staffCreationUrl, staffListUrl, studentCreationUrl, userAuthUrl, userCreationUrl, studentListUrl, getAttendanceUrl } from "app/services/Services";
import axios from "axios";

export const saveStaff = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.post(staffCreationUrl, payloadObj)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const getStaffs = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.get(staffListUrl)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const getStaffById = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.post(staffByIdUrl, payloadObj)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}


export const saveStudent = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.post(studentCreationUrl, payloadObj)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const getStudents = async(payload) => {
        let apiResp = await axios.get(studentListUrl)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const saveUser = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.post(userCreationUrl, payloadObj)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const getUserAuth = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.post(userAuthUrl, payloadObj)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const getSection = async() => {
        let apiResp = await axios.get(sectionsListUrl)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const getSectionByClass = async() => {
    let apiResp = await axios.get(sectionsListUrl)
        .then(res => {
            console.log("Data", res)
            return res.data;    
        })
        .catch(err => {
            console.log(err)
            return err
        })
        return apiResp;
} 

export const createSection = async(payload) => {
    let apiResp = await axios.post(sectionsListUrl, payload)
        .then(res => {
            console.log("Data", res)
            return res.data;    
        })
        .catch(err => {
            console.log(err)
            return err
        })
        return apiResp;
} 

export const getLeaves = async () => {
    let apiResp = await axios.get(leaveListUrl)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const saveLeave = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.post(leaveApplyUrl, payloadObj)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const getAdmission = async () => {
    let apiResp = await axios.get(admissionUrl)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const saveAdmissions = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.post(admissionUrl, payloadObj)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const getAttendance = async () => {
    const payload = {
        _id: '6447b5d7cc61964abcbe96c1'
        
    }
    let apiResp = await axios.post(getAttendanceUrl,payload)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}

export const saveAttendance = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.post(attendanceUrl, payloadObj)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console.log(err)
                return err
            })
            return apiResp;
}


