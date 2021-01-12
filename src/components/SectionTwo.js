import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import foodBasket from "../assets/foodbasket.png";
import goodFoodBox from "../assets/goodfoodbox.png";

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

export class SectionTwo extends React.Component {
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