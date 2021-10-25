import React from "react"
import "./Delivery.css"

export default function Delivery() {
    return (
        <div className="pricingPageLayout2">
            <div className="topLayout2">
                <h1>Delivery</h1>
                <p>Delivery fees for areas not listed below are based on mileage and time</p>
            </div>
            <div className="bottomLayout2">
                <h3 className="pricingInfo2">Utah County</h3>
                <p className="pricingInfo2">$30 - $50</p>
                <h3 className="pricingInfo2">Davis / Wasatch County</h3>
                <p className="pricingInfo2">$90</p>
                <h3 className="pricingInfo2">Salt Lake County</h3>
                <p className="pricingInfo2">$50 - $80</p>
                <h3 className="pricingInfo2">Summit / Weber / Juab County</h3>
                <p className="pricingInfo2">$110</p>
            </div>
        </div>

    )
}