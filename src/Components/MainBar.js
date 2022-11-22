import React, { useEffect } from "react";
import { Box, Typography, Toolbar, List, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Logo from '../Assets/Logofinal.png'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { motion } from 'framer-motion'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PartnerForm from "./Forms/Partnerform";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import {
    TextField,
    Button,
    InputAdornment,
    IconButton
} from "@mui/material"
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 330,
    bgcolor: 'rgba(254, 254, 254, 1)',
    // border: '2px solid #000',
    'border-radius': '20px',
    boxShadow: 24,
    pb: 4,
    color: 'black',
    pt: 2
};

export default function MainBar(props) {


    // 
    // React
    // 
    const navigate = useNavigate();
    const [openPartnerModal, setOpenPartnerModal] = React.useState(false);
    const handleOpenModalPartnerReq = () => { setOpenPartnerModal(true) };
    const handleCloseModalPartnerReq = () => { setOpenPartnerModal(false) };
    const handleOpenCustomerReq = () => {
        navigate("/CustomerReq", { replace: true });
    }
    const handleOpenPartnerReq = () => {
        navigate("/partnerReq", { replace: true });
    }
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModalAdmin = () => { setOpenModal(true); setAdminModal(true); setPartnerModal(false) };
    const handleOpenModalPartner = () => { setOpenModal(true); setAdminModal(false); setPartnerModal(true) };
    const handleCloseModal = () => { setOpenModal(false); setAdminModal(false); setPartnerModal(false) };
    const [UserName, setUserName] = React.useState("");
    const [usernameFlag, setusernameFlag] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [passwordFlag, setPasswordFlag] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [isAdminModal, setAdminModal] = React.useState(false);
    const [isPartnerModal, setPartnerModal] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const logoutnow = async (e) => {
        if (isAdmin) {
            await axios({
                method: "POST",
                url: `https://janatha-seva.herokuapp.com/api/v1/admin/check`,
                headers: {
                    "Authorization": `Bearer ${window.sessionStorage.getItem('token')}`
                },
            }).then((res) => {
                if (res.data.check) {
                    window.sessionStorage.removeItem('token');
                    toast.success("Admin logged out Succefully");
                    setAdmin(false);
                    navigate('/');
                } else {
                    toast.error(res.data.message);
                }
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
        else if (isPartner) {
            await axios({
                method: "POST",
                url: `https://janatha-seva.herokuapp.com/api/v1/partner/partner/logout`,
                headers: {
                    "Authorization": `Bearer ${window.localStorage.getItem('token')}`
                },
            }).then((res) => {
                if (!res.data.error) {
                    window.localStorage.removeItem('token');
                    toast.success(res.data.message);
                    setPartner(false);
                    navigate('/');
                } else {
                    toast.error(res.data.message);
                }
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
        else {
            toast.error("Please login");
        }
    }
    const loginnow = async (e) => {
        e.preventDefault();
        if (isAdminModal) {
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
                    toast.success("Admin logged in Succefully");
                    setOpenModal(false);
                    setAdminModal(false);
                    setPartnerModal(false);
                    setAdmin(true);
                } else {
                    toast.error(res.data.message);
                }
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
        else {
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
                    setOpenModal(false);
                    setAdminModal(false);
                    setPartnerModal(false);
                    setPartner(true);
                } else {
                    toast.error(res.data.message);
                }
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
    }
    // 
    // 
    // 

    const [open, setOpen] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickLogin = () => {
        setOpenLogin(!openLogin);
    };
    const [isAdmin, setAdmin] = React.useState(false);
    const [isPartner, setPartner] = React.useState(false);
    const checknow = async () => {
        if (window.sessionStorage.getItem("token") === null) {
            if (window.localStorage.getItem("token") === null) {

            }
            else {
                await axios({
                    method: "POST",
                    url: `https://janatha-seva.herokuapp.com/api/v1/partner/check`,
                    headers: {
                        "Authorization": `Bearer ${window.localStorage.getItem('token')}`
                    },
                }).then((res) => {
                    if (!res.data.error) {
                        setPartner(true);
                    } else {
                        window.localStorage.removeItem('token');
                    }
                }).catch((error) => {
                    toast.error(error.response.data.message)
                })
            }
        }
        else {
            await axios({
                method: "POST",
                url: `https://janatha-seva.herokuapp.com/api/v1/admin/check`,
                headers: {
                    "Authorization": `Bearer ${window.sessionStorage.getItem('token')}`
                },
            }).then((res) => {
                if (res.data.check) {
                    setAdmin(true);
                } else {
                    window.sessionStorage.removeItem('token');
                }
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
    }
    useEffect(() => {
        checknow();
    }, []);
    return (
        <>
            <ToastContainer />
            {/* <Grid container>
                {/* <Grid item xs={12} sm={12} md={12}> */}
            {/* <Box sx={{ p: 1, pl: 3, border: '0px solid white', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(254,254,254,0.2)', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)" }} component={motion.div} initial={{ x: 250 }} animate={{ x: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
                        <Grid item xs={6} sm={3} md={8}>
                            <Box>
                                <Toolbar>
                                    <motion.div whileHover={{ scale: 1.1 }}>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 80,
                                                cursor:'pointer'
                                            }}
                                            alt="Your logo."
                                            src={Logo}
                                            onClick={()=>navigate('/')}
                                        />
                                    </motion.div>
                                </Toolbar>
                            </Box> */}
            {/* </Grid>
                        <Grid item xs={6} sm={5} md={8}>
                            <Box onClick={()=>navigate('/')} sx={{ pr: 12, pl: 12, pt: 1, pb: 1, borderRadius: '8px', textAlign: 'center',cursor:'pointer' }}>
                                <Typography variant="h4" component="h5" sx={{ fontWeight: 'bold' }} >
                                    JANATHA SEVA KENDRA
                                </Typography>
                            </Box>
                        </Grid>
                        {/* <Grid item xs={6} sm={5} md={8}></Grid>
                        <Grid item xs={6} sm={5} md={8}></Grid> */}
            {/* </Box> */}
            {/* </Grid> */}
            {/* </Grid> */}
            <Box sx={{ flexWrap: "wrap", width: "100%", p: 1, pl: 3, border: '0px solid white', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'dark-blue', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)" }} component={motion.div} initial={{ x: 250 }} animate={{ x: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Toolbar>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Box
                                component="img"
                                sx={{
                                    height: 80,
                                    cursor: 'pointer'
                                }}
                                alt="Your logo."
                                src={Logo}
                                onClick={() => navigate('/')}
                            />
                        </motion.div>
                    </Toolbar>
                </Box>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            sx={{
                                height: 55,
                                cursor: 'pointer'
                            }}
                            alt="Your logo."
                            src={Logo}
                            onClick={() => navigate('/')}
                        />
                        <Box>
                            <Typography variant="h6" component="h6" sx={{ ml: 2, width: "95%", fontWeight: 'bold' }} >
                                JANATHA SEVA KENDRA
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box onClick={() => navigate('/')} sx={{ display: { xs: 'none', sm: 'block' }, pr: 12, pl: 12, pt: 1, pb: 1, borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
                    <Typography variant="h4" component="h5" sx={{ fontWeight: 'bold' }} >
                        JANATHA SEVA KENDRA
                    </Typography>

                </Box>
                {/* sx={{ display: { xs: 'block', sm: 'block' } }} */}
                <Box sx={{ display: { xs: 'block', sm: 'none' },width:'100%' }}>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-around',width:'100%'}}>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        {
                            (isAdmin) ? <>
                                <Box>
                                    <List>
                                        <ListItemButton onClick={handleClick} sx={{ borderRadius: '12px', fontWeight: 'bold',paddingLeft:'0px',paddingRight:'0px' }}>
                                            <ListItemIcon>
                                                <TouchAppIcon style={{ color: 'white' }} fontSize='small'></TouchAppIcon>
                                            </ListItemIcon>
                                            <ListItemText primary="Applications" sx={{ fontWeight: 'bold', fontSize: '12px' }} />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" sx={{ position: 'absolute', pl: 1, zIndex: 40, fontWeight: 'bold' }}>
                                                <ListItemButton onClick={handleOpenPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                    <ListItemIcon sx={{color:'inherit'}}>
                                                        <HandshakeIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Partner Applications" sx={{ fontWeight: 'bold' }} />
                                                </ListItemButton>
                                                <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                <ListItemButton onClick={handleOpenCustomerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                    <ListItemIcon sx={{color:'inherit'}}>
                                                        <ManageAccountsRoundedIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Customer Applications" sx={{ fontWeight: 'bold' }} />
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </Box>
                            </> :
                                (isPartner) ? <>
                                    <Box >
                                        <List>
                                            <ListItemButton onClick={handleClick} sx={{ borderRadius: '12px' }}>
                                                <ListItemIcon>
                                                    <TouchAppIcon style={{ color: 'white' }} fontSize='small'></TouchAppIcon>
                                                </ListItemIcon>
                                                <ListItemText primary="Applications" sx={{ fontWeight: 'bold' }} />
                                                {open ? <ExpandLess /> : <ExpandMore />}
                                            </ListItemButton>
                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                <List component="div" sx={{ position: 'absolute', pl: 4, zIndex: 40 }}>
                                                    <ListItemButton onClick={handleOpenCustomerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                        <ListItemIcon sx={{color:'inherit'}}>
                                                            <ManageAccountsRoundedIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Customer Applications" sx={{ fontWeight: 'bold' }} />
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>
                                        </List>
                                    </Box>
                                </>
                                    : <>

                                        <Box>
                                            <List>
                                                <ListItemButton onClick={handleClick} sx={{ borderRadius: '12px',paddingLeft:'0px' }}>
                                                    <ListItemIcon>
                                                        <TouchAppIcon sx={{ color: 'white' }} fontSize='small'></TouchAppIcon>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Apply For" sx={{ fontWeight: 'bold' }} />
                                                    {open ? <ExpandLess /> : <ExpandMore />}
                                                </ListItemButton>
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                    <List component="div" sx={{ position: 'absolute', pl: 4, zIndex: 40 }}>
                                                        <Grid container>
                                                            <Grid item sm={12} md={6}>
                                                                <div>
                                                                    {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                                                    <Modal
                                                                        open={openPartnerModal}
                                                                        onClose={handleCloseModalPartnerReq}
                                                                        aria-labelledby="modal-modal-title"
                                                                        aria-describedby="modal-modal-description"
                                                                    >
                                                                        <PartnerForm handleClose={handleCloseModalPartnerReq} />
                                                                    </Modal>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                        <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                            <ListItemIcon sx={{color:'inherit'}}>
                                                                <HandshakeIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Partner" />
                                                        </ListItemButton>
                                                        <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                        <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                            <ListItemIcon sx={{color:'inherit'}}>
                                                                <ManageAccountsRoundedIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Manager" />
                                                        </ListItemButton>
                                                        <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                        <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                            <ListItemIcon sx={{color:'inherit'}}>
                                                                <HandshakeIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Franchise Partner" />
                                                        </ListItemButton>
                                                        <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                        <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                            <ListItemIcon sx={{color:'inherit'}}>
                                                                <HandshakeIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                            </ListItemIcon>
                                                            <ListItemText primary="District Partner" />
                                                        </ListItemButton>
                                                        <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                        <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                            <ListItemIcon sx={{color:'inherit'}}>
                                                                <HandshakeIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Taluk Partner" />
                                                        </ListItemButton>
                                                        <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                        <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                            <ListItemIcon sx={{color:'inherit'}}>
                                                                <HandshakeIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Hobli Partner" />
                                                        </ListItemButton>
                                                    </List>
                                                </Collapse>
                                            </List>
                                        </Box>
                                    </>
                        }
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <List>{
                            (isAdmin) ? <>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',ml:3 }}>
                                    <Typography id="modal-modal-title" variant="p" component="p" sx={{ "textAlign": 'right', fontWeight: 'bold' }}>Admin</Typography>
                                    <IconButton onClick={logoutnow} sx={{ }}>
                                        <PowerSettingsNewIcon style={{ color: "white" }} fontSize='small'/>
                                    </IconButton>
                                </Box>
                            </> :
                                (isPartner) ?
                                    <>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',ml:3 }}>
                                            <Typography id="modal-modal-title" variant="p" component="p" sx={{ "textAlign": 'right' }}>Partner</Typography>
                                            <IconButton onClick={logoutnow} sx={{  }}>
                                                <PowerSettingsNewIcon style={{ color: "white" }} fontSize='small'/>
                                            </IconButton>
                                        </Box>
                                    </>
                                    :
                                    <>
                                        <ListItemButton onClick={handleClickLogin} sx={{ borderRadius: '12px',paddingRight:'0px',paddingLeft:'1px' }}>
                                            <ListItemIcon>
                                                <LoginRoundedIcon sx={{ color: 'white' }} fontSize='small' />
                                            </ListItemIcon>
                                            <ListItemText primary="Login" />
                                            {openLogin ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openLogin} timeout="auto" unmountOnExit>
                                            <List component="div" sx={{ position: 'absolute', pr: 7, zIndex: 40 }}>
                                                <ListItemButton onClick={handleOpenModalAdmin} sx={{ pr: 4, background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                    <ListItemIcon sx={{color:'inherit'}}>
                                                        <PersonOutlineRoundedIcon sx={{ color: 'inherit' }} fontSize='small' />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Admin" />
                                                </ListItemButton>
                                                <Modal
                                                    open={openModal}
                                                    onClose={handleCloseModal}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style}>
                                                        <Box>
                                                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center' }}>
                                                                {(isAdminModal) ? "Admin" : (isPartnerModal) ? "Partner" : ""} Login
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{width:"100%"}}>
                                                            <Box  sx={{ display: 'flex', flexWrap:'wrap' ,m:3}}>
                                                                <TextField
                                                                    label="User Name"
                                                                    variant='outlined'
                                                                    required
                                                                    value={UserName}
                                                                    onChange={(e) => { setUserName(e.target.value); setusernameFlag(true) }}
                                                                    error={UserName === "" && usernameFlag === true ? true : false}
                                                                />
                                                            </Box>
                                                            <Box sx={{ display: 'flex', flexWrap:'wrap' ,m:3}}>
                                                                <TextField
                                                                    label="Password"
                                                                    variant='outlined'
                                                                    type={showPassword ? "text" : "password"}
                                                                    required
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
                                                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                                    <Button
                                                                        color='primary'
                                                                        variant='outlined'
                                                                        sx={{ mr: 2 }}
                                                                        onClick={handleCloseModal}
                                                                    // className={classes.button}
                                                                    >
                                                                        cancel
                                                                    </Button>
                                                                    <Button
                                                                        color='primary'
                                                                        variant='contained'
                                                                        sx={{ ml: 2 }}
                                                                        // className={classes.button}
                                                                        onClick={loginnow}
                                                                    >
                                                                        {(isAdminModal) ? "Admin" : (isPartnerModal) ? "Partner" : ""} Login
                                                                    </Button>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                    </Box>
                                                </Modal>
                                                <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                <ListItemButton onClick={handleOpenModalPartner} sx={{ pr: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                    <ListItemIcon sx={{color:'inherit'}}>
                                                        <HandshakeIcon sx={{ color: 'inherit' }} fontSize='small'/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Partner" />
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </>
                        }
                        </List>
                    </Box>
                </Box>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {
                        (isAdmin) ? <>
                            <Box>
                                <List>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius: '12px', fontWeight: 'bold' }}>
                                        <ListItemIcon>
                                            <TouchAppIcon style={{ color: 'white' }}></TouchAppIcon>
                                        </ListItemIcon>
                                        <ListItemText primary="Applications" sx={{ fontWeight: 'bold' }} />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" sx={{ position: 'absolute', pl: 4, zIndex: 40, fontWeight: 'bold' }}>
                                            <ListItemButton onClick={handleOpenPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                <ListItemIcon sx={{color:'inherit'}}>
                                                    <HandshakeIcon sx={{ color: 'inherit' }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Partner Applications" sx={{ fontWeight: 'bold' }} />
                                            </ListItemButton>
                                            <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                            <ListItemButton onClick={handleOpenCustomerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                <ListItemIcon sx={{color:'inherit'}}>
                                                    <ManageAccountsRoundedIcon sx={{ color: 'inherit' }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Customer Applications" sx={{ fontWeight: 'bold' }} />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </List>
                            </Box>
                        </> :
                            (isPartner) ? <>
                                <Box >
                                    <List>
                                        <ListItemButton onClick={handleClick} sx={{ borderRadius: '12px' }}>
                                            <ListItemIcon>
                                                <TouchAppIcon style={{ color: 'white' }}></TouchAppIcon>
                                            </ListItemIcon>
                                            <ListItemText primary="Applications" sx={{ fontWeight: 'bold' }} />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" sx={{ position: 'absolute', pl: 4, zIndex: 40 }}>
                                                <ListItemButton onClick={handleOpenCustomerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                    <ListItemIcon sx={{color:'inherit'}}>
                                                        <ManageAccountsRoundedIcon sx={{ color: 'inherit' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Customer Applications" sx={{ fontWeight: 'bold' }} />
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </Box>
                            </>
                                : <>

                                    <Box>
                                        <List>
                                            <ListItemButton onClick={handleClick} sx={{ borderRadius: '12px' }}>
                                                <ListItemIcon>
                                                    <TouchAppIcon sx={{ color: 'white' }}></TouchAppIcon>
                                                </ListItemIcon>
                                                <ListItemText primary="Apply For" sx={{ fontWeight: 'bold' }} />
                                                {open ? <ExpandLess /> : <ExpandMore />}
                                            </ListItemButton>
                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                <List component="div" sx={{ position: 'absolute', pl: 4, zIndex: 40 }}>
                                                    <Grid container>
                                                        <Grid item sm={12} md={6}>
                                                            <div>
                                                                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                                                <Modal
                                                                    open={openPartnerModal}
                                                                    onClose={handleCloseModalPartnerReq}
                                                                    aria-labelledby="modal-modal-title"
                                                                    aria-describedby="modal-modal-description"
                                                                >
                                                                    <PartnerForm handleClose={handleCloseModalPartnerReq} />
                                                                </Modal>
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                    <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                        <ListItemIcon sx={{color:'inherit'}}>
                                                            <HandshakeIcon sx={{ color: 'inherit' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Partner" />
                                                    </ListItemButton>
                                                    <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                    <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                        <ListItemIcon sx={{color:'inherit'}}>
                                                            <ManageAccountsRoundedIcon sx={{ color: 'inherit' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Manager" />
                                                    </ListItemButton>
                                                    <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                    <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                        <ListItemIcon sx={{color:'inherit'}}>
                                                            <HandshakeIcon sx={{ color: 'inherit' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Franchise Partner" />
                                                    </ListItemButton>
                                                    <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                    <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                        <ListItemIcon sx={{color:'inherit'}}>
                                                            <HandshakeIcon sx={{ color: 'inherit' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary="District Partner" />
                                                    </ListItemButton>
                                                    <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                    <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' , background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                        <ListItemIcon sx={{color:'inherit'}}>
                                                            <HandshakeIcon sx={{ color: 'inherit' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Taluk Partner" />
                                                    </ListItemButton>
                                                    <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                                    <ListItemButton onClick={handleOpenModalPartnerReq} sx={{ pl: 4,color:'white' ,background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                        <ListItemIcon sx={{color:'inherit' }}>
                                                            <HandshakeIcon sx={{color:'inherit' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Hobli Partner" />
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>
                                        </List>
                                    </Box>
                                </>
                    }
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <List>{
                        (isAdmin) ? <>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'right', marginRight: '15px', fontWeight: 'bold' }}>Admin</Typography>
                                <IconButton onClick={logoutnow} sx={{ marginRight: '15px' }}>
                                    <PowerSettingsNewIcon style={{ color: "white" }} />
                                </IconButton>
                            </Box>
                        </> :
                            (isPartner) ?
                                <>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'right', marginRight: '15px' }}>Partner</Typography>
                                        <IconButton onClick={logoutnow} sx={{ marginRight: '15px' }}>
                                            <PowerSettingsNewIcon style={{ color: "white" }} />
                                        </IconButton>
                                    </Box>
                                </>
                                :
                                <>
                                    <ListItemButton onClick={handleClickLogin} sx={{ borderRadius: '12px' }}>
                                        <ListItemIcon>
                                            <LoginRoundedIcon sx={{ color: 'white' }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Login" />
                                        {openLogin ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={openLogin} timeout="auto" unmountOnExit>
                                        <List component="div" sx={{ position: 'absolute', pr: 4, zIndex: 40 }}>
                                            <ListItemButton onClick={handleOpenModalAdmin} sx={{ pr: 4, background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                <ListItemIcon sx={{color:'inherit'}}>
                                                    <PersonOutlineRoundedIcon sx={{ color: 'inherit' }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Admin" />
                                            </ListItemButton>
                                            <Modal
                                                open={openModal}
                                                onClose={handleCloseModal}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <Box>
                                                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center' }}>
                                                            {(isAdminModal) ? "Admin" : (isPartnerModal) ? "Partner" : ""} Login
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Box sx={{ m: 4 }}>
                                                            <TextField
                                                                label="User Name"
                                                                variant='outlined'
                                                                required
                                                                fullWidth
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
                                                        <Box>
                                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                                <Button
                                                                    color='primary'
                                                                    variant='outlined'
                                                                    sx={{ mr: 2 }}
                                                                    onClick={handleCloseModal}
                                                                // className={classes.button}
                                                                >
                                                                    cancel
                                                                </Button>
                                                                <Button
                                                                    color='primary'
                                                                    variant='contained'
                                                                    sx={{ ml: 2 }}
                                                                    // className={classes.button}
                                                                    onClick={loginnow}
                                                                >
                                                                    {(isAdminModal) ? "Admin" : (isPartnerModal) ? "Partner" : ""} Login
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </Box>

                                                </Box>
                                            </Modal>
                                            <Divider sx={{ ml: '7px', mr: '7px' }}></Divider>
                                            <ListItemButton onClick={handleOpenModalPartner} sx={{ pr: 4, background: 'rgba(0,0,0,0.8)', borderRadius: '12px',":hover":{color:'black',backgroundColor:'rgba(255,255,255,0.8)'} }}>
                                                <ListItemIcon sx={{color:'inherit'}}>
                                                    <HandshakeIcon sx={{ color: 'inherit' }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Partner" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </>
                    }
                    </List>
                </Box>

            </Box>
        </>
    );
}