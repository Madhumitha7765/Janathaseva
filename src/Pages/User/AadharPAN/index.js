import React, { useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {
    TextField,
    Button,
    Box,
    FormControl,
    Select,
    MenuItem,
    InputLabel
} from "@mui/material"
import Typography from '@mui/material/Typography';
import { Email } from '@mui/icons-material';

const style = {
    display: { xs: 'block', sm: 'none'},
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height:'100%',
    
    bgcolor: 'rgba(254, 254, 254, 1)',
    // border: '2px solid #000',
    'border-radius': '20px',
    boxShadow: 24,
    p: 4,
    color: 'black',
    pt: 2,
    overflow:'scroll'
};

const style1 = {
    display: { xs: 'none', sm: 'block' },
    position: 'absolute',
    top: '50%',
    left: '50%',
    height:'100%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'rgba(254, 254, 254, 1)',
    // border: '2px solid #000',
    'border-radius': '20px',
    boxShadow: 24,
    p: 4,
    color: 'black',
    pt: 2,
    overflow:'scroll'
};

export default function CustomerReqForm(props) {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [MiddleName, setMiddleName] = useState("");

    const [FatherFirstName, setFatherFirstName] = useState("");
    const [FatherLastName, setFatherLastName] = useState("");
    const [FatherMiddleName, setFatherMiddleName] = useState("");
    const [MotherFirstName, setMotherFirstName] = useState("");
    const [MotherLastName, setMotherLastName] = useState("");
    const [MotherMiddleName, setMotherMiddleName] = useState("");
    
    const [NameonCard, setNameonCard] = useState("");
    const [DOB,setDOB] =  useState("");

    const [AadharCardNumber, setAadharCardNumber] = useState("");
    const [NameonAadharCard, setNameonAadharCard] = useState("");

    const [FlatNum,setFlatNum] = useState("");
    const [Premises,setPremises] = useState("");
    const [Street,setStreet] = useState("");
    const [Area,setArea] = useState("");
    const [State1,setState1] = useState("");
    const [District,setDistrict] = useState("");
    const [Pincode,setPincode] = useState("");
    const [DOBProof,setDOBProof] = useState("");
    const [Identity,setIdentity] = useState("");
    const [Address,setAddress] = useState("");
    // const [FlatNum,setFlatNum] = useState("");
    
    

    const [Emailn, setEmail] = useState("");
    const [EmailFlag, setEmailFlag] = useState(false);
    const [MobileNumber, setMobileNumber] = useState("");
    const [wantAService, setwantAService] = React.useState();

    const handlewantAServiceChange = (event) => {
        setwantAService(event.target.value);
    };
    const Applynow = async (e) => {
        e.preventDefault();
        await axios({
            method: "POST",
            url: `https://janatha-seva.herokuapp.com/api/v1/customer/application`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: {
                FullName: FirstName + " " + LastName,
                email: Emailn,
                MobileNumber: MobileNumber,
                ApplicationType: wantAService,
                IsOpened: false,
                IsPending: false,
                IsComleted: false
            }
        }).then((res) => {
            if (res.data.error) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
                props.handleClose();
            }
        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    }
    return (
        <>

            <Box sx={style}>
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center' }}>
                        NEW PAN CARD APPLICATION
                    </Typography>
                </Box>
                <Box>
                    <Box>
                        <Box sx={{ display: 'flex', flexWrap:"wrap" }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                            
                                <TextField
                                    label="First Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={FirstName}
                                    onChange={(e) => { setFirstName(e.target.value) }}
                                    error={FirstName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Last Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={LastName}
                                    onChange={(e) => { setLastName(e.target.value) }}
                                    error={LastName === "" ? true : false}
                                />
                            </Box>

                        </Box>
                        <Box sx={{ display: 'flex', flexWrap:"wrap" }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Email"
                                    variant='outlined'
                                    type={Email}
                                    required
                                    fullWidth
                                    value={Emailn}
                                    onChange={(e) => { setEmail(e.target.value); setEmailFlag(true) }}
                                    error={Emailn === "" && EmailFlag === true ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Mobile Number"
                                    variant='outlined'
                                    type='number'
                                    required
                                    fullWidth
                                    value={MobileNumber}
                                    inputProps={{ maxlength: "10" }}
                                    onChange={(e) => { setMobileNumber(e.target.value) }}
                                    error={MobileNumber.length === 10 ? false : true}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ width: "80%", margin: 'auto', marginBottom: 3, marginTop: 3 }}>

                            <Box sx={{ minWidth: 120 }}>
                                <TextField
                                    style={{ width: '100%' }}
                                    required
                                    id="outlined-textarea"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    placeholder="I Want a Aadhar Card"
                                    variant="outlined"
                                    value={wantAService}
                                    onChange={handlewantAServiceChange}
                                />
                                {/* <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Want a Service</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={wantAService}
                                        label="Age"
                                        onChange={handlewantAServiceChange}
                                    >
                                        <MenuItem value={"Aadhar Card"}>Aadhar Card</MenuItem>
                                        <MenuItem value={"Pan Card"}>Pan Card</MenuItem>
                                        <MenuItem value={"VoterId Card"}>VoterId Card</MenuItem>
                                        <MenuItem value={"Driving License"}>Driving License</MenuItem>
                                    </Select>
                                </FormControl> */}
                            </Box>
                        </Box>
                    </Box>
                    <br></br>
                    <br></br>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent:"center" }}>
                            <Button
                                color='primary'
                                variant='outlined'
                                sx={{ mr: 2 }}
                                onClick={props.handleClose}
                            // className={classes.button}
                            >
                                cancel
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}
                                // className={classes.button}
                                onClick={Applynow}
                            >
                                Apply
                            </Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box sx={style1}>
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center',"textDecoration":'bold'}}>
                        AADHAR PAN CARD APPLICATION
                    </Typography>
                </Box>
                <br></br>
                <br></br>
                <Box>
                    <Box>
                                          
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
                            
                            <Box sx={{ m: 2, mt: 2, mb: 2, ml:2,width: '80%' }}>
                                <label className="form__label" for="Address" style={{marginBottom:"5px"}}>AADHAR NUMBER</label>
                                <br></br>
                                <TextField
                                    label="Aadhar Number"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Identity}
                                    onChange={(e) => { setIdentity(e.target.value) }}
                                    error={Identity === "" ? true : false}
                                />
                            </Box>
                            {/* <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}> */}
                                {/* <label className="form__label" for="Identity" style={{marginBottom:"5px"}}>Proof of Identity</label> */}
                           
                                {/* <TextField
                                    label="Aadhar Number"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Identity}
                                    onChange={(e) => { setIdentity(e.target.value) }}
                                    error={Identity === "" ? true : false}
                                /> */}
                            {/* </Box> */}
                            

                        </Box>
                        
                    
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                color='primary'
                                variant='outlined'
                                sx={{ mr: 2 }}
                                onClick={props.handleClose}
                            // className={classes.button}
                            >
                                cancel
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}
                                // className={classes.button}
                                onClick={Applynow}
                            >
                                Proceed
                            </Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
       
       </Box>
        </>
    );
}