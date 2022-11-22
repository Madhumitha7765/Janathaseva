import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
export default function BottemBarService() {
    return (
        <Box sx={{width:"100%"}}>
        <hr style={{width:"100%"}}/>
        <Box sx={{ p: 1,pl:3,mt:3, width:'100%',border: '0px solid white', borderRadius: '12px', display: 'flex', justifyContent: 'center',flexWrap:"wrap", alignContent: 'center',background: 'dark-blue' }}>
            <Box sx={{ height:"35px",mt:"14px",mb:1,mr:3,pr: 5, pl: 5,pt:1,pb:1, border: '1px solid white', borderRadius: '8px',display: 'flex' }}>
                <Button
                    size="small"
                    target="_blank"
                    rel="noopener noreferrer"
                    // href={`https://drive.google.com/file/d/10IjVv9gq_3Brcny4CcDRGgwNJK1gCQ0z/view?usp=sharing`}
                    href={`https://docs.google.com/document/d/1XA11lmP3TltHDd45m6SMfUVQ0agxFKmv/edit?usp=sharing&ouid=114547666302978737657&rtpof=true&sd=true`}
                    sx={{p:0,m:0}}
                >
                    <Typography variant="p3" sx={{ color: 'white' }} >
                        About Us
                    </Typography>
                </Button>
            </Box>
            <Box sx={{height:"35px", mr:3,mb:1,mt:2,pr: 5, pl: 5,pt:1,pb:1, border: '1px solid white', borderRadius: '8px',display: 'flex' }}>
                <Button
                    size="small"
                    target="_blank"
                    rel="noopener noreferrer"
                    // href={`https://drive.google.com/file/d/1wLzefljzqbburUsau-2Ix7Ga5Kpegj_V/view?usp=sharing`}
                    href={`https://docs.google.com/document/d/1ldylASBX9TsKEvV-Budf5COiW1lpHoAh/edit?usp=sharing&ouid=113391294258492911665&rtpof=true&sd=true`}
                    sx={{p:0,m:0}}
                >
                    <Typography variant="p3" sx={{ color: 'white' }} >
                        WEBSITE POLICY
                    </Typography>
                </Button>
            </Box>
            <Box sx={{height:"35px",mt:2,mb:1, pr: 5, pl: 5,pt:1,pb:1, border: '1px solid white', borderRadius: '8px',display: 'flex',justifyContent:'center',alignContent:'center' }}>
                <Button
                    size="small"
                    target="_top"
                    rel="noopener noreferrer"
                    href={`mailto:support@janathaseva.com`}
                    sx={{p:0,m:0}}
                >
                    <Typography variant="p3" sx={{ color: 'white' }} >
                        CONTACT US
                    </Typography>
                </Button>
            </Box>
            

        </Box>
        </Box>
    );
}