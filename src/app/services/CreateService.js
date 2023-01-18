import { staffCreationUrl } from "app/services/Services";
import axios from "axios";

export const saveStaff = (payload) => {

    console.log("Payload", payload)
    const payloadObj = payload;
        axios.post(staffCreationUrl, payloadObj)
            .then(res => {
                console.log("Data", res.data)
                return res.data;
                // setLoading(false);
                //checking for multiple responses for more flexibility 
                //with the url we send in.
                // res.data.content && setData(res.data.content);
                // res.content && setData(res.content);
            })
            .catch(err => {
                console(err)
                let errObj = {
                    status: "Error",
                    msg: err
                }
                return errObj
                // setLoading(false)
                // setError('An error occurred. Awkward..')
            })
}