import React from "react";
import styled from "styled-components";

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

export class SectionOne extends React.Component {
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
                    <br /><br />
                    We aim to provide our patrons with food services in the most comfortable environment possible.
                    </span>
                </div>
            </SectionOneStyle>
        );
    }
}