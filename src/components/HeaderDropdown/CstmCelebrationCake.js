import React from "react"
import { Link } from "react-router-dom"

export default function CstmCelebrationCake() {
    return (
        <div className="dropdown">
            <p className="dropdownBtn">CUSTOM CELEBRATION CAKES</p>
            <div className="dropdown-content">
                <Link to="/celebration-cake-order-form">Celebration Cake Order Form</Link>
                <Link to="/flavors-and-fillings">Flavors & Fillings</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/pricing/wedding-cake-prices">Pricing</Link>
            </div>
        </div>
    )
}
