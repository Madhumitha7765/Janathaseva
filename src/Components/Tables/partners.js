import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { LinearProgress, Box } from "@mui/material";
import axios from "axios";
import { alpha, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import NavBar from '../NavBar';
const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: green[600],
    '&:hover': {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: green[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function PartnersReq() {
  const [rows, setRows] = useState([
  ]);
  const [page, setPage] = React.useState(0);
  const [loding, setLoading] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleisActive = (item, index) => {
    axios({
      method: "PATCH",
      url: `https://janatha-seva.herokuapp.com/api/v1/partner/partner/${item._id}`,
      headers: {
        "Authorization": `Bearer ${window.sessionStorage.getItem('token')}`
      },
      data: {
        IsAccepted: !item.IsAccepted
      }
    }).then((res) => {
      if (res.data.error) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        const newrows = rows;
        newrows[index].IsAccepted = !newrows[index].IsAccepted;
        setRows([...newrows]);
      }
    }).catch((error) => {
      toast.error(error.response.data.message)
    })

  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://janatha-seva.herokuapp.com/api/v1/partner/partners`,
      headers: {
        "Authorization": `Bearer ${window.sessionStorage.getItem('token')}`
      }
    }).then((res) => {
      if (res.data.error) {
        toast.error(res.data.message);
      } else {
        console.log(res.data.data)
        setRows(res.data.data);
        setLoading(true);
      }
    }).catch((error) => {
      toast.error(error.response.data.error);
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <div style={{backgroundColor:"#000080",height:'97vh',borderRadius:'10px'}}>

      <NavBar>
        <Box sx={{ p: 4, overflow: 'hidden' }}>

          {
            (loding) ?
            <>
              <Box>
              <Paper sx={{ width: '100%', overflow: 'hidden',borderRadius:'10px' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Aadhar Card</TableCell>
                        <TableCell>Mobile Number</TableCell>
                        <TableCell>Partner Type</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                        <TableRow>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.FullName}</TableCell>
                          <TableCell>{item.UserName}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.AadharCard}</TableCell>
                          <TableCell>{item.MobileNumber}</TableCell>
                          <TableCell>{item.PartnerType}</TableCell>
                          <TableCell>
                            <GreenSwitch {...label} checked={item.IsAccepted} onChange={() => { handleisActive(item, index); }} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
              </Box>
            </>
              :
              <LinearProgress />
          }
        </Box>
      </NavBar>
      </div>
    </>
  );
}

{/* <Paper sx={{ overflow: 'scrool' }}>
  <TableContainer sx={{ }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          <TableCell>No.</TableCell>
          <TableCell>Full Name</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Aadhar Card</TableCell>
          <TableCell>Mobile Number</TableCell>
          <TableCell>Partner Type</TableCell>
          <TableCell>Active</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
          <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.FullName}</TableCell>
            <TableCell>{item.UserName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.AadharCard}</TableCell>
            <TableCell>{item.MobileNumber}</TableCell>
            <TableCell>{item.PartnerType}</TableCell>
            <TableCell>
              <GreenSwitch {...label} checked={item.IsAccepted} onChange={() => { handleisActive(item, index); }} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
    rowsPerPageOptions={[10, 25, 100]}
    component="div"
    count={rows.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
</Paper> */}