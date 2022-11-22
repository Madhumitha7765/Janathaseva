import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function TopBarMin() {
    return (
        <Box sx={{ p: 0,pl:3, mb:1,border: '0px solid white', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',background: 'dark-blue', boxShadow : "2px 5px 7px rgba(0,0,0,0.3)" }}>
            <Box >
                <Typography variant="h6" component="h6" sx={{ pr: 3, pl: 3, border: '1px solid white', borderRadius: '8px' }}>
                    Language
                </Typography>
            </Box>
            <Box sx={{ pr: 5, pl: 5,pt:0,pb:0, border: '1px solid white', borderRadius: '8px',display: 'flex', flexDirection:'column',justifyContent: 'space-between' }}>
                <Button
                    size="large"
                    target="_top"
                    rel="noopener noreferrer"
                    href={`mailto:jse.online.123@gmail.com`}
                    sx={{p:0,m:0}}
                >
                    <Typography variant="p" component="p" sx={{ color: 'white',p:0,m:0,fontSize:'12px'}} >
                        Email: jse.online.123@gmail.com
                    </Typography>
                </Button>
                <Button
                    size="large"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.jantasevakendra.com`}
                    sx={{p:0,m:0}}
                >
                    <Typography variant="p" component="p" sx={{ color: 'white',p:0,m:0 ,fontSize:'12px'}} >
                    Support: www.jantasevakendra.com
                    </Typography>
                </Button>
            </Box>
            <Box >
                <Typography variant="h6" component="h4" sx={{ p:0,pr: 2, pl: 2,border: '1px solid white',borderRadius: '8px',fontSize:'12px' }}>
                    CONTACT : 
                    <Button
                    size="large"
                    target="_top"
                    rel="noopener noreferrer"
                    href={`tel:9980385539`}
                    >
                        <Typography variant="p" component="h6" sx={{ color: 'white',fontSize:'12px' }} >
                        9980385539
                        </Typography>
                    </Button>/
                    <Button
                    size="large"
                    target="_top"
                    rel="noopener noreferrer"
                    href={`tel:7795805538`}
                    >
                        <Typography variant="p" component="h6" sx={{ color: 'white',fontSize:'12px' }} >
                        7795805538
                        </Typography>
                    </Button>

                </Typography>
            </Box>
            <Box >
                <Button
                style={{
                    color:'#3d5afe'
                }}
                target="_blank"
                href={`https://www.facebook.com/`}
                >
                    <FacebookIcon/>
                </Button>
                <Button
                style={{
                    color:'#00e5ff'
                }}
                target="_blank"
                href={`https://twitter.com/`}
                >
                    <TwitterIcon/>
                </Button>
                <Button
                style={{color:'#ff1744'}}
                target="_blank"
                href={`https://www.youtube.com/`}
                >
                    <YouTubeIcon/>
                </Button>
                <Button
                style={{color:'#e91e63'}}
                target="_blank"
                href={`https://www.instagram.com/`}
                >
                    <InstagramIcon/>
                </Button>
            </Box>

        </Box>
    );
}