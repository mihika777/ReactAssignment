import React from "react";
import "./navbar.css";

export default function NavBar() {
    return (
        <div className="navbar">
            {/* By default imports for images starts from /public */}
            <img className="logo" src={"./logo/Logo.png"}/> 
            <div className="navMiddle">
                <span>New Cars</span>
                <span>Used Cars</span>
            </div>
            <div className="navRight">
                <span>My Profile</span>
            </div>
        </div>
    )
}