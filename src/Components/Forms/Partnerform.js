import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from "react-toastify";
import 'date-fns';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import {
    TextField,
    Button,
    Box,
    InputAdornment,
    IconButton,
    FormControl,
    Select,
    MenuItem,
    InputLabel
} from "@mui/material"
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Email } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';

const style = {
    display: { xs: 'block', sm: 'none'},
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'rgba(254, 254, 254, 1)',
    // border: '2px solid #000',
    'border-radius': '20px',
    boxShadow: 24,
    p: 4,
    pl:1,
    pr:1,
    color: 'black',
    pt: 2,
    overflow:'scroll'
};

const style1 = {
    display: { xs: 'none', sm: 'block' },
    position: 'absolute',
    top: '50%',
    left: '50%',
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


export default function PartnerForm(props) {
    const [FirstName, setFirstName] = useState("");
    const [ParentName, setParentName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Emailn, setEmail] = useState("");
    const [EmailFlag, setEmailFlag] = useState(false);
    const [password, setPassword] = useState("");
    const [ConPassword, setConPassword] = useState("");
    const [passwordFlag, setPasswordFlag] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [AadharCard, setAadhar] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [AltMobileNumber, setAltMobileNumber] = useState("");
    const [applyFor, setApply] = useState("Partner");
    const [LandMark, setLandMark] = useState("");
    const [Address, setAddress] = useState("");
    const [Pincode, setPincode] = useState();
    const [Gender, setGender] = useState();
    const [Married, setMarried] = useState();
    const [PartnerType, setPartnerType] = React.useState("Partner");
    const [BirthDate, setBirthDay] = React.useState(new Date('2000-08-18T21:11:54'));
    const [Term, setTerm] = React.useState(false);
    const handleTerm = (event) => {
        setTerm(event.target.checked);
    };
    const handleBirthDate = (newValue) => {
        setBirthDay(newValue);
    };
    const handlePartnerTypeChange = (event) => {
        setPartnerType(event.target.value);
        setApply(event.target.value);
    };
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const Applynow = async (e) => {
        e.preventDefault();
        if (password === ConPassword) {
            await axios({
                method: "POST",
                url: `https://janatha-seva.herokuapp.com/api/v1/partner/partner`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data: {
                    FullName: FirstName + " " + LastName,
                    email: Emailn,
                    AadharCard: AadharCard,
                    MobileNumber: MobileNumber,
                    PartnerType: PartnerType,
                    password: password,
                    AltMobileNumber: AltMobileNumber,
                    Gender: Gender,
                    IsMarried: (Married === 'yes') ? true : false,
                    BirthDate: BirthDate,
                    LandMark: LandMark,
                    Address: Address,
                    Pincode: Pincode
                }
            }).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.message);
                } else {
                    toast.success(res.data.message);
                    toast.success(`you username is ${res.data.username}`)
                }
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
        else {
            toast.error("Your Password and Confirm Password are different")
        }
    }
    return (
        <>
            <Box sx={style}>
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center' }}>
                        Apply For {applyFor}
                    </Typography>
                </Box>
                <Box sx={{width:"100%"}}>
                    <Box style={{ width: "100%", maxHeight: '500px',padding:'10px' }}>
                        <Box sx={{ display: 'flex',  flexWrap:'wrap' }}>
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
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%'}}>
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
                        <Box sx={{ display: 'flex', flexWrap:'wrap'}}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Father/Mother Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={ParentName}
                                    onChange={(e) => { setParentName(e.target.value) }}
                                    error={ParentName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="Date Of Birth"
                                        inputFormat="dd/MM/yyyy"
                                        value={BirthDate}
                                        onChange={handleBirthDate}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap:'wrap' }}>
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
                                    label="Aadhar Card"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={AadharCard}
                                    onChange={(e) => { setAadhar(e.target.value) }}
                                    error={AadharCard.length === 12 ? false : true}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap:'wrap' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Password"
                                    variant='outlined'
                                    type={showPassword ? "text" : "password"}
                                    required
                                    fullWidth
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
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Confirm Password"
                                    variant='outlined'
                                    type={showPassword ? "text" : "password"}
                                    required
                                    fullWidth
                                    value={ConPassword}
                                    onChange={(e) => { setConPassword(e.target.value) }}
                                    error={password === ConPassword ? false : true}
                                    InputProps={{
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
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap:'wrap' }}>
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
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Alt Mobile Number"
                                    variant='outlined'
                                    type='number'
                                    required
                                    fullWidth
                                    value={AltMobileNumber}
                                    inputProps={{ maxlength: "10" }}
                                    onChange={(e) => { setAltMobileNumber(e.target.value) }}
                                    error={AltMobileNumber.length === 10 ? false : true}
                                />
                            </Box>

                        </Box>

                        <Box sx={{ display: 'flex', flexWrap:'wrap' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <FormControl >
                                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="Male"
                                        name="radio-buttons-group"
                                        onChange={(e) => { setGender(e.target.value) }}
                                    >
                                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <FormControl >
                                    <FormLabel id="demo-radio-buttons-group-label">Married</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="no"
                                        name="radio-buttons-group"
                                        onChange={(e) => { setMarried(e.target.value) }}
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="no" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>

                        </Box>
                        <Box sx={{ width: "80%", margin: 'auto', marginBottom: 3, marginTop: 3 }}>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Partner Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={PartnerType}
                                        label="Age"
                                        onChange={handlePartnerTypeChange}
                                    >
                                        <MenuItem value={"Manager"}>Manager</MenuItem>
                                        <MenuItem value={"Franchise Partner"}>Franchise Partner</MenuItem>
                                        <MenuItem value={"District Partner"}>District Partner</MenuItem>
                                        <MenuItem value={"Taluka Partner"}>Taluka Partner</MenuItem>
                                        <MenuItem value={"Hobli Partner"}>Hobli Partner</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box sx={{ width: "80%", margin: 'auto', marginBottom: 3, marginTop: 3 }}>

                            <Box sx={{ minWidth: 120 }}>
                                <TextField
                                    style={{ width: '100%' }}
                                    required
                                    id="outlined-textarea"
                                    label="Residence Address"
                                    multiline
                                    rows={4}
                                    placeholder="Address"
                                    variant="outlined"
                                    value={Address}
                                    onChange={(e) => { setAddress(e.target.value) }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap:'wrap' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Land Mark"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={LandMark}
                                    onChange={(e) => { setLandMark(e.target.value) }}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Pincode"
                                    variant='outlined'
                                    type='number'
                                    required
                                    fullWidth
                                    value={Pincode}
                                    inputProps={{ maxlength: "10" }}
                                    onChange={(e) => { setPincode(e.target.value) }}
                                />
                            </Box>

                        </Box>
                        <Box sx={{m:'auto',textAlign:'center'}}>
                            <Typography>KYC Documents: AADHAR CARD, PAN CARD, SSLC MARKS CARD, BANK PASSBOOK, PASSPORT SIZE PHOTO </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap:'wrap' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <Checkbox
                                    checked={Term}
                                    onChange={handleTerm}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                I Agree To <a href='https://drive.google.com/file/d/1wLzefljzqbburUsau-2Ix7Ga5Kpegj_V/view?usp=sharing' target='_blank'>Terms And Conditions</a>
                            </Box>

                        </Box>
                        <Box sx={{ display:"flex",justifyContent: 'center',m:3,pb:5}}>
                            <Button
                                color='primary'
                                variant='outlined'
                                sx={{ mr: 2 }}
                                onClick={props.handleClose}
                            // className={classes.button}
                            >
                                Cancel
                            </Button>
                            {
                                (Term)?
                                <>
                                <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}
                                // className={classes.button}
                                onClick={Applynow}
                            >
                                Apply
                            </Button>
                                </>:
                                <>
                                <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}
                                disabled
                            >
                                Apply
                            </Button>
                                </>
                            }
                        </Box>                 
                         
                    </Box>
                </Box>

            </Box>
            <Box sx={style1}>
            <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center' }}>
                        Apply For {applyFor}
                    </Typography>
                </Box>
                <Box>
                    <Box style={{ overflow: 'scroll', maxHeight: '500px',padding:'10px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Father/Mother Name"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={ParentName}
                                    onChange={(e) => { setParentName(e.target.value) }}
                                    error={ParentName === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="Date Of Birth"
                                        inputFormat="dd/MM/yyyy"
                                        value={BirthDate}
                                        onChange={handleBirthDate}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                    label="Aadhar Card"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={AadharCard}
                                    onChange={(e) => { setAadhar(e.target.value) }}
                                    error={AadharCard.length === 12 ? false : true}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Password"
                                    variant='outlined'
                                    type={showPassword ? "text" : "password"}
                                    required
                                    fullWidth
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
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Confirm Password"
                                    variant='outlined'
                                    type={showPassword ? "text" : "password"}
                                    required
                                    fullWidth
                                    value={ConPassword}
                                    onChange={(e) => { setConPassword(e.target.value) }}
                                    error={password === ConPassword ? false : true}
                                    InputProps={{
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
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Alt Mobile Number"
                                    variant='outlined'
                                    type='number'
                                    required
                                    fullWidth
                                    value={AltMobileNumber}
                                    inputProps={{ maxlength: "10" }}
                                    onChange={(e) => { setAltMobileNumber(e.target.value) }}
                                    error={AltMobileNumber.length === 10 ? false : true}
                                />
                            </Box>

                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <FormControl >
                                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="Male"
                                        name="radio-buttons-group"
                                        onChange={(e) => { setGender(e.target.value) }}
                                    >
                                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <FormControl >
                                    <FormLabel id="demo-radio-buttons-group-label">Married</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="no"
                                        name="radio-buttons-group"
                                        onChange={(e) => { setMarried(e.target.value) }}
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="no" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>

                        </Box>
                        <Box sx={{ width: 775, margin: 'auto', marginBottom: 3, marginTop: 3 }}>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Partner Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={PartnerType}
                                        label="Age"
                                        onChange={handlePartnerTypeChange}
                                    >
                                        <MenuItem value={"Manager"}>Manager</MenuItem>
                                        <MenuItem value={"Franchise Partner"}>Franchise Partner</MenuItem>
                                        <MenuItem value={"District Partner"}>District Partner</MenuItem>
                                        <MenuItem value={"Taluka Partner"}>Taluka Partner</MenuItem>
                                        <MenuItem value={"Hobli Partner"}>Hobli Partner</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box sx={{ width: 775, margin: 'auto', marginBottom: 3, marginTop: 3 }}>

                            <Box sx={{ minWidth: 120 }}>
                                <TextField
                                    style={{ width: '100%' }}
                                    required
                                    id="outlined-textarea"
                                    label="Residence Address"
                                    multiline
                                    rows={4}
                                    placeholder="Address"
                                    variant="outlined"
                                    value={Address}
                                    onChange={(e) => { setAddress(e.target.value) }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Land Mark"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={LandMark}
                                    onChange={(e) => { setLandMark(e.target.value) }}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <TextField
                                    label="Pincode"
                                    variant='outlined'
                                    type='number'
                                    required
                                    fullWidth
                                    value={Pincode}
                                    inputProps={{ maxlength: "10" }}
                                    onChange={(e) => { setPincode(e.target.value) }}
                                />
                            </Box>

                        </Box>
                        <Box sx={{m:'auto',textAlign:'center'}}>
                            <Typography>KYC Documents: AADHAR CARD, PAN CARD, SSLC MARKS CARD, BANK PASSBOOK, PASSPORT SIZE PHOTO </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <Checkbox
                                    checked={Term}
                                    onChange={handleTerm}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                I Agree To <a href='https://docs.google.com/document/d/1ldylASBX9TsKEvV-Budf5COiW1lpHoAh/edit?usp=sharing&ouid=113391294258492911665&rtpof=true&sd=true' target='_blank'>Terms And Conditions</a>
                            </Box>

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
                            {
                                (Term)?
                                <>
                                <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}
                                // className={classes.button}
                                onClick={Applynow}
                            >
                                Apply
                            </Button>
                                </>:
                                <>
                                <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}
                                disabled
                            >
                                Apply
                            </Button>
                                </>
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}