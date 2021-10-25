import React from "react"
import { Link } from "react-router-dom"
import "../DropdownItems/Pricing.css"

export default function Pricing() {
    return (
        <div className="pricingLinks">
            <Link to="/pricing/wedding-cake-prices" className="linkTitle">Wedding Cakes</Link>
            <Link to="/pricing/delivery-prices" className="linkTitle">Delivery</Link>
        </div>
    )
}