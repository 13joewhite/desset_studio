import React from "react"
import { Link } from "react-router-dom"

export default function CstmWeddingCake() {
    return (
        <div className="dropdown">
            <p className="dropdownBtn">MORE</p>
            <div className="dropdown-content-wider">
                <Link to="/about-us">About Us</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/classes">Classes</Link>
            </div>
        </div>
    )
}