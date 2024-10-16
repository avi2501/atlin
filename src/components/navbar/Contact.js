import React from "react";
import call from "..//media/contact.png";
import "../desgin/contact.css";
const Contact = () => {
    return (
        <>
            <div id="seric">
                <p className="text  " id="ser_te">Contact Us</p>
            </div>
            <div className="row container mt-5">
                <div className="col-4">
                    <img src={call} id="call"></img>

                </div>
                <div className="col-8 mt-2">
                    <p className="cont_text">Contact Us</p>
                    <p className="tom">Phone no:- 91-7042345275<br/>
                    Email address:- ashutoshkumarpandey10127@gmail.com</p>
                </div>
            </div>
        </>
    )

}
export default Contact;