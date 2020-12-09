import Link from 'next/link'
import React from 'react'

function index() {
    return (
        <div>
            <h2>HomePage!</h2>
                <Link href="/members">
                    <a >Go to Members Page</a>
                </Link>
                <br></br>
                <Link href="/phones">
                    <a >Go to Phones Page</a>
                </Link>
                <br></br>
                <Link href="/laptops">
                    <a >Go to Laptops Page</a>
                </Link>
        </div>
    )
}

export default index
