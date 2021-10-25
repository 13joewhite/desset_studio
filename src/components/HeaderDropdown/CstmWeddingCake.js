import React from "react"
import { Link } from "react-router-dom"


export default function CstmWeddingCake() {
    return (
        <div className="dropdown">
            <p className="dropdownBtn">CUSTOM WEDDING CAKES</p>
            <div className="dropdown-content">
                <Link to="/consultation-request">Consultation Request</Link>
                <Link to="/flavors-and-fillings">Flavors & Fillings</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/pricing/wedding-cake-prices">Pricing</Link>
            </div>
        </div>
    )
} 