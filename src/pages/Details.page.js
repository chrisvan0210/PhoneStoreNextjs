import PropTypes from 'prop-types'
import Link from 'next/link'




function Details() {
    const list = [
        { v: 'bikes', person: "dog" },
        { v: 'motos', person: "cat" },
        { v: 'cars', person: "bird" },
    ]
    return (
        <div>
            {list.map((e) => {
                return (
                    <div key={e.person}>
                        <Link href={`/${e.v}/${e.person}`}>
                            <a>{e.person + " " + e.v}</a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Details

