import React, { useState } from 'react'
import "./header.css"
import { Link } from 'react-router';

const Header = () => {

    let [val,setVal] =useState("");

    function handleSearch (e) {
        setVal(e.target.value.toLowerCase());
    }



    return (
        <header>
            <div className="container">
                <div className="logo">
                    f<span>oo</span>d z<span>o</span>ne
                </div>
                <div className="search">
                    <input type="text" name="text" placeholder='search food...' onChange={(e)=> handleSearch(e)}/>
                    <Link to={`/${val}`}><button>find</button></Link>
                </div>
            </div>
        </header>
    )
}

export default Header
