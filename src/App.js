import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/Iconbutton"
import styled from "styled-components";
import { Navigation } from "./Navigation";

import foodBasket from "./assets/foodbasket.png";
import goodFoodBox from "./assets/goodfoodbox.png";
import fruitNoBackground from "./assets/fruitnobackground.png";
import queens from "./assets/queens.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

/* colours:
fcf9ed -> creamy white
FDBC3C -> orange
ff7657 -> salmon
665c84 -> blue-gray kinda purple
*/

const Style = styled.div`

`

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const anchor = (event.target.ownerDocument || document).querySelector("#get-in-touch-anchor");
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    render() {
        return(
            <Style>
                <Navigation click={this.handleClick}/>
                <Main />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <Footer />
            </Style>
        );
    }
}

const MainStyle = styled.div`
    .main-wrapper {
        height: 1000px;
        background-image: url(${queens});
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
    }

    .overlay {
        color: #FDBC3C;
        padding-top: 20%;
        font-size: 50px;
        display: flex;
        justify-content: center;
    }

    .background {
        box-sizing: border-box;
        padding-top: 5px;
        position: absolute;
        margin: auto;
        color: white;
        font-size: 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        max-width: 50%;
        z-index: 99;
    }

    .main-header {
        word-wrap: break-word;
    }
`

class Main extends React.Component {
    render() {
        return(
            <MainStyle>
                <div className="main-wrapper">
                    <div className="overlay">
                        <div className="background" >
                            <span className="main-header">Welcome to the AMS Food Bank!</span>
                        </div>
                    </div>
                </div>
            </MainStyle>
        );
    }
}

const SectionOneStyle = styled.div`
    {
        display: flex;
        flex-direction: row;

        @media only screen and (max-width: 600px) {
            flex-wrap: wrap;
        }
    } 

    .about-us-fruit {
        padding-top: 300px;
    }

    .right, .left {
        height: 900px;
        padding-top: 20%;
        padding-bottom: 20%;
    }

    .right {
        box-sizing: border-box;
        background-color: #FDBC3C;
        flex-grow: 2;
        text-align: center;
        max-width: 70%;
        padding-left: 10%;
        padding-right: 10%;

        @media only screen and (max-width: 600px) {
            max-width: 100%;
            height: auto;
        }
    }

    .about-us-description {
        color: #fcf9ed;
        font-size: 30px;
    }

    .left {
        box-sizing: border-box;
        flex-grow: 1;
        background-color: #fcf9ed;
        text-align: center;

        @media only screen and (max-width: 600px) {
            height: 100px !important;
            padding: 0;
        }
    } 

    .about-us-header {
        font-size: 40px;
    }

    .about-us-header-underline {
        max-width: 60px;
        height: 10px;
        border: 0px;
        background-color: #FDBC3C;
    }

`

class SectionOne extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <SectionOneStyle>
                <div className="left">
                    <span className="about-us-header">About Us</span>
                    <hr className="about-us-header-underline"/>
                </div>
                <div className="right">
                    <span className="about-us-description">
                    Located in room 343 of the JDUC, the AMS Food Bank serves confidential and 
                    non-judgmental food service to members of the Queen’s community.
                    We aim to provide our patrons with food services in the most comfortable environment possible.
                    </span>
                </div>
            </SectionOneStyle>
        );
    }
}

const SectionTwoStyle = styled.div`
    .section-two-header {
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: #ff7657;
        color: white;
        font-size: 30px;
        text-align: center;
    }

    .section-two-main-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 50px;

        @media only screen and (max-width: 1000px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    .section-two-image {
        width: 200px;
    }

    .section-two-image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        max-width: 100px;
    }

    .section-two-content {
        margin-top: 30px;
        text-align: center;
        font-size: 25px;
        box-sizing: border-box;
        padding-left: 5%;
        padding-right: 5%;
        white-space: normal;
        max-width: 60%;
    }

    .section-two-button {
        color: #665c84;
        min-width: 125px;
        margin-left: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        border: 2px solid #665c84;
        text-transform: capitalize;
    }

    .iframe-wrapper {
        overflow: hidden;
    }
`

class SectionTwo extends React.Component {
    render() {
        return(
            <SectionTwoStyle>
                <div className="section-two-header"><span>How to Access Our Services</span></div>
                <div className="section-two-main-wrapper">
                    <div className="section-two-image-wrapper"><img src={foodBasket} alt="Basket of Food" className="section-two-image"/></div>
                    <div className="section-two-content">
                        <p>
                            During the COVID-19 pandemic, we have switched to an online ordering system. Please monitor our Facebook or Instagram
                            page for details and changes to pickup timing and location. 
                            <br />
                            <br />
                            We are currently taking food requests and Good Food Box orders.
                        </p>
                        <Button className="section-two-button">Order Food</Button>
                        <Button className="section-two-button">Good Food Box</Button>
                        <div className="iframe-wrapper">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1699.9520364749849!2d-76.49571616241857!3d44.22833476369949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ab040df43553%3A0x13e4219bdbf13b60!2sJohn%20Deutsch%20University%20Centre!5e0!3m2!1sen!2sca!4v1606718489699!5m2!1sen!2sca" 
                                width="500px" 
                                height="500px" 
                                frameBorder="0" 
                                allowFullScreen="" 
                                aria-hidden="false" 
                                tabIndex="0"
                                title="Direction to John Deutch University Center">
                            </iframe>
                        </div>
                        
                    </div>
                    <div className="section-two-image-wrapper"><img src={goodFoodBox} alt="Good Food Box" className="section-two-image"/></div>
                </div>
            </SectionTwoStyle>
        );
    }
}

const SectionThreeStyle = styled.div`
    {
        margin-bottom: 50px;
    }
    .section-three-header {
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: #665c84;
        color: white;
        font-size: 30px;
        text-align: center;
    }

    .section-three-error-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 15px;
    }

    .section-three-error-header span {
        font-size: 20px;
    }

    .facebook-button {
        font-size: 50px;
        color: #4267B2;
    }
 
    .fruit-background {
        background-image: url(${fruitNoBackground});
        height: 150px;
        background-size: cover;
        position: absolute;
        width: 100%
        bottom: 0;
    }

    .fb-wrapper {
        position: relative;
        margin-top: 15px;
        background-image: url(${fruitNoBackground});
        background-repeat: repeat-x;
        min-height: 200px;
        background-position: 0px, 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
    }

    .fb-page {
        width: 350px;
    }
`

class SectionThree extends React.Component {
    render() {
        return(
            <SectionThreeStyle>
                <div className="section-three-header"><span>Facebook Page</span></div>
                <div className="section-three-error-header">
                    <span>Don't see anything? Try refreshing the page or click the link below:</span>
                    <div><IconButton><FacebookIcon className="facebook-button" /></IconButton></div>
                </div>
                <div className="fb-wrapper">
                    <div 
                        className="fb-page"
                        data-href="https://www.facebook.com/amsfoodbank/" 
                        data-tabs="timeline" data-width="400" data-height="600" 
                        data-small-header="false" 
                        data-adapt-container-width="true" 
                        data-hide-cover="false" 
                        data-show-facepile="true">
                        {/* <blockquote cite="https://www.facebook.com/amsfoodbank/" class="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/amsfoodbank/">AMS Food Bank</a></blockquote> */}
                    </div>
                </div>

                <div className="fruit-background"></div>
            </SectionThreeStyle>
        );
    }
}

const FooterStyle = styled.div`
    .footer-wrapper {
        height: 500px;
        margin-top: 30px;
        background-color: #FDBC3C;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .footer-header {
        font-size: 50px;
        color: white;
    }

    .social-media-wrapper {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .social-media-icon {
        font-size: 70px;
        color: white;
    }

    .footer-underline {
        margin-top: 20px;
        border: 0;
        height: 4px;
        width: 50%;
        background-color: white;
    }

    .contact-info {
        font-size: 25px;
        color: white;
        margin-top: 20px;
        word-wrap: break-word;
    }
`

class Footer extends React.Component {
    render() {
        return(
            <FooterStyle>
                <div className="footer-wrapper" id="get-in-touch-anchor">
                    <span className="footer-header">Contact Us</span>
                    <div className="social-media-wrapper">
                        <IconButton><FacebookIcon className="social-media-icon" /></IconButton>
                        <IconButton><InstagramIcon className="social-media-icon" /></IconButton>
                    </div>
                    <hr className="footer-underline"/>
                    <span className="contact-info">foodbank@ams.queensu.ca</span>
                    <span className="contact-info">(613) 533-6000 ext. 32737</span>
                </div>
            </FooterStyle>
        );
    }
}
