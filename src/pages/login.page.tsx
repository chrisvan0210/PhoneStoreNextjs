import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import  Router  from 'next/router';


function Login(props) {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState<any>(null);
    const  handleLogin= async (e)=>{
        e.preventDefault();
        await fetch(`${process.env.API_URL}/api/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email:emailRef.current.value,
                password:passRef.current.value
            })
        }).then(async res=>{
        const resp = await res.json();
         setMessage(resp);
         if(res.status === 200){
            Router.replace('/');
         }
        }).catch(err=>{
            setMessage("Email or password is not correct!");
        });
        emailRef.current.value=null;
        passRef.current.value=null
    }

    return (
        <div>
            <form action="">
                <label htmlFor="email">
                    <p>Email:</p>
                <input type="text" placeholder="emial" ref={emailRef} />
                </label>
                <label htmlFor="password">
                    <p>Password:</p>
                <input type="password" placeholder="password" ref={passRef} />
                </label>
                <br/>
                <p></p>
                <button type='submit' onClick={handleLogin}>Login</button>
            </form>
            {JSON.stringify(message)}


            <div>
                <Link href="/signup">
                <a>signup here</a>
                </Link>
            </div>
        </div>
    )
}

Login.propTypes = {

}

export default Login

