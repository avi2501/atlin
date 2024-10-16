import React from "react";
import office from '../media/office.jpg';
import '../desgin/Home.css';
import Card from "../component/Card";
import pic1 from '../media/pic1.jpg';
import pic2 from '../media/ai.jpg';
import pic3 from '../media/pic3.jpg';
import talk from "../media/let.png";
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <>
 {/* this is the slider code using from boosstraop 5  */}

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={office} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={office} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={office} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <p id="aim" className="text text-center mt-3">WE WORK ON</p>
            <p  id="aim_text" className="text text-center">Artificial Intelligence .Atlin is not a only name or brand, it is group of team who continouly doing  research on <br/> Artificial Intelligence to make it more advance and fexilble to move your buisness to next level.Our main target is data that are very diffuclt to handle at a point.<br/> Ane we try to make data more easy to handle without matter the how the scrumble data we have . we also deal in hardware compenent based on Artificial Intelligence.</p>


      
{/* here we use card component and provide the image , text, heading for the card */}


        <div className=" row ms-5 mt-5">
        <div className="col-3"><Card value={pic1} title={"Digital Marketing"} text={"we provide a severial kind of service for business developemnt  like  digital makrting , seo, Advertisiment and other service.."} /></div>
        <div className="col-1" />
        <div className="col-3"><Card title={"Brand Stratrgy"} value={pic2} text={'We research on advance AI that could  make easly to handle the buisness  more easly and fexilbly and take the business to next level ...'} /></div>
        <div className="col-1" />

        <div className="col-3"><Card value={pic3} title={"Web design"} text={"We build various kind of website and design graphice like branding , logo designing for e-commerce, realstate, tour travel .. "} /></div>

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
    );
};
export default Home;