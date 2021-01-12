import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import styled from "styled-components";

import amslogo from "../assets/amslogo.png";
import foodbanklogo from "../assets/foodbanklogo.png";

const Style = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

    .logo-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .food-bank-logo {
        height: 100px;
        margin-left: 20px;
    }

    .ams-logo {
        height: 60px;
    }

    .nav-bar {
        background-color: white;
    }

    .get-in-touch {
        color: #ff7657;
        margin-left: auto;
        font-size: 25px;
        text-transform: capitalize;
        font-family: 'Lato', sans-serif;
    }
`

export class Navigation extends React.Component {
    render() {
        return(
            <Style>
                <AppBar position="static" className="nav-bar">
                    <Toolbar>
                        <div className="logo-wrapper">
                            <img className="ams-logo" alt="AMS Logo" src={amslogo} />
                            <img className="food-bank-logo" alt="AMS Food Bank Logo" src={foodbanklogo} />
                        </div>
                        <Button className="get-in-touch" onClick={(event) => this.props.click(event) /* Let parent handle click */}>Get in Touch</Button>
                    </Toolbar>
                </AppBar>
            </Style>
        );
    }
}