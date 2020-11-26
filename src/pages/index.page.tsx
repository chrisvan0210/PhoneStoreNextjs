import Link from 'next/link'
import React from 'react'

function index() {
    return (
        <div>
            <h2>HomePage!</h2>
                <Link href="/peoples">
                    <a >Go to Peoples Page</a>
                </Link>
                <br></br>
                <Link href="/phones">
                    <a >Go to Phones Page</a>
                </Link>
        </div>
    )
}

export default index
