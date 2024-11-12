import React, { useState } from 'react';

function Checkout() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Phone Number:', phoneNumber);
    };

    return (
        <div className="container">

            <div className=" w-full flex justify-between px-10 py-5 text-2xl text-white" style={{ backgroundColor: "#feae11" }}>
                <h1>Good Bye</h1>
                <a href="/">X</a>
            </div>
            <div className='mt-44'>
            <h1 className='text-center text-3xl'>Are You Leaving?</h1>
            <div className='text-center'>
            <form onSubmit={handleSubmit}>
                <div className="form-group space-y-4">
                    <label htmlFor="phoneNumber">Contact Number*</label>
                    <br/>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleChange}
                        required
                        className='w-60'
                    />
                </div>
                <button type="submit" className='mt-4 py-2 px-20 bg-yellow-400'>Check Out</button>
            </form>
            </div>
            </div>
        </div>
    );
}

export default Checkout;