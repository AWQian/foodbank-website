import React from "react";
import styled from "styled-components";
import fruitNoBackground from "../assets/fruitnobackground.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from "@material-ui/core/IconButton"

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

export class SectionThree extends React.Component {
    render() {
        return(
            <SectionThreeStyle>
                <div className="section-three-header"><span>Facebook Page</span></div>
                <div className="section-three-error-header">
                    <span>Don't see anything? Try refreshing the page or click the link below:</span>
                    <div><IconButton href="https://www.facebook.com/amsfoodbank" rel="noopener" target="_blank"><FacebookIcon className="facebook-button" /></IconButton></div>
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
