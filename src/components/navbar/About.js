import React from "react";
import "../desgin/About.css";
import talk from "../media/let.png";
import { NavLink } from "react-router-dom";
const About = () => {
    return (
        <>
            <div id="seric">
                <p className="text  " id="ser_te">About Us</p>
            </div>
            <p className="text text-center mt-5 " id="anb">About Us</p>
            <p className="text text-center ">We are specialize in crafting and purposal design to elevate your brand and identity<br />
                From developing a chesive brabding ctrategy to creating complelling visual assets, our team of expert<br />
                has the experience and expertise to bring your brand and identity to life in a way that resonates with your b audience and<br />
                positions you for success in the market place.trut us to help you unlock the full potentail of your brand and identity <br />
                and to showcase it to the world in a way that is truly one-of-a-kind.<br />
                At Atlin ,our core value are built ona foundation of honesty, ingenuity and exceptional service.<br />
                In a world where these calues can to hard to come by , we belive  in providing our clients with high-quality serivces  that deliver result.<br />
                We belive that being genuine and transparent with our clients is essential to building strong relationships.<br />
                we communicate clearly and to honestly ,so our clients always know exactly what they can expect from us<br />
                Ultimately , our goel is to help our clients achive success , we do this by providing exceptional services that meet their <br />
                unquie neesa and exced their exceptions. Our commitment to honesty,ingenuity and seri set us a apart  <br />
                and we are proud to stand by these vakues as we wirk to help our clients succeed.
            </p>
            <div className=" row container mt-6">
                <div className="col-4">
                    <img src={talk} className="let mt-5 ms-5"></img>
                </div>
                <div className="col-6 mt-3 ms-5 mt-5">
                    <p className="text text-start ms-5 mt-2" id="start">Start Today.</p>
                    <p className="text text-start ms-5 mt-2">Lets talk about your business and how we can help you to achive you them.</p>
                    <div id="btn1" className="ms-5 mt-4">
                        <NavLink className="link1 ps-2" to="/Service/AboutUs/contactUs">LET'S TALK</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
};
export default About;