import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import Foodcard from '../foodCard/Foodcard'
import axios from 'axios'
import Loading from "../loading/Loading"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
import "./meal.css"

const Meal = () => {

    let [foodMenu,setFoodMenu]=useState([]);
    let {dishName}=useParams();
    let showMessage= withReactContent(Swal);

    useEffect(()=> {
        axios.get("http://localhost:9000/allFood").then((data)=> {
            setFoodMenu(data.data);
            const foundDish = data.data.some(e => e.name.toLowerCase() === dishName || e.type.toLowerCase() === dishName);
            if(!foundDish) {
                showMessage.fire({
                    title :"Type dish's name correctly"
                })
            }
        });
        

    },[dishName]);

    return (
        <div className='meal'>
            {
                foodMenu.length===0 ? <Loading/> :
                <div className="container">
                    {
                        foodMenu.filter((e)=> e.name.toLowerCase() === dishName || e.type.toLowerCase() === dishName).map((ele,i)=>
                        <Foodcard key={i} card={ele}/>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Meal
