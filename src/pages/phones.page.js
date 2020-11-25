import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Phones({lists}){
  

    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((list) => (
              <TableRow key={list.id}>
                <TableCell component="th" scope="row">
                  {list.id}
                </TableCell>
                <TableCell align="right">{list.brand}</TableCell>
                <TableCell align="right">{list.model}</TableCell>
                <TableCell align="right">{list.ownerId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}


Phones.getInitialProps = async () =>{
    const resp = await fetch("http://localhost:3000/api/phonesBrands");
    const data = await resp.json();
    return {lists : data}
}