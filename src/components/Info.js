import React from "react";
import me from "../images/PictureofMe.png";
import EmailLogo from "../images/Email.png";
import LinkedinLogo from "../images/Linkedin.png";

export default function Info() {
    return (
        <div className="info">
            <img id = "me" src={me} alt="Picture of me" />
            <div id = "info-box">
                <h1 id = "name">Chris Gao</h1>
                <h4 id = "position">Front-end Developer</h4>
                <p id = "website">chrisgao.dev</p>
            </div>
            <div id = "socialbar">
                <button id = "emailbutton">
                    <img src={EmailLogo}/>
                    <p>Email</p>
                </button>
                <button id = "linkedinbutton">
                    <img src={LinkedinLogo}/>
                    <p>LinkedIn</p>
                </button>
            </div>
        </div>
    )
}