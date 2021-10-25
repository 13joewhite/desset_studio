import React from "react"
import "./WeddingCakes.css"

export default function WeddingCakes() {
    return (
        <div className="pricingPageLayout">
            <div className="topLayout">
                <h1>Base Pricing</h1>
                <p>Base prices are for naked cakes or clean, white frost</p>
            </div>
            <div className="bottomLayout">
                <h3 className="pricingInfo">Two Tier</h3>
                <p className="pricingInfo">$290</p>
                <h3 className="pricingInfo">Three Tier</h3>
                <p className="pricingInfo">$460</p>
                <h3 className="pricingInfo">Four Tier</h3>
                <p className="pricingInfo">$670</p>
                <h3 className="pricingInfo">Five Tier</h3>
                <p className="pricingInfo">$900</p>
            </div>
            <div className="topLayout">
                <h1>Standard Additions</h1>
                <p>Intricate detail costs determined at consultation</p>
            </div>
            <div className="bottomLayout">
                <h3 className="pricingInfo">Square or Hexagon Cakes</h3>
                <p className="pricingInfo">+ $20 per tier</p>
                <h3 className="pricingInfo">Realistic Buttercream Flowers</h3>
                <p className="pricingInfo">+ $20 - $50 per tier</p>
                <h3 className="pricingInfo">Cake Painting</h3>
                <p className="pricingInfo">+ $20 - $50 per tier</p>
                <h3 className="pricingInfo">Textured Icing Finish</h3>
                <p className="pricingInfo">+ $10 per tier</p>
            </div>
            <div className="veryBottom">
                <h3 className="pricingInfo">Gold Leaf Details</h3>
                <p className="pricingInfo">+ $5 - $10 per tier</p>
            </div>
        </div>

    )
}