import React, { useRef } from 'react'
import "./navbar.css"
import { Link } from 'react-router'



const Navbar = () => {

    return (
        <nav>
            <ul>
                <Link to={"/"}><li>all</li></Link>
                <Link to={`breakfast`}><li>breakfast</li></Link>
                <Link to={`lunch`}><li>lunch</li></Link>
                <Link to={`dinner`}><li>dinner</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar
