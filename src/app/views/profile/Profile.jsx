import {
    Box, Button, styled, Typography, Grid, Select,
    MenuItem,
    InputLabel,
    FormControl,
    Card,
    IconButton,
    Paper
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../academics/index.css';
import { studentsList } from '../academics/Constants';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import PanToolIcon from '@mui/icons-material/PanTool';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { getStaffById } from 'app/services/AppService';
import { useSnackbar } from 'notistack';

const StraightFlex = styled(`div`)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
}));


const Profile = (props) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [staffDetails, setStaffDetails] = useState()
    useEffect(() => {
        if (window.location.pathname.split('/').length >= 4) {
            getParticularStaffById(window.location.pathname)
        }

    }, [])

    useEffect(()=>{
     console.log(staffDetails)
    },[staffDetails])

    const getParticularStaffById = async (urlValue) => {
        console.log(urlValue.split('/'))
        let id = urlValue.split('/')[3]
        try {
            const responseFromApi = await getStaffById({ "_id": id })
            console.log("getCall", responseFromApi)
            if (responseFromApi && responseFromApi.statusCode === 200) {
                setStaffDetails(responseFromApi.data)
                handleToastMessage(true, responseFromApi.message)
            } else {
                navigate('/academic/new-staff')
                handleToastMessage(false, responseFromApi.message)
            }
        }
        catch (err) {
            handleToastMessage(false, err)
            console.log(err)
            navigate('/academic/new-staff')
        }
    }

    const handleToastMessage = (typeOfMsg, msg) => {
        const failureMessage = 'Something went wrong :(';

        enqueueSnackbar(msg ? msg : failureMessage, {
            variant: typeOfMsg ? "success" : "error",
            persist: false,
            autoHideDuration: 2000
        });
    }




    return (
        <React.Fragment>
           <Paper >
            
           {Object.keys(staffDetails).length>0 && 
           <Grid container md={12}>
             <Grid item md={12}>
             <Card>
                
               <Typography>{staffDetails.firstName}</Typography>
             </Card>
             </Grid>
            </Grid>}
            
           </Paper>
        </React.Fragment>
    );
}

export default Profile;