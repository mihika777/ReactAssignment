import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            {/* By default imports for images starts from /public */}
            <Link to="/"><img className="logo" src={"/./logo/Logo.png"}/> </Link>
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