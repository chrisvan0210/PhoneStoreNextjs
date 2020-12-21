import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext } from 'next'
import Router from 'next/router'
import { myGetApiRqAuth } from '../../../api/myGetApiRqAuth'
import { UserPerson } from '../../../api/typeData'
import { openDB } from '../../../api/openDB'

export interface MemberProps {
    userInfo: UserPerson;
}

export default function Peoples({ userInfo }: MemberProps) {
    return (
        <div>
            
            <h2>This is list of members:</h2>
            <br></br>
            {
                userInfo.map((user, idx) => {
                    return (
                        <div key={idx}>
                            {user.name}
                        </div>
                    )
                })
            }
        </div>
    )
}


export const getServerSideProps: GetServerSideProps<MemberProps> = async (ctx: GetServerSidePropsContext) => {


    //******THIS IS SERVER SIDE RENDERING******//
    // const db = await openDB();
    // const userInfo = await db.all('select name,email from people')
    // return { props: { userInfo: userInfo} };



    //******THIS IS CLIENT SIDE RENDERING******//
    const cookie = ctx.req?.headers.cookie
    const resp = await fetch(`${process.env.API_URL}/api/peoples`, {
        headers: {
            cookie: cookie!
        }
    })
    if (resp.status === 401 && !ctx.req) { // run if on Client side
        Router.replace('/login');
        return { props: { userInfo: await resp.json() } };
    }
    if (resp.status === 401 && ctx.req) { // run if on Server side
        ctx.res?.writeHead(302, {
            Location: `${process.env.API_URL}/login`
        });
        ctx.res.end();
        return { props: { userInfo: await resp.json() } };
    }
    return { props: { userInfo: await resp.json() } };
}

    //******SET DELAY LOADING******//
    // await new Promise(delay =>{
    //     setTimeout( delay,2000)
    // })