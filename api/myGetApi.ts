import { NextPageContext } from "next";
import  Router  from "next/router";

export async function myGetApi(url:string,ctx:NextPageContext){
    const cookie = ctx.req?.headers.cookie
    const resp = await fetch(url,{
        headers:{
            cookie : cookie!
        }
    })
    if(resp.status === 401 && !ctx.req){
         Router.replace('/login');
         return {};
    }
    if(resp.status === 401 && ctx.req){
        ctx.res?.writeHead(302,{
            Location: 'http://localhost:3000/login'
        });
        ctx.res.end();
        return {};
    } 
    return {
        res : await resp.json()
    }
}
