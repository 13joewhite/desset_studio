import React from "react"
import { Link } from "react-router-dom"

export default function DessertCatering() {
    return (
        <div className="dropdown">
            <p className="dropdownBtn">DESSERT CATERING</p>
            <div className="dropdown-content-wider">
                <Link to="/dessert-catering-request">Dessert Catering Request</Link>
                <Link to="/menu">Menu</Link>
            </div> 
        </div>
    )
}