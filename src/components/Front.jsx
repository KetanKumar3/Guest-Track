import React, { useEffect, useState } from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/scanner.png'
import { IoCameraOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

function Front() {

    const [currentDate, setCurrentDate] = useState("");
    const [currentDay, setCurrentDay] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const date = new Date();

            
            const time = date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });

            const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

            const day = date.getDate();
            const month = date.toLocaleDateString("en-US", { month: "long" });

            const formattedDate = `${time}`;
            const weekdays =  `${weekday}, ${day} ${month}`
            setCurrentDate(formattedDate);
            setCurrentDay(weekdays)
        };

        updateDateTime();    
        const interval = setInterval(updateDateTime, 60000);

        return () => clearInterval(interval); 
    }, []);



    return (


        <>
            <div>
            <div className='flex justify-between'>
                <div className='m-12'>
                    <img className='w-14' src={image1} />
                
                <h1 className='mt-12 text-6xl text-white mx-2 mb-3'>Welcome to</h1>
                <h3 className='text-4xl text-white mx-2'>Minou Nails</h3>
                <h1 className='mx-2 mt-32 text-6xl text-white'>{currentDate}</h1>
                <h1 className='mx-2 mt-4 text-4xl text-white'>{currentDay}</h1>
                </div>

                <div className='mx-52 my-48'>
                    <img className='w-60 ' src={image2} />
                    <div className='flex p-3 bg-orange-400 mt-6'>
                    <a className='text-white text-xl m-1' href='/qrcode'><IoCameraOutline/></a>
                    <a className='text-white text-xl' href='/qrcode'>I've got a Guest Badge</a>
                    </div>
                </div>
            </div>

            
            <div className='flex gap-72' style={{marginLeft:"800px"}}>
            <div className='flex gap-3'>
            <a className='text-white text-3xl' href='/checkin'><CiLogin/></a>
            <a className='text-2xl text-white' href='/checkin'>Check In</a>
            </div>

            <div className='flex gap-3'>
            <a className='text-white text-3xl' href='/checkout'><CiLogin/></a>
            <a className='text-2xl text-white' href='/checkout'>Check Out</a>
            </div>
            </div>
            </div>
        </>
    )
}

export default Front