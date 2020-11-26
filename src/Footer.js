import React from 'react'
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';
function Footer() {
    return (
        <div className="footer">
            <div className="footer__icons">
            <h2>Connect With US </h2>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
            <InstagramIcon/>


            </div>

            <div className="footer__rights">
               <CopyrightIcon/>
            <h2>All rights reserved to digital luex</h2>  

                

            </div>
           
            


            
        </div>
    )
}

export default Footer
