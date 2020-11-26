import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import  Router  from 'next/router';

function SignUp(props) {
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState<any>(null);
    const handleSignUp = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: usernameRef.current.value,
                email: emailRef.current.value,
                password: passRef.current.value
            })
        }).then(async res => {
            const resp = await res.json()
            setMessage(resp)
            Router.replace('/')
        }).catch(err => {
            console.log("erro", err)
        });
        usernameRef.current.value=null;
        emailRef.current.value=null;
        passRef.current.value=null
    }

    return (
        <div>
            <form action="">
                <label htmlFor="username">
                    <p>Username:</p>
                    <input type="text" placeholder="username" ref={usernameRef} />
                </label>
                <label htmlFor="email">
                    <p>Email:</p>
                    <input type="text" placeholder="emial" ref={emailRef} />
                </label>
                <label htmlFor="password">
                    <p>Password:</p>
                    <input type="password" placeholder="password" ref={passRef} />
                </label>
                <br />
                <p></p>
                <button type='submit' onClick={handleSignUp}>SignUp</button>
            </form>
            {JSON.stringify(message)}
        </div>
    )
}

SignUp.propTypes = {

}

export default SignUp

