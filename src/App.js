import React from "react";
import styled from "styled-components";
import { Navigation } from "./components/Navigation";
import { SectionOne } from "./components/SectionOne";
import { SectionTwo } from "./components/SectionTwo";
import { SectionThree } from "./components/SectionThree";
import { Footer } from "./components/Footer";

import queens from "./assets/queens.png";

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

        @media only screen and (max-width: 450px) {
            font-size: 40px;
        }
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
