import React from 'react'
import { NextPageContext } from 'next'
import  Router  from 'next/router'
import { myGetApiRqAuth } from '../../api/myGetApiRqAuth'

export default function Peoples({userList} : any ) {
    return (
        <div>
            {JSON.stringify(userList.res,null,2)}
        </div>
    )
}

Peoples.getInitialProps =async (ctx:NextPageContext)=>{
   const resp = await myGetApiRqAuth('http://localhost:3000/api/peoples',ctx)
    return {userList:resp};
}



