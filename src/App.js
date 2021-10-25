import './App.css';
import { Switch, Route } from "react-router-dom"
import React from "react"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ConsoltationReq from './components/HeaderDropdown/DropdownItems/ConsoltationReq';
import FlavAndFilling from "./components/HeaderDropdown/DropdownItems/FlavAndFillings"
import Gallery from "./components/HeaderDropdown/DropdownItems/Gallery"
import PricingRoutes from "./components/HeaderDropdown/DropdownItems/PricingRoutes"
import CelebrationCakeOrderForm from './components/HeaderDropdown/DropdownItems/CelebrationCakeOrderForm';
import DessertCateringRequest from './components/HeaderDropdown/DropdownItems/DessertCateringRequest';
import Menu from './components/HeaderDropdown/DropdownItems/Menu';
import ContactPage from './components/HeaderDropdown/DropdownItems/ContactPage';
import AboutUs from './components/HeaderDropdown/DropdownItems/AboutUs';
import FAQ from './components/HeaderDropdown/DropdownItems/FAQ';
import Classes from './components/HeaderDropdown/DropdownItems/Classes';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/consultation-request">
          <ConsoltationReq />
        </Route>
        <Route path="/flavors-and-fillings">
          <FlavAndFilling />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/pricing">
          <PricingRoutes />
        </Route>
        <Route path="/celebration-cake-order-form">
          <CelebrationCakeOrderForm />
        </Route>
        <Route path="/dessert-catering-request">
          <DessertCateringRequest />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path='/faq'>
          <FAQ />
        </Route>
        <Route path="/classes">
          <Classes />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
