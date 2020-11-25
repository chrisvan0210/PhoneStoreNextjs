import React from 'react'
import Link from 'next/link'
import { UserPerson } from '../../api/userPerson'

export interface UsersProps{
    users : UserPerson[]|undefined;
}

function Users({ users }:UsersProps) {
    console.log(users)
    return (
        <div>
            {users.map((user,index) => {
                return (
                    <div key={index}>
                        <Link href={`/${user.phone}/${user.username}`}>
                            <h2 >{user.username + ": " + user.phone}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}




Users.getInitialProps = async () => {
    const res = await fetch('http://localhost:4001/Users')
    const users : UserPerson[] | undefined = await res.json()
    return { users: users }
}

export default Users
