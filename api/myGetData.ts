import { NextPageContext } from 'next';
import  Router  from 'next/router';


export async function myGetData(url:string,ctx:NextPageContext){
    const MY_API_URL = process.env.MY_API_URL || '' ;

    //******THIS IS CLIENT SIDE RENDERING******//
    const cookie = ctx.req?.headers.cookie
    const resp = await fetch(`${MY_API_URL}/api/${url}`, {
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
            Location: `${process.env.MY_API_URL}/login`
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


