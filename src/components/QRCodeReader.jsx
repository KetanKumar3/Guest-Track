import React, { useState } from 'react';

function QRCodeReader() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected file:', selectedFile);
    };

    return (
        <>
            <div className=" w-full flex justify-between px-10 py-5 text-2xl text-white" style={{ backgroundColor: "#feae11" }}>
                <h1>Scan Guest Badges</h1>
                <a href="/">X</a>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='text-center space-y-3 mt-20'>
                        <label htmlFor="qrCodeFile" className='text-2xl' >Select QR Code Photo:</label>
                        <br />
                        <input
                            type="file"
                            id="qrCodeFile"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <br />
                        <textarea className='w-72'></textarea>
                        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                    </div>

                    <div className='text-center'>
                        <button className='mt-3 px-16 py-3 bg-slate-500' type="submit">Looking for QR Code...</button>
                        <p className='mt-3'> Copyright © 2024 GuestTrack<br />
                            Need Help? Please click here to contact us</p>
                    </div>

                </form>
            </div>
        </>
    );
}

export default QRCodeReader;