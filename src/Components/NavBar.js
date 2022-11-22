import * as React from 'react';
import { Grid } from '@mui/material';
import TopBar from './TopBar';
import MainBar from './MainBar';
export default function NavBar(props) {
    return (
        <>

            <Grid container>
                <Grid item sm={12}>
                    <TopBar />
                </Grid>
                <Grid item sm={12}>
                    <MainBar isAdmin={true}/>
                </Grid>
                <Grid item sm={12} xs={12}>
                    {props.children}
                </Grid>
            </Grid>
        </>
    );
}