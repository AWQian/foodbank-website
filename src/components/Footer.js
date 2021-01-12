import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

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

export class Footer extends React.Component {
    render() {
        return(
            <FooterStyle>
                <div className="footer-wrapper" id="get-in-touch-anchor">
                    <span className="footer-header">Contact Us</span>
                    <div className="social-media-wrapper">
                        <IconButton href="https://www.facebook.com/amsfoodbank" rel="noopener" target="_blank"><FacebookIcon className="social-media-icon" /></IconButton>
                        <IconButton href="https://www.instagram.com/amsfoodbank/" rel="noopener" target="_blank"><InstagramIcon className="social-media-icon" /></IconButton>
                    </div>
                    <hr className="footer-underline"/>
                    <span className="contact-info">foodbank@ams.queensu.ca</span>
                    <span className="contact-info">(613) 533-6000 ext. 32737</span>
                </div>
            </FooterStyle>
        );
    }
}
