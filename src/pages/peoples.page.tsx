import React from 'react'
import { NextPageContext } from 'next'
import  Router  from 'next/router'
import { myGetApi } from '../../api/myGetApi'

export default function Peoples({userList} : any ) {
    return (
        <div>
            {JSON.stringify(userList)}
        </div>
    )
}

Peoples.getInitialProps =async (ctx:NextPageContext)=>{
   const resp = await myGetApi('http://localhost:3000/api/peoples',ctx)
    return {userList:resp};
}



