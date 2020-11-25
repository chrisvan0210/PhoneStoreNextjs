import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter, withRouter } from 'next/router'
import { UserPerson } from '../../../api/userPerson'
import { NextPageContext } from 'next'


export interface UsernameProps {
    users ? : UserPerson[];
}

function Username({ users } : UsernameProps) {
    const router = useRouter()
    const [usersList, setUsersList] = useState(users)
    useEffect(() => {
        async function loadData() {
            const res = await fetch(`http://localhost:4001/users?phone=${router.query.phone}&username=${router.query.username}`)
            const usersL = await res.json()
            setUsersList(usersL)
        }
        if (users.length == 0) {
            loadData();
        }
    }, [])

    const renderUser = () =>{
        let listFri: JSX.Element;
        if (usersList.length !== 0) {
            listFri = (
                <div>
                    <h3>{usersList[0].username}</h3>
                    <h2>{usersList[0].phone}</h2>
                    {
                        usersList[0].friend.map((friend, index) => (
                            <li key={index}>
                                friend {index + 1} : {friend.name}
                            </li>
                        ))
                    }
                </div>
            )
        }
        return listFri
    }

    return (
        <div>
            {
            usersList.length === 0 ? <div>Loading...</div> : renderUser() 
            }   
        </div>
    )
}


// custome your types by extends from original
interface MyNextPageContext extends NextPageContext {
    query:{
        phone : string;
        username:string;
    }
}

Username.getInitialProps = async (ctx: MyNextPageContext) => {
    if (!ctx.req) {
        return { users: [] };
    }
    const query = ctx.query
    const res = await fetch(`http://localhost:4001/users?phone=${query.phone}&username=${query.username}`)
    const users : UserPerson[] | undefined = await  res.json()
    return { users: users }
}

Username.propTypes = {

}

export default Username

