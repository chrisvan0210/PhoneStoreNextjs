import React from 'react'
import getConfig from 'next/config'
// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side
console.log("private",serverRuntimeConfig.MY_SECRET)
// Will be available on both server-side and client-side
console.log("public",publicRuntimeConfig.API_ENDPOINT)


function testEnv(props) {
    console.log("props",props)
    return (
        <div>
            Secret:
            <pre>{JSON.stringify(props,null,4)}</pre>
        </div>
    )
}

export default testEnv


export const getServerSideProps = () =>{
    return {props:{
        // MY_SECRET : serverRuntimeConfig.MY_SECRET, // DO NOT SEND THE SECRET THROUGH getServerSidePorps
        END_POINT : publicRuntimeConfig.API_ENDPOINT
    }}
}