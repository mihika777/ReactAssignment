import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerColumn">
                <span className="footerHeading">Contact</span>
                <span className="footerText">Request a test drive</span>
                <span className="footerText">Book Car</span>
                <span className="footerText">Career</span>
                <span className="footerText">Contact Us</span>
                
            </div>
            <div className="footerColumn">
                <span className="footerHeading">Xtremecars</span>
                <span className="footerText">12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai - 400705. Maharashtra, India.</span>
                <span className="footerText" style={{marginTop: "24px"}}>Phone: +91 (22) 612 800000</span>
            </div>
            <div className="footerColumn">
                <span className="footerHeading">Legal</span>
                <span className="footerText">Legal Disclaimer/Imprint</span>
                <span className="footerText">Privacy Policy</span>
                <span className="footerText">Cookie Policy</span>
            </div>
            <div className="footerColumn">
                <span className="footerHeading">Connect with us</span>
                <img className="socialMediaLogo footerText" src={"/./logo/fb.png"}/>
                <img className="socialMediaLogo footerText" src={"/./logo/twitter.png"}/>
                <img className="socialMediaLogo footerText" src={"/./logo/insta.png"}/>
            </div>
        </div>
    )
}