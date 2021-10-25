import './ConsoltationReq.css';
import React, { useState } from 'react';
import { send } from 'emailjs-com';


function App() {
    const [toSend, setToSend] = useState({
        firstName: '',
        lastName: '',
        yourEmail: '',
        firstThree: '',
        secondThree: '',
        lastFour: '',
        weddingDateMonth: "",
        weddingDateDay: "",
        weddingDateYear: "",
        to_name: 'Dessert Studio',
        deliveryLocation: ''
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(toSend)
        send(
            'service_rldwr6r',
            'dessert_studio_template',
            toSend,
            'user_J8PZcsRYYiGps4Kq8TcEz'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <div className="form">
            <div className="consInfo">
                <h2>Consultation Request Form</h2>
                <small><p>We love working with happy couples to make their wedding cake dreams a reality. The first step is to schedule a consultation with us. During the consultation you will get to sample four of our most popular flavor & filling combinations. We will also discuss design elements to make your cake vision become a reality. Please bring any inspiration pictures, color swatches, floral choices or anything else that will help us understand your vision. Not yet sure what you want? No problem! During the consultation we’ll work together to come up with a cake that you’ll love. </p></small>
                <small><p>The consultation fee is $30, $20 of which will go toward the cost of your cake (for cakes over $300 booked the day of the consultation). Use this form to request your consultation and we will be in touch (usually within 48 hours) about available consultation times. </p></small>
            </div>
            <form onSubmit={onSubmit} className="formItself">
                <h5>Name *</h5>
                <div className="name">
                    <input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        value={toSend.firstName}
                        onChange={handleChange}
                        required={true}
                    />
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        value={toSend.lastName}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <h5>Email *</h5>
                <div className="email">
                    <input
                        type='text'
                        name='yourEmail'
                        placeholder='Your Email'
                        value={toSend.yourEmail}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <h5>Phone Number *</h5>
                <div className="phone">
                    <input
                        type='text'
                        name='firstThree'
                        placeholder='###'
                        value={toSend.firstThree}
                        onChange={handleChange}
                        required={true}
                        maxlength="3"
                    />
                    <input
                        type='text'
                        name='secondThree'
                        placeholder='###'
                        value={toSend.secondThree}
                        onChange={handleChange}
                        required={true}
                        maxlength="3"
                    />
                    <input
                        className="lastFour"
                        type='text'
                        name='lastFour'
                        placeholder='####'
                        value={toSend.lastFour}
                        onChange={handleChange}
                        required={true}
                        maxlength="4"
                    />
                </div>
                <h5>Wedding Date *</h5>
                <div className="date">
                    <input
                        type='text'
                        name='weddingDateMonth'
                        placeholder='MM'
                        value={toSend.weddingDateMonth}
                        onChange={handleChange}
                        required={true}
                        maxlength="2"
                    />
                    <input
                        type='text'
                        name='weddingDateDay'
                        placeholder='DD'
                        value={toSend.weddingDateDay}
                        onChange={handleChange}
                        required={true}
                        maxlength="2"
                    />
                    <input
                        type='text'
                        name='weddingDateYear'
                        placeholder='YYYY'
                        value={toSend.weddingDateYear}
                        onChange={handleChange}
                        required={true}
                        maxlength="4"
                    />
                </div>
                <h5>Delivery Location</h5>
                <div className="location">
                    <input
                        type='text'
                        name='deliveryLocation'
                        placeholder='Delivery Location'
                        value={toSend.deliveryLocation}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Send</button>
            </form>
        </div>


    )
}

export default App