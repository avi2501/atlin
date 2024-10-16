import React from "react";
import "../desgin/service.css";
import web from "../media/web_desgin.jpg";
import brand from "../media/brading.jpeg";
import digital from  "../media/digital.jpg";
import { NavLink } from "react-router-dom";
import talk from "../media/let.png";

const Service = () => {
    return (
        <>
            <div id="seric">
                <p className="text " id="ser_te">Service</p>
                <p className="text " id="ser_tl">
                    Desiging brands , shaping strategy, driving growth.
                </p>
            </div>
            {/* this is the first div of web development */}


            <div className="row container mt-5 ms-5">
                <div className=" col-6">
                    <div>
                        <p className="text mt-5"><b><b>01</b></b></p>
                        <p className=" web">
                            Web design
                        </p>
                        <p className="web_t ms-2 ">
                            @ Custom Web design <br />
                            @ Content management system (CMS) desgin<br />
                            @ User experience (UX) design <br />
                            @ E-Commerce<br />
                            @ Web Application design
                        </p>
                        <div id="btn1" className="ms-2 mt-4">
                            <NavLink className="link1 ps-2" to="/Service/web_development/contactUs">LET'S TALK</NavLink>
                        </div>
                    </div>

                </div>
                <div className=" col-6">
                    <img className="img img-fluid" id="web_img" src={web} />
                </div>
            </div>


            {/* this is second div of brand strategy */}

            <div className="row container mt-5 ms-5">
                <div className=" col-6">
                    <img className="img img-fluid" id="web_img2" src={brand} />
                </div>

                <div className=" col-6 ">
                    <div>
                        <p className="text mt-5  ms-5"><b><b>02</b></b></p>
                        <p className=" web ms-5">
                           Brand strategy
                        </p>
                        <p className="web_t ms-5 ">
                            @ Breand identity development - logo, color, palette , typography and so on.<br />
                            @ Brand guidelines developemnt<br />
                            @ Competitve analysis <br />
                            @ Brand positiongs and messaging<br />
                            @ Digital design<br/>
                            @ Brand messaging<br/>
                        </p>
                        <div id="btn1" className="ms-5 mt-4">
                            <NavLink className="link1 ps-2" to="/Service/Branding/contactUs">LET'S TALK</NavLink>
                        </div>
                    </div>

                </div>
            </div>
{/* this is digital marketing div blok */}

            <div className="row container mt-5 ms-5">
                <div className=" col-6">
                    <div>
                        <p className="text mt-5"><b><b>03</b></b></p>
                        <p className=" web">
                           Digital Marketing
                        </p>
                        <p className="web_t ms-2 ">
                            @ Search Engine Optimization <br />
                            @ Googls ads<br />
                            @ Facebooks Ads <br />
                            @ Instagram Ads<br />
                            @ Linkdin Ads<br />
                            @ Amazon Ads<br />
                            @ Youtube Marketing<br/>
                            @ Social Media Marketing
                        </p>
                        <div id="btn1" className="ms-2 mt-4">
                            <NavLink className="link1 ps-2" to="/Service/web_development/contactUs">LET'S TALK</NavLink>
                        </div>
                    </div>

                </div>
                <div className=" col-6 mt-4">
                    <img className="img img-fluid" id="web_img" src={digital} />
                </div>
            </div>


            <div className=" row container mt-5 ms-5">
                <div className="col-4 mt-5">
                    <img src={talk} className="let mt-5 ms-5"></img>
                </div>
                <div className="col-6 mt-3 ms-5 mt-5">
                    <p className="text text-start ms-5 mt-2" id="start">Start Today.</p>
                    <p className="text text-start ms-5 mt-2">Lets talk about your business and how we can help you to achive you them.</p>
                    <div id="btn1" className="ms-5 mt-4">
                        <NavLink className="link1 ps-2" to="/Home/Services/contactUs">LET'S TALK</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Service;