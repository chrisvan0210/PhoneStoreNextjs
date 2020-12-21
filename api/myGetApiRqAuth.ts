import { NextPageContext } from "next";
import  Router  from "next/router";

//This function to check WHEN Client request get data to see if they are already login or not 
export async function myGetApiRqAuth(url:string,ctx:NextPageContext){
    const cookie = ctx.req?.headers.cookie
    const resp = await fetch(url,{
        headers:{
            cookie : cookie!
        }
    })
    if(resp.status === 401 && !ctx.req){ // run if on Client side
         Router.replace('/login');
         return {};
    }
    if(resp.status === 401 && ctx.req){ // run if on Server side
        ctx.res?.writeHead(302,{
            Location: `${process.env.API_URL}/login`
        });
        ctx.res.end();
        return {};
    } 
    return {
        res : await resp.json()
    }
}
