import * as React from 'react';
import { Box, Typography,Divider } from '@mui/material';
export default function Service(props) {

    return (
        <>
            <div
                style={{
                    marginRight: 10,
                    marginLeft: 10,
                    marginBottom: 10,
                    height: '370px', width: 'auto',
                }}
            >
                <Box width={260} sx={{ p: 1, border: '1.3px solid white', borderRadius: '20px', textAlign: 'center', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)",height:'400px' }}>
                    <Box sx={{ p: 2, borderRadius: '8px', textAlign: 'center', background: 'rgba(0,0,0,0.4)', width: '100%' }}>
                        <Typography variant="p" component="p" >
                            {props.title}
                        </Typography>
                    </Box>
                    <Box sx={{maxHeight:'310px',overflowY:'auto'}}>
                    {
                        props.subcat.map((catagory) =>
                            <>

                            <Box sx={{ width: '100%', 'overflow-y': 'hidden', flex: '1', textAlign: 'left' }}>
                                <Typography variant="p" component="p" sx={{ ml: 1, fontWeight: 'bold',cursor:'pointer' }} onClick={props.handleOpen}>
                                    {catagory.Cat1}
                                </Typography>
                                {
                                    catagory.subsubcat.map((sub) =>
                                        <>

                                            <Typography variant="p" component="p" sx={{ ml: 4, fontWeight: 'bold' }}>
                                                {sub.Cat2}
                                            </Typography>
                                            <Typography variant="p" component="p" sx={{ ml: 6, fontWeight: 'light' }}>
                                                <Typography variant="p" component="p" sx={{ fontWeight: 'bold', mb: 0 }}>
                                                    REQUIRED DOCUMENTS
                                                </Typography>
                                                {sub.Cat3}
                                            </Typography>
                                        </>
                                    )
                                }
                            </Box>
                            <Divider sx={{ mt: '7px', mb: '7px' }}></Divider>
                            </>
                        )
                    }
                    </Box>
                </Box>
            </div>
        </>

    );
}