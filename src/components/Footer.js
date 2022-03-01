import React from "react";
import facebooklogo from "../images/Facebook.png";
import twitterlogo from "../images/Twitter.png";
import instagramlogo from "../images/Instagram.png";
import githublogo from "../images/GitHub.png";

export default function Footer() {
    return (
        <div id="socialfooter">
            <img src={twitterlogo}/>
            <img src={facebooklogo}/>
            <img src={instagramlogo}/>
            <img src={githublogo}/>
        </div>
    )
}