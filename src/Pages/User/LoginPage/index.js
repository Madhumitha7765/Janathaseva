import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from "react-toastify";
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import {
    TextField,
    Button,
    Box,
    InputAdornment,
    IconButton
} from "@mui/material"
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import axios from 'axios';

const style = {
    display: 'flex', flexWrap:"wrap",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 600,
    width: "100%",
    bgcolor: 'rgba(254, 254, 254, 0.7)',
    // border: '2px solid #000',
    'border-radius': '20px',
    boxShadow: 24,
    p: 4,
    color: 'black',
    pt: 2
};

export default function LoginPage(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [UserName, setUserName] = useState("");
    const [usernameFlag, setusernameFlag] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordFlag, setPasswordFlag] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isAdmin,setAdmin] = useState(props.isAdmin);
    const [isPartner,setPartner] = useState(!props.isAdmin);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const loginnow = async (e) => {
        e.preventDefault();
        if(isAdmin){
            await axios({
                method: "POST",
                url: `https://janatha-seva.herokuapp.com/api/v1/admin/login`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data: {
                    username: UserName,
                    password: password
                }
            }).then((res) => {
                if (res.data.token) {
                    window.sessionStorage.setItem('token', res.data.token);
                    toast.success("Admin logged in Succefully")
                } else {
                    toast.error(res.data.message);
                }
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
        else{
            await axios({
                method: "POST",
                url: `https://janatha-seva.herokuapp.com/api/v1/partner/partner/login`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data: {
                    UserName: UserName,
                    password: password
                }
            }).then((res) => {
                if (res.data.token) {
                    window.localStorage.setItem('token', res.data.token);
                } else {
                    toast.error(res.data.message);
                }
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
    }
    return (
        <>
            <ToastContainer/>
            <Grid container sx={{width:"90%"}}>
                <Grid item sm={12}>
                    <div>
                        <Button onClick={handleOpen}>Open modal</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{width:"80%"}}
                        >
                            <Box component="main" sx={style}>
                                <Box>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center' }}>
                                        {props.Title} Login
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ m: 4 }}>
                                        <TextField
                                            label="User Name"
                                            variant='outlined'
                                            required
                                            sx={{width:"80%"}}
                                            value={UserName}
                                            onChange={(e) => { setUserName(e.target.value); setusernameFlag(true) }}
                                            error={UserName === "" && usernameFlag === true ? true : false}
                                        />
                                    </Box>
                                    <Box sx={{ m: 4 }}>
                                        <TextField
                                            label="Password"
                                            variant='outlined'
                                            type={showPassword ? "text" : "password"}
                                            required
                                            sx={{width:"80%"}}
                                            value={password}
                                            onChange={(e) => { setPassword(e.target.value); setPasswordFlag(true) }}
                                            error={password === "" && passwordFlag === true ? true : false}
                                            InputProps={{ // <-- This is where the toggle button is added.
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Box sx={{display:'flex',justifyContent:'center'}}>
                                            <Button
                                                color='primary'
                                                variant='outlined'
                                                sx={{mr:2}}
                                                onClick={handleClose}
                                                // className={classes.button}
                                            >
                                                cancel
                                            </Button>
                                            <Button
                                                color='primary'
                                                variant='contained'
                                                sx={{ml:2}}
                                                // className={classes.button}
                                                onClick={loginnow}
                                            >
                                                {props.Title} Login
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                        </Modal>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}