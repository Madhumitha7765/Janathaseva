import * as React from 'react';
import { Box, Modal } from '@mui/material';
import CustomerReqForm from '../Forms/Customerform';
import PancardForm from '../Forms/Pancardform';
import Service from './Service';
export default function Services() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    var data = [
        {
            title: 'Digital Service',
            subcat: [
                {
                    Cat1: 'PAN CARD',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'PASSPORT',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'VISA SERVICES',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'AADHAR CARD',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'VOTER ID',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'RATION CARD',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'EPFO SERVICES',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'AYUSHMAN CARD',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'LABOUR CARD',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'SENIOR CITIZEN CARD',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'SEVA SINDHU SERVICES',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'POLICE JOB VERIFICATION CERTIFICATE',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'CAST AND INCOME',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'RESIDENCE CERTIFICATE',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'FAMILY TREE',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'PENSION',
                    subsubcat: [

                    ]
                },
                {
                    Cat1: 'BIRTH AND DEATH CERTIFICATE',
                    subsubcat: [

                    ]
                },
            ]
        },
        {
            title: 'CIVIL (CONSTRUCTION SERVICES)',
            subcat: [
                {
                    Cat1: 'BUILDING PLAN',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'STRUCTURAL ENGINEERING',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'BUILDING DESIGN',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'ARCHITECTURE PLANNING',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'CONSTRUCTION FULL PACKAGE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'INTERIOR DESIGN AND DESIGNERS',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'APPLICATION FOR ISSUANCE OF NEW LICENSE TO THE CONTRACTOR UNDER THE CONTRACT LABOUR ACT,1970',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'AUDITING SERVICES',
            subcat: [
                {
                    Cat1: 'GST',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'ESI',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'TAN',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'UDYAM REGISTRATION',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'TRADE LICENSE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'LABOUR LICENSE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'AUDITING',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'ACCOUNTING',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'INCOME TAX FILLING',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'ROC WORKING',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'MSME',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'BUSINESS LICENSE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'FOOD LICENSE ',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'EDUCATIONAL SERVICES',
            subcat: [
                {
                    Cat1: 'COLLEGE LIST AND INFO',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'HOSTELS LIST AND INFO',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'EDUCATION LOANS',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'SCHOLARSHIPS',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'FREE COACHING INFO',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'COMPETATIVE EXAMS INFO',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'COACHING CENTERS INFO DIFFERENT COURSES',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'SPORTS INFO FOR STUDENT',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'FREE COURSES COURSE LIST AND INFORMATIONS',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'APPLICATION FOR NEW COLLEGE/COURSE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'APPLICATION FOR ISSUE OF PROVISIONAL DEGREE CERTIFICATE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'APPLICATION FOR CHANGES OF COLLEGE-GULBARGA UNIVERSITY',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'APPLICATION FOR DUPLICATE MARKS CARD',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'APPLICATION FOR DUPLICATE DIPLAMO CERTIFICATE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'ISSUE OF ELIGIBILITY CERTIFICATE-DIPLAMO',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'APPLICATION FOR ISSUE OF DEGREE CERTIFICATE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'APPLICATION FOR BUS PASS',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'ADVOCATE SERVICES',
            subcat: [
                {
                    Cat1: 'HIGH COURT',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'SUPREME COURTS',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'SENIOR ADVOCATE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'JUNIOR ADVOCATE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'CIVIL ',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'CRIME & OTHERS',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'AGRICULTURAL SERVICES ',
            subcat: [
                {
                    Cat1: 'APPLICATION FOR LICENSE TO MANUFACTURE AND/OR TRADE POULTRY AND LIVESTOCK FEED',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'AMENDMENT OF MANUFACTURING LICENSE FOR NPK MIXTURE FERTILIZERS',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'AMENDMENT OF MANUFACTURING LICENSE FOR MICRO NUTRIENTS MIXTURE FERTILIZERS',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'BANKING SERVICES',
            subcat: [
                {
                    Cat1: 'CREDIT CARDS',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'LOANS',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'ACCOUNT OPEN',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'E-BOOKING SERVICES',
            subcat: [
                {
                    Cat1: 'BUS TICKET BOOKING',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'TRAIN TICKET BOOKING',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'FLIGHT TICKET BOOKING',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'RTO SERVICES',
            subcat: [
                {
                    Cat1: 'DRIVING/LEARNER LICENSE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'VEHICLE RELATED SERVICES',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'INSURANCE SERVICES',
            subcat: [
                {
                    Cat1: 'VEHICLE INSURANCE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'HEALTH INSURANCE',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'LIFE INSURANCE',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'EMPLOYMENT SERVICES',
            subcat: [
                {
                    Cat1: 'COMPANY INFO',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'POST YOUR RESUME',
            subcat: [
                {
                    Cat1: 'INFORMATION',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'GOVERNMENT JOBS INFO',
            subcat: [
                {
                    Cat1: 'JOBS INFO',
                    subsubcat: [
                    ]
                },
            ]
        },
        {
            title: 'E-STAMP SERVICES',
            subcat: [
                {
                    Cat1: 'INFORAMTION ABOUT',
                    subsubcat: [
                    ]
                },
                {
                    Cat1: 'E-STAMP',
                    subsubcat: [
                    ]
                },
            ]
        },
    ]
    // var data = [
    //     {
    //         title:'Digital Service',
    //         subcat:[
    //             {
    //                 Cat1:'PAN CARD',
    //                 subsubcat:[
    //                     {
    //                         Cat2:'New Application',
    //                         Cat3:'AADHAR CARD, 2 PASSPORT SIZE PHOTO, SSLC MARKS CARD, TC, MOB NO/EMAIL ID.'
    //                     },
    //                     {
    //                         Cat2:'DUPLICATE/CORRECTION',
    //                         Cat3:'AADHAAR CARD, 2 PASSPORT PHOTO, OLD PAN NO, MOB NO/EMAIL ID,'
    //                     },
    //                     {
    //                         Cat2:'E-PAN',
    //                         Cat3:'AADHAAR CARD, MOB NO/ EMAIL ID,'
    //                     },
    //                 ]
    //             },
    //             {
    //                 Cat1:'PASSPORT',
    //                 subsubcat:[
    //                     {
    //                         Cat2:'NEW PASSPORT',
    //                         Cat3:'AADHAR CARD, PAN CARD,SSLC MARKS CARD, DRIVING LICENSE (Any 2 documents), MOB NO/EMAIL ID.'
    //                     },
    //                     {
    //                         Cat2:'DUPLICATE',
    //                         Cat3:'OLD PASSPORT COPY,FIR COMPLAINT COPY, AFFIDAVIT FOR LOSS OF ORIGINAL PASSPORT, AADHAR CARD, PAN CARD, MOB NO/ EMAIL ID.'
    //                     },
    //                     {
    //                         Cat2:'CORRECTION',
    //                         Cat3:'OLD PASSPORT COPY, AADHAR CARD, PAN CARD, MOB NO/EMAIL ID.'
    //                     },
    //                     {
    //                         Cat2:'RENEWAL ',
    //                         Cat3:'OLD PASSPORT COPY, AADHAR CARD, PAN CARD, MOB NO/EMAIL ID.'
    //                     },
    //                 ]
    //             },
    //             {
    //                 Cat1:'VISA SERVICES',
    //                 subsubcat:[
    //                     {
    //                         Cat2:'Services',
    //                         Cat3:'PASSPORT, COUNTRY DETAILS, REASON FOR VISIT TO THE COUNTRY'
    //                     },
    //                 ]
    //             },
    //             {
    //                 Cat1:'AADHAR CARD',
    //                 subsubcat:[
    //                     {
    //                         Cat2:'NEW AADHAR ENROLEMENT',
    //                         Cat3:'BELOW 5 YEARS(BIRTH CERTIFICATE, PARENTS AADHAAR CARD)'
    //                     },
    //                     {
    //                         Cat2:'AADHAR BIOMETRIC',
    //                         Cat3:'AADHAAR CARD'
    //                     },
    //                     {
    //                         Cat2:'CORRECTION IN AADHAR',
    //                         Cat3:'PAN CARD/SCHOOL TC/MARKS CARD/GAZETTED FORM/VOTER ID/BANK PASBOOK/DRIVING LICENSE / TAX PAID RECEIPT/ SALE DEED /ELECTRICITY BILL,WATER BILL, GAS BILL.. ETC…'
    //                     },
    //                     {
    //                         Cat2:'CORRECTION (MOB NO, EMAIL-ID)',
    //                         Cat3:'AADHAAR CARD'
    //                     },
    //                     {
    //                         Cat2:'AADHAR CARD PRINT-OUT',
    //                         Cat3:'NA'
    //                     },
    //                 ]
    //             },
    //             {
    //                 Cat1:'VOTER ID',
    //                 subsubcat:[
    //                     {
    //                         Cat2:'NEW  VOTER-ID',
    //                         Cat3:'AADHAAR CARD, 1 PASSPORT SIZE PHOTO, RENT/LEASE AGREEMENT,GASBILL,ELECTRICITY BILL, WATER BILL, DRIVING LICENSE, PAN CARD'
    //                     },
    //                     {
    //                         Cat2:'CORRECTION/DUPLICATE',
    //                         Cat3:'AADHAAR CARD, DRIVING LICENSE, PAN CARD, BANK PASS BOOK ETC..'
    //                     },
    //                     {
    //                         Cat2:'VOTER ID PRINT-OUT',
    //                         Cat3:'NA'
    //                     },
    //                 ]
    //             },
    //             {
    //                 Cat1:'RATION CARD',
    //                 subsubcat:[
    //                     {
    //                         Cat2:'NEW APPLICATION',
    //                         Cat3:'AADHAAR CARD, INCOME CERTIFICATE, MOB NO/EMAIL ID'
    //                     },
    //                     {
    //                         Cat2:'CORRECTION, FAMILY MEMBER ADD/DELETE, DEPO CHANGE, CHANGE OF ADDRESS.',
    //                         Cat3:'AADHAAR CARD, MOB NO/EMAIL ID.'
    //                     },
    //                     {
    //                         Cat2:'RATION CARD PRINT-OUT',
    //                         Cat3:'NA'
    //                     },
    //                 ]
    //             },
    //         ]
    //     },
    // ]
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* <CustomerReqForm handleClose={handleClose} /> */}
                <PancardForm  handleClose={handleClose} />
            </Modal>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{ p: 1, pl: 6, pr: 6, pb: 4, m: 2, border: '0px solid white', borderRadius: '12px', background: 'dark-blue', height: '450px', position: 'relative', overflow: 'scroll', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)" }}>
                    {
                        data.map((data) => {
                            return (
                                <Service sx={{ mb: 5 }} title={data.title} subcat={data.subcat} handleOpen={handleOpen} />
                            );
                        })
                    }
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{ p: 1, pl: 1, pr: 1, pb: 4, m: 2, border: '0px solid white', borderRadius: '12px', background: 'dark-blue', height: '450px', position: 'relative', overflow: 'scroll', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)" }}>
                    {
                        data.map((data) => {
                            return (
                                <Service sx={{ mb: 5 }} title={data.title} subcat={data.subcat} handleOpen={handleOpen} />
                            );
                        })
                    }
                </Box>
            </Box>
        </>
    );
}