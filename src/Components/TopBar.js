import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from 'framer-motion'
export default function TopBar() {
    return (

        <Box sx={{ mb: 1, flexWrap: "wrap", width: "100%", p: 1, pl: 3, border: '0px solid white', borderRadius: '12px', display: 'flex', flexWrap: "wrap", alignItems: 'center', alignContent: "space-around", justifyContent: 'center', background: 'dark-blue', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)" }} component={motion.div} initial={{ x: 250 }} animate={{ x: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>

            {/* <Box>
                <Typography variant="h6" component="h4" sx={{ pr: 3, pl: 3, border: '0px solid white', borderRadius: '8px',fontWeight: 'bold' }}>
                    Language
                </Typography>
            </Box> */}
            <Box sx={{ pr: 5, pl: 4, pt: 1, pb: 0, border: '0px solid white', borderRadius: '8px', display: 'inline-flex', flexDirection: 'column', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    <Box>

                        <Typography variant="p" component="p" sx={{ display: { xs: 'block', sm: 'none' },color: 'white', fontWeight: 'bold',fontSize:'10px' }} >
                            Email :
                        </Typography>
                        <Typography variant="p" component="p" sx={{ display: { xs: 'none', sm: 'block' },color: 'white', fontWeight: 'bold' }} >
                            Email :
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            size="large"
                            target="_top"
                            rel="noopener noreferrer"
                            href={`mailto:jse.online123@gmail.com`}
                            sx={{ p: 0, m: 0 }}
                        >
                            <Typography sx={{ display: { xs: 'block', sm: 'none' }, color: 'white', fontWeight: 'bold', fontSize:'10px', pl: 1, textTransform: 'lowercase' }}>
                                jse.online123@gmail.com
                            </Typography>

                            <Typography variant="p" component="h6" sx={{ display: { xs: 'none', sm: 'block' }, color: 'white', pl: 1, fontWeight: 'bold' }} >
                                jse.online123@gmail.com
                            </Typography>
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    <Box>
                    <Typography variant="p" component="p" sx={{ display: { xs: 'block', sm: 'none' },color: 'white', fontWeight: 'bold',fontSize:'10px' }} >
                            Support :
                        </Typography>
                        <Typography variant="p" component="p" sx={{ display: { xs: 'none', sm: 'block' },color: 'white', fontWeight: 'bold' }} >
                        Support :
                        </Typography>

                    </Box>
                    <Box>

                        <Button
                            size="large"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`mailto:support@janathaseva.com`}
                            sx={{ p: 0, m: 0, fontWeight: 'bold' }}
                        >
                            <Typography sx={{ display: { xs: 'block', sm: 'none' }, color: 'white', fontWeight: 'bold', fontSize:'10px', pl: 1, textTransform: 'lowercase' }}>
                            support@janathaseva.com
                            </Typography>
                            <Typography variant="p" component="h6" sx={{ display: { xs: 'none', sm: 'block' }, color: 'white', pl: 1, fontWeight: 'bold' }} >
                            support@janathaseva.com
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
            {/* <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <div style={{ fontFamily: "Roboto,Helvetica,Arial,sans-serif", color: 'white', fontWeight: 'bold', pr: 2, pl: 2, border: '0px solid white', borderRadius: '8px', fontWeight: 'bold' }}>
                    CONTACT :
                    <Button
                        size="large"
                        target="_top"
                        rel="noopener noreferrer"
                        href="#"
                    >
                        <Typography variant="p" component="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: 14 }} >
                            +91 99803 85539 / +91 77958 05538
                        </Typography>
                    </Button>
                </div>
            </Box> */}
            <Box sx={{ display: 'flex', p: 0, m: 0, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}
            >

                <Box>
                    <Typography variant="p" component="p" sx={{ pr: 2, pl: 2, border: '0px solid white', borderRadius: '8px', fontWeight: 'bold',display: { xs: 'block', sm: 'none' },fontSize:'10px'}}>
                        CONTACT :
                    </Typography>
                    <Typography variant="h6" component="h4" sx={{ pr: 2, pl: 2, border: '0px solid white', borderRadius: '8px', fontWeight: 'bold',display: { xs: 'none', sm: 'block' } }}>
                        CONTACT :
                    </Typography>

                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Box>

                        <Button
                            size="large"
                            target="_top"
                            rel="noopener noreferrer"
                            href={`tel:+91 99803 85539`}
                        >
                            <Typography variant="p" component="p" sx={{ color: 'white', fontWeight: 'bold',display: { xs: 'block', sm: 'none' },mt:-2,mb:-2,fontSize:'10px' }} >
                                +91 99803 85539
                            </Typography>
                            <Typography variant="p" component="h6" sx={{ color: 'white', fontWeight: 'bold',display: { xs: 'none', sm: 'block' } }} >
                                +91 99803 85539
                            </Typography>
                        </Button>
                    </Box>
                    <Box>
                        <Typography variant="p" component="h6" sx={{ color: 'white', fontWeight: 'bold' }} >
                            /
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            size="large"
                            target="_top"
                            rel="noopener noreferrer"
                            href={`tel:+91 77958 05538`}
                        >
                            <Typography variant="p" component="p" sx={{ color: 'white', fontWeight: 'bold',display: { xs: 'block', sm: 'none' },mt:-2,mb:-2,fontSize:'10px' }} >
                                +91 77958 05538
                            </Typography>
                            <Typography variant="p" component="p" sx={{ color: 'white', fontWeight: 'bold',display: { xs: 'none', sm: 'block' } }} >
                                +91 77958 05538
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: 'wrap' }} >
                {/* <Button sx={{ display: { xs: 'block', sm: 'none' } }}></Button> */}
                <Button
                    style={{
                        color: '#3d5afe',
                    }}
                    target="_blank"
                    href={`https://www.facebook.com/profile.php?id=100071325820947`}
                    component={motion.a}
                    whileHover={{ scale: 1.5 }}
                    onTap={``}
                >
                    <FacebookIcon sx={{display: { xs: 'block', sm: 'none' }}} fontSize='small'/>
                    <FacebookIcon sx={{display: { xs: 'none', sm: 'block' }}}/>
                </Button>
                <Button
                    style={{
                        color: '#00e5ff'
                    }}
                    target="_blank"
                    component={motion.a}
                    href={`https://twitter.com/`}
                    whileHover={{ scale: 1.5 }}
                    onTap={``}
                >
                    <TwitterIcon sx={{display: { xs: 'block', sm: 'none' }}} fontSize='small'/>
                    <TwitterIcon sx={{display: { xs: 'none', sm: 'block' }}}/>
                </Button>
                <Button
                    style={{ color: '#ff1744' }}
                    target="_blank"
                    href={`https://www.youtube.com/channel/UCzFaQMeOYvGxKguymixjZgw`}
                    component={motion.a}
                    whileHover={{ scale: 1.5 }}
                    onTap={``}
                >
                    <YouTubeIcon sx={{display: { xs: 'block', sm: 'none' }}} fontSize='small'/>
                    <YouTubeIcon sx={{display: { xs: 'none', sm: 'block' }}}/>
                </Button>
                <Button
                    style={{ color: '#e91e63' }}
                    target="_blank"
                    href={`https://www.instagram.com/`}
                    component={motion.a}
                    whileHover={{ scale: 1.5 }}
                    onTap={``}
                >
                    <InstagramIcon sx={{display: { xs: 'block', sm: 'none' }}} fontSize='small'/>
                    <InstagramIcon sx={{display: { xs: 'none', sm: 'block' }}}/>
                </Button>
            </Box>

            {/* <div class="d-inline-block d-block d-sm-none">ddfgtggtg</div> */}
        </Box>
    );
}