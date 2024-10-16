import React from "react";
import pic1 from '../media/pic1.jpg';
import '../desgin/card.css';
import { NavLink } from "react-router-dom";
const Card = (props) => {
    return (
        <div class="card" id="text" >
            <img src={props.value} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <div id="btn1" className="ms-5 mt-4">
                    <NavLink className="link1 ps-2" to="/Home/Services">Read more</NavLink>
                </div>
            </div>

        </div>
    )
};
export default Card;