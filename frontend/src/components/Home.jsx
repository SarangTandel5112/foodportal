import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to="/order">
                <button className='btn btn-lg btn-primary homebtn'>Place Order</button>
            </Link>
            <Link to="/feedback">
                <button className='btn btn-lg btn-primary homebtn'>Give Feedback</button>
            </Link>
        </div>
    )
}

export default Home