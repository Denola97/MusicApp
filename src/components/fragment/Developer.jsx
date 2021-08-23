import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the candiate</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Denola Naidoo</h3>
                        <p> Developer </p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A dynamic, hands-on, detail orientated, and highly analytical IT profressional.</p>
                    <p> Solid reputation for diligence regarding project accuracy and enhanced user-end functionalities.</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                   
                    <div className="Card-btn">
                      
                        <IconButton target={"_blank"} href={"https://za.linkedin.com/in/denola-naidoo-78599a12b"}  title={"vishalsingh-"}>
                            <LinkedIn/>
                        </IconButton>
                      
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;