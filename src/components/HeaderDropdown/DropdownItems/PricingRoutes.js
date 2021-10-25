import React from "react"
import { Switch, Route } from "react-router-dom"
import WeddingCakes from "./PricingPageInfo/WeddingCakes"
import Delivery from "./PricingPageInfo/Delivery"
import Nav from "../../Nav"
import Footer from "../../Footer"
import Pricing from "./Pricing"

export default function PricingRoutes() {
    return (
        <div >
            <Pricing />
            <Switch>
                <Route exact path="/pricing/wedding-cake-prices">
                    <WeddingCakes />
                </Route>
                <Route path="/pricing/delivery-prices">
                    <Delivery />
                </Route>
            </Switch>
        </div>
    )
}
