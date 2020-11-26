import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { myGetApi } from '../../api/myGetApi';
import { NextPageContext } from 'next';
import { UserPerson } from '../../api/userPerson';


export interface PhonesProps{
  phoneList : UserPerson[] | undefined
}

export default function Phones({phoneList}:PhonesProps){
  

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
            {/* {phoneList.map((phone) => (
              <TableRow key={phone.id}>
                <TableCell component="th" scope="row">
                  {phone.id}
                </TableCell>
                <TableCell align="right">{phone.brand}</TableCell>
                <TableCell align="right">{phone.model}</TableCell>
                <TableCell align="right">{phone.ownerId}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    );
}


Phones.getInitialProps = async (ctx:NextPageContext) =>{
    const resp = await myGetApi("http://localhost:3000/api/phonesBrands",ctx);
    return {phoneList: resp.res}
}