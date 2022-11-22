import * as React from 'react';
import MainBarService from '../../../Components/Servicepage/MainServiceList';
import Services from '../../../Components/Servicepage/Services';
import BottemBarService from '../../../Components/Servicepage/BottemBar';
import ImageScr from '../../../Components/Servicepage/ServicesImage';
import { Box,Typography } from '@mui/material';
export default function ServicePage() {
    return (
        <>
        <MainBarService/>
        <Services/>
        <ImageScr/>
        <BottemBarService/>
        <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Typography>
                    Janatha seva Kendra by <a href='https://www.dwordcore.com/' target={'_blank'} style={{textDecoration:'none'}}>DWORD CORE PVT LTD.</a>
                    </Typography>
        </Box>
        </>
    );
}