import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import charity1 from '../Assets/homepage.jpg'
import charity2 from '../Assets/HOMEPAGE1.jpg'
import charity3 from '../Assets/HOMEPAGE2.jpg'
import charity4 from '../Assets/png.png'
import { Box, Button } from '@mui/material';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import { motion } from 'framer-motion'
export default function ImageScrool() {
    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Box style={{ height: '525px', borderRadius: "20px" }}>
                    <Carousel style={{ borderRadius: "20px" }} variant="white" pause="false" interval='5000'>
                        <Carousel.Item style={{ borderRadius: "20px" }}>
                            <img
                                className="d-block w-100"
                                src={charity1}
                                alt="First slide"
                                style={{ opacity: '12.5', height: '525px', width: '2000px', borderRadius: "20px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item style={{ borderRadius: "20px" }}>
                            <img
                                className="d-block w-100"
                                src={charity2}
                                alt="Second slide"
                                style={{ opacity: '12.5', height: '525px', width: '2000px', borderRadius: "20px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item style={{ borderRadius: "20px" }}>
                            <img
                                className="d-block w-100"
                                src={charity3}
                                alt="Third slide"
                                style={{ opacity: '12.5', height: '525px', width: '2000px', borderRadius: "20px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item style={{ borderRadius: "20px" }}>
                            <img
                                className="d-block w-100"
                                src={charity4}
                                alt="Fourth slide"
                                style={{ opacity: '12.5', height: '525px', width: '2000px', borderRadius: "20px" }}
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Button sx={{ position: 'relative', top: '-77px', left: '3px', zIndex: 50, color: '#76ff03' }}
                        target="_top"
                        href={`tel:+91 99803 85539`}
                        component={motion.a}
                        whileHover={{ scale: 1.2 }}
                        onTap={``}
                    >
                        <WhatsappRoundedIcon sx={{ fontSize: 70, color: '#76ff03' }} />
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Box style={{ height: '400px', borderRadius: "20px" }}>
                    <Carousel style={{ borderRadius: "20px" }} variant="white" pause="false" interval='5000'>
                        <Carousel.Item style={{ borderRadius: "20px" }}>
                            <img
                                className="d-block w-100"
                                src={charity1}
                                alt="First slide"
                                style={{ opacity: '12.5', height: '400px', width: '2000px', borderRadius: "20px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item style={{ borderRadius: "20px" }}>
                            <img
                                className="d-block w-100"
                                src={charity2}
                                alt="Second slide"
                                style={{ opacity: '12.5', height: '400px', width: '2000px', borderRadius: "20px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item style={{ borderRadius: "20px" }}>
                            <img
                                className="d-block w-100"
                                src={charity3}
                                alt="Third slide"
                                style={{ opacity: '12.5', height: '400px', width: '2000px', borderRadius: "20px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item style={{ borderRadius: "20px" }}>
                            <img
                                className="d-block w-100"
                                src={charity4}
                                alt="Fourth slide"
                                style={{ opacity: '12.5', height: '400px', width: '2000px', borderRadius: "20px" }}
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Button sx={{ position: 'relative', top: '-56px', left: '3px', zIndex: 50, color: '#76ff03' }}
                        target="_top"
                        href={`tel:+91 99803 85539`}
                        component={motion.a}
                        whileHover={{ scale: 1.2 }}
                        onTap={``}
                    >
                        <WhatsappRoundedIcon sx={{ fontSize: 50, color: '#76ff03' }} />
                    </Button>
                </Box>
            </Box>
        </>
    );
}