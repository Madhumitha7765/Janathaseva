import * as React from 'react';
import { Box, Typography } from '@mui/material';
export default function MainBarService() {

    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                <Box sx={{ p: 1, pl: 3, mt: 4, borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'dark-blue', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)" }}>

                    <Box sx={{ pr: 12, pl: 12, pt: 1, pb: 1, border: '1.3px solid white', borderRadius: '8px', textAlign: 'center' }}>
                        <Typography variant="h3" component="h3" >
                            Main Service List
                        </Typography>
                    </Box>

                </Box>

            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' }}}>

                <Box sx={{ p: 1, pl: 3, mt: 1, borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'dark-blue', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)" }}>

                    <Box sx={{ pr: 8, pl: 8, pt: 1, pb: 1, border: '1.3px solid white', borderRadius: '8px', textAlign: 'center' }}>
                        <Typography variant="h6" component="h6" >
                            Main Service List
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </>
    );
}