import React, { useEffect, useState } from 'react'
import "./home.css"
import Foodcard from '../foodCard/Foodcard'
import axios from 'axios'
import Loading from '../loading/Loading'



const Home = () => {

    let [foodMenu,setFoodMenu]=useState([]);

    useEffect(()=> {
        axios.get("http://localhost:9000/allFood").then((data)=> {
            setFoodMenu(data.data);
        })
    },[]);

    return (
        <div className='home'>
            {
                foodMenu.length===0 ? <Loading/> :
                <div className="container">
                    {
                        foodMenu.map((ele,i)=>
                        <Foodcard key={i} card={ele}/>
                        )
                    }
                </div>
            }
            
        </div>
    )
}

export default Home
