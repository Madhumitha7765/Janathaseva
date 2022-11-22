import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import TopBar from '../../../Components/TopBar';
import MainBar from '../../../Components/MainBar';
import SlidingContent from '../../../Components/SlidingContent';
import ImageScrool from '../../../Components/ImageScrrol';
import BottemBar from '../../../Components/BottemBar';
import ServicePage from '../ServicePage';
export default function HomePage() {
    return (
        <div style={{backgroundColor:"#000080",borderRadius:'10px'}}>
            <Grid container sx={{width:"100%"}}>
                <Grid item sm={12}>
                    <TopBar />
                </Grid>
                <Grid item sm={12}>
                    <MainBar />
                </Grid>
                <Grid item sm={12} sx={{display: { xs: 'none', sm: 'block'}}}>
                    <SlidingContent  message={"Janatha Seva Kendra"}/>
                </Grid>
                <Grid item xs={12} sx={{display: { xs: 'block', sm: 'none'}}}>
                    <div></div>
                </Grid>
                <Grid item sm={12}>
                    <ImageScrool />
                </Grid>
                <Grid item sm={12}>
                    <SlidingContent message={"Apply for Partner login code, Manager code, Franchise partner code, District partner code,Taluk Partner code, Hobli Partner code, and take online business training and start your own business."}/>
                </Grid>
                <Grid item sm={12}>
                    <BottemBar />
                </Grid>
            </Grid>
            <ServicePage/>
        </div>
    );
}