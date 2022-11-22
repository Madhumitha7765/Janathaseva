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
    
    const [NewName,setNewName] = useState("");
    const [NewDOB,setNewDOB] = useState("");
    const [NewSex,setNewSex] = useState("");
    const [NewFatherName,setNewFatherName] = useState("");
    const [NewMobile,setNewMobile] = useState("");
    const [NewAddress,setNewAddress] = useState("");
    const [NewPhotoMismatch,setNewPhotoMismatch] = useState("");
    const [NewSignMismatch,setNewSignMismatch] = useState("");
    const [NewReprint,setNewReprint] = useState("");



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
                        NEW PAN CARD CORRECTION
                    </Typography>
                </Box>
                <Box>
                    <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                           
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <br></br>
                                <br></br>
                                <label for="cars">Category of Applicant :  </label>
                                &nbsp;&nbsp;
                                &nbsp;
                                <select name="cars" id="cars">
                                <option value="volvo">Individual</option>
                                <option value="saab">Firm</option>
                                <option value="mercedes">Association of Persons</option>
                                <option value="audi">Trust</option>
                                <option value="audi">Government</option>
                                </select>
                            </Box>

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="firstName" style={{marginBottom:"5px"}}>First Name </label>
                           
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
                            <label className="form__label" for="MiddleName" style={{marginBottom:"5px"}}>Middle Name </label>
                                <TextField
                                    label="Middle Name"
                                    variant='outlined'
            
                                    fullWidth
                                    value={MiddleName}
                                    onChange={(e) => { setMiddleName(e.target.value) }}
                                    error={MiddleName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                            <label className="form__label" for="lastName" style={{marginBottom:"5px"}}>Last Name </label>
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Email" style={{marginBottom:"5px"}}>Email</label>

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
                                <label className="form__label" for="MobileNumber" style={{marginBottom:"5px"}}>Mobile Number</label>
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="FatherfirstName" style={{marginBottom:"5px"}}>Father First Name </label>
                           
                                <TextField
                                    label="Father First Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={FatherFirstName}
                                    onChange={(e) => { setFatherFirstName(e.target.value) }}
                                    error={FatherFirstName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                            <label className="form__label" for="FatherMiddleName" style={{marginBottom:"5px"}}>Father Middle Name </label>
                                <TextField
                                    label="Father Middle Name"
                                    variant='outlined'
            
                                    fullWidth
                                    value={FatherMiddleName}
                                    onChange={(e) => { setFatherMiddleName(e.target.value) }}
                                    error={FatherMiddleName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                            <label className="form__label" for="FatherlastName" style={{marginBottom:"5px"}}>Father Last Name </label>
                                <TextField
                                    label="Father Last Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={FatherLastName}
                                    onChange={(e) => { setFatherLastName(e.target.value) }}
                                    error={FatherLastName === "" ? true : false}
                                />
                            </Box>

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="MotherfirstName" style={{marginBottom:"5px"}}>Mother First Name </label>
                           
                                <TextField
                                    label="Mother First Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={MotherFirstName}
                                    onChange={(e) => { setMotherFirstName(e.target.value) }}
                                    error={MotherFirstName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                            <label className="form__label" for="MotherMiddleName" style={{marginBottom:"5px"}}>Mother Middle Name </label>
                                <TextField
                                    label="Mother Middle Name"
                                    variant='outlined'
            
                                    fullWidth
                                    value={MotherMiddleName}
                                    onChange={(e) => { setMotherMiddleName(e.target.value) }}
                                    error={MotherMiddleName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                            <label className="form__label" for="MotherlastName" style={{marginBottom:"5px"}}>Mother Last Name </label>
                                <TextField
                                    label="Mother Last Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={MotherLastName}
                                    onChange={(e) => { setMotherLastName(e.target.value) }}
                                    error={MotherLastName === "" ? true : false}
                                />
                            </Box>

                        </Box>
                       <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Name on Card" style={{marginBottom:"5px"}}>Name on Card </label>
                           
                                <TextField
                                    label="Name on Card"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={NameonCard}
                                    onChange={(e) => { setNameonCard(e.target.value) }}
                                    error={NameonCard === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="DOB" style={{marginBottom:"5px"}}>DOB </label>
                           
                                <TextField
                                    label="Date of birth"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={DOB}
                                    onChange={(e) => { setDOB(e.target.value) }}
                                    error={DOB === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>
                         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="AadharCardNumber" style={{marginBottom:"5px"}}>Aadhar Card Number </label>
                           
                                <TextField
                                    label="Aadhar Card Number"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={AadharCardNumber}
                                    onChange={(e) => { setAadharCardNumber(e.target.value) }}
                                    error={AadharCardNumber === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Name on Aadhar Card" style={{marginBottom:"5px"}}>Name on Aadhar Card </label>
                           
                                <TextField
                                    label="Name on Aadhar Card"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={NameonAadharCard}
                                    onChange={(e) => { setNameonAadharCard(e.target.value) }}
                                    error={NameonAadharCard === "" ? true : false}
                                />
                            </Box>
                            

                        </Box> 
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <h4 style={{paddingLeft:"3%"}}>ADDRESS</h4>
                        <br></br>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="FlatNum" style={{marginBottom:"5px"}}>Flat/Door/Block no </label>
                           
                                <TextField
                                    label="Flat/Door/Block no"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={FlatNum}
                                    onChange={(e) => { setFlatNum(e.target.value) }}
                                    error={FlatNum === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Premises" style={{marginBottom:"5px"}}>Premises/Building/Village </label>
                           
                                <TextField
                                    label="Premises/Building/Village"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Premises}
                                    onChange={(e) => { setPremises(e.target.value) }}
                                    error={Premises === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Street" style={{marginBottom:"5px"}}>Road/Street/Lane/Post Office </label>
                           
                                <TextField
                                    label="Road/Street/Lane/Post Office"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Street}
                                    onChange={(e) => { setStreet(e.target.value) }}
                                    error={Street === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Area" style={{marginBottom:"5px"}}>Area/Taluka/Sub division</label>
                           
                                <TextField
                                    label="Area/Taluka/Sub division"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Area}
                                    onChange={(e) => { setArea(e.target.value) }}
                                    error={Area === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="State1" style={{marginBottom:"5px"}}>State/Union Territory</label>
                           
                                <TextField
                                    label="State/Union Territory"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={State1}
                                    onChange={(e) => { setState1(e.target.value) }}
                                    error={State1 === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="District" style={{marginBottom:"5px"}}>Town/District</label>
                           
                                <TextField
                                    label="Town/District"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={District}
                                    onChange={(e) => { setDistrict(e.target.value) }}
                                    error={District === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>
                        
                    {/* </Box>  */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Pincode" style={{marginBottom:"5px"}}>Pincode</label>
                           
                                <TextField
                                    label="Pincode"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Pincode}
                                    onChange={(e) => { setPincode(e.target.value) }}
                                    error={Pincode === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="DOBProof" style={{marginBottom:"5px"}}>Proof of DOB</label>
                           
                                <TextField
                                    label="Proof of DOB"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={DOBProof}
                                    onChange={(e) => { setDOBProof(e.target.value) }}
                                    error={DOBProof === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>
                        
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Address" style={{marginBottom:"5px"}}>Proof of Address</label>
                           
                                <TextField
                                    label="Proof of Address"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Address}
                                    onChange={(e) => { setAddress(e.target.value) }}
                                    error={Address === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Identity" style={{marginBottom:"5px"}}>Proof of Identity</label>
                           
                                <TextField
                                    label="Proof of Identity"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Identity}
                                    onChange={(e) => { setIdentity(e.target.value) }}
                                    error={Identity === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>
                        

                        <br></br>
                        <hr></hr>
                        <br></br>
                        <h4 style={{paddingLeft:"3%"}}>FIELDS TO BE CHANGED</h4>
                        <br></br>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="NewName" style={{marginBottom:"5px"}}>Name </label>
                           
                                <TextField
                                    label="Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={NewName}
                                    onChange={(e) => { setNewName(e.target.value) }}
                                    error={NewName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="NewDOB" style={{marginBottom:"5px"}}>D.O.B </label>
                           
                                <TextField
                                    label="D.O.B"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={NewDOB}
                                    onChange={(e) => { setNewDOB(e.target.value) }}
                                    error={NewDOB === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="NewSex" style={{marginBottom:"5px"}}>Sex </label>
                           
                                <TextField
                                    label="Sex"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={NewSex}
                                    onChange={(e) => { setNewSex(e.target.value) }}
                                    error={NewSex === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="NewMobile" style={{marginBottom:"5px"}}>Mobile/Email </label>
                           
                                <TextField
                                    label="Mobile/Email"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={NewMobile}
                                    onChange={(e) => { setNewMobile(e.target.value) }}
                                    error={NewMobile === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="NewFatherName" style={{marginBottom:"5px"}}>Father Name </label>
                           
                                <TextField
                                    label="Father Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={NewFatherName}
                                    onChange={(e) => { setNewFatherName(e.target.value) }}
                                    error={NewFatherName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="NewAddress" style={{marginBottom:"5px"}}>Address </label>
                           
                                <TextField
                                    label="Address"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={NewAddress}
                                    onChange={(e) => { setNewAddress(e.target.value) }}
                                    error={NewAddress === "" ? true : false}
                                />
                            </Box>
                            

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
                                Apply
                            </Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
       
       </Box>
        </>
    );
}