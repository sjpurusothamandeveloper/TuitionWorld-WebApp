import { staffCreationUrl, staffListUrl, studentCreationUrl, userCreationUrl } from "app/services/Services";
import axios from "axios";

export const saveStaff = async(payload) => {
    const payloadObj = payload;
        let apiResp = await axios.post(staffCreationUrl, payloadObj)
            .then(res => {
                console.log("Data", res)
                return res.data;    
            })
            .catch(err => {
                console(err)
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
                console(err)
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
                console(err)
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
                console(err)
                return err
            })
            return apiResp;
}