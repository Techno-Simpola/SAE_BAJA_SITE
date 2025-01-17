import React from 'react'
import Slide from 'react-reveal/Slide'
import CountUp from 'react-countup';
import { FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi"
import { MdEventAvailable } from "react-icons/md"
import { FaSchool } from "react-icons/fa"
import { useState, useEffect, useRef } from 'react'
import VisibilitySensor from "react-visibility-sensor"
import { NavLink } from 'react-router-dom';
import {Parallax} from 'react-parallax';
import lambo from '../../../images/lambozz.png';
import bgimage from "../../../images/bgimage.jpg"
import '../saecss/achievements.css';

const Achievements = () => {
 
    return (
        <>
        <Parallax bgImage={bgimage} strength={1000} bgImageStyle={{height: '100%',width:"100%",opacity: '.5'}}>
        <div className="image-Overlay">
        <div  className='' style={{paddingBottom: '20px', borderRadius: "20px"}}>
            <Slide to bottom>
               
            <section class="page-section text-light p-4" id="about">
                <div class="container-fluid mt-0">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase p-4" style={{color:"wheat"}} >Our Achievements</h2>
                        
                    </div>
                    <ul class="timeline m-4">
                        <li>
                            <div class="timeline-image" style={{backgroundColor:"red"}}><img class="rounded-circle img-fluid" src="https://5.imimg.com/data5/JQ/PL/GLADMIN-48143395/inter-college-fests-event-service-500x500.png" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading text-light">

                                    <h4 style={{color:"wheat"}}>Our Fest</h4>

                                    <p class="subheading text-light">The vibrant college life is incomplete without a fest and constitutes a major part of the life of students. It etches a mark on the academic calendar and students look forward to the dates.</p>
                                </div>

                                <div class="timeline-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            
                                            <p className='text-center  fw-bolder  text-light'></p>
                                        </div>
                                        <div className="col-lg-4">
                                            
                                            <p className='text-center  fw-bolder text-light'></p>
                                        </div>
                                        <div className="col-lg-4">
                                            <img  style={{height:"100px",width:"100px"}} src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/605ebf9284b1b_aarohan-logo.png" alt="aarohan"></img>
                                            <p className='text-center  fw-bolder  text-light'>AArohan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image" style={{backgroundColor:"red"}}><img class="rounded-circle img-fluid" src="https://i.marketingprofs.com/assets/images/seminar/325/red-event_275x200.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading text-light">
                                    <h4 style={{color:"wheat"}}>Our Events</h4>
                                    <p class="subheading text-light">College events shape the social and intellectual fabric of our college's campus. College students, especially freshmen, want new and authentic ways to connect.We conduct various events all the year round to stand out and improve student engagement with our event ideas</p>
                                </div>
                               <NavLink  to="/events"> <button className='btn w-50 bold' style={{background:"red",color:"white"}}>More</button></NavLink>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image" style={{backgroundColor:"red"}}><img class="rounded-circle img-fluid" src="https://www.pngkit.com/png/full/197-1978460_pro-e-solutions-offers-you-social-media-consultancy.png" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading text-light">

                                    <h4 style={{color:"wheat"}}>Social Media</h4>
                                    <p class="subheading text-light">Our Social Media Platforms</p>
                                </div>
                                <div className="row text-center">
                                    <div className="col-lg-4">
                                   
                                    <FiFacebook size={50} color='red'/>
                                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div className='text-light text-right bold' style={{ height: 100 }}>
            {isVisible ? <CountUp  start={0} end={5000} duration={5} /> : null}+Likes
          </div>
        )}
      </VisibilitySensor>
                                    </div>
                                    <div className="col-lg-4">
                                    <FiInstagram size={50} color='red'/>
                                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div className='text-light text-right bold' style={{ height: 100 }}>
            {isVisible ? <CountUp  start={0} end={500} duration={5} /> : null}+Followers
          </div>
        )}
      </VisibilitySensor>
                                    </div>
                                    <div className="col-lg-4">
                                    <FiYoutube size={50} color='red'/>
                                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div className='text-light text-right bold' style={{ height: 100 }}>

            {isVisible ? <CountUp  start={0} end={3000} duration={5} /> : null}+Views

          </div>
        )}
      </VisibilitySensor>
                                    </div>
                                </div>
                                
                                

                            </div>
                        </li>
                        
                        <li class="timeline-inverted mb-5">
                            <div class="timeline-image mb-4" style={{backgroundColor:"black"}}>
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            </Slide>
        </div>
        </div>
         </Parallax>
         
   </> )
}

export default Achievements
