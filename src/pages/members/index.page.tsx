import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext } from 'next'
import Router from 'next/router'
import { myGetApiRqAuth } from '../../../api/myGetApiRqAuth'
import { UserPerson } from '../../../api/typeData'
import { openDB } from '../../../api/openDB'
import { myGetData } from '../../../api/myGetData'

export interface MemberProps {
    userInfo: UserPerson;
}

export default function Members({ userInfo }: MemberProps) {
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

Members.getInitialProps = async (ctx : NextPageContext) =>{
    const resp = await myGetData('members',ctx);
    return { userInfo: resp.props.userInfo }
}