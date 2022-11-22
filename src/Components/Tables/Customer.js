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
import { LinearProgress,Box } from "@mui/material";
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import NavBar from '../NavBar';

const columns = [
  { id: 'FullName', label: 'Full Name', minWidth: 170,align: 'center', },
  { id: 'email', label: 'Email', minWidth: 100,align: 'center', },
  {
    id: 'MobileNumber',
    label: 'Mobile Number',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'ApplicationType',
    label: 'Application Type',
    minWidth: 370,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  //   {
  //     id: 'IsOpended',
  //     label: 'Is Opended',
  //     minWidth: 170,
  //     align: 'right',
  //   },
  //   {
  //     id: 'IsPending',
  //     label: 'Is Pending',
  //     minWidth: 170,
  //     align: 'right',
  //   },
  //   {
  //     id: 'IsComleted',
  //     label: 'Is Comleted',
  //     minWidth: 170,
  //     align: 'right',
  //   },
];



export default function ApplicationsTable() {
  const [rows, setRows] = useState([
  ]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [loding, setLoading] = React.useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const getData = async()=>{
    if (window.sessionStorage.getItem("token") === null) {
      if (window.localStorage.getItem("token") === null) {

      }
      else {
          await axios({
              method: "POST",
              url: `https://janatha-seva.herokuapp.com/api/v1/partner/check`,
              headers: {
                  "Authorization": `Bearer ${window.localStorage.getItem('token')}`
              },
          }).then(async(res) => {
              if (!res.data.error) {
                await axios({
                  method: "GET",
                  url: `https://janatha-seva.herokuapp.com/api/v1/customer/applications/partner`,
                  headers: {
                    "Authorization": `Bearer ${window.localStorage.getItem('token')}`
                  }
                }).then((res) => {
                  if (res.data.error) {
                    toast.error(res.data.message);
                  } else {
                    setLoading(true);
                    setRows(res.data.applications);
                  }
                }).catch((error) => {
                  toast.error(error.response.data.error);
                });
              } else {
                  window.localStorage.removeItem('token');
              }
          }).catch((error) => {
              toast.error(error.response.data.message)
          })
      }
  }
  else {
      await axios({
          method: "POST",
          url: `https://janatha-seva.herokuapp.com/api/v1/admin/check`,
          headers: {
              "Authorization": `Bearer ${window.sessionStorage.getItem('token')}`
          },
      }).then(async(res) => {
          if (res.data.check) {
            await axios({
              method: "GET",
              url: `https://janatha-seva.herokuapp.com/api/v1/customer/applications/admin`,
              headers: {
                "Authorization": `Bearer ${window.sessionStorage.getItem('token')}`
              }
            }).then((res) => {
              if (res.data.error) {
                toast.error(res.data.message);
              } else {
                setLoading(true);
                setRows(res.data.applications);
              }
            }).catch((error) => {
              toast.error(error.response.data.error);
            });
          } else {
              window.sessionStorage.removeItem('token');
          }
      }).catch((error) => {
          toast.error(error.response.data.message)
      })
  }
    
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div style={{backgroundColor:"#000080",height:'97vh',borderRadius:'10px'}}>

      <NavBar>
        <Box sx={{p:4}}>

        {
          (loding) ?
            <Paper sx={{ width: '100%', overflow: 'hidden',borderRadius:'10px' }}>
              <TableContainer sx={{backgroundColor: 'rgba(255,255,255,0)' }}>
                <Table stickyHeader aria-label="sticky table" sx={{ border: '1px solid white', backgroundColor: 'rgba(255,255,255,0)',borderRadius:'20px' }}>
                  <TableHead sx={{backgroundColor: 'rgba(255,255,255,0)'}}>
                    <TableRow sx={{backgroundColor: 'rgba(255,255,255,0)'}}>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth,backgroundColor: 'rgba(255,255,255,0.7)' }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[3,10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
            :
            <LinearProgress />
        }
        </Box>
      </NavBar>
      </div>
    </>
  );
}
