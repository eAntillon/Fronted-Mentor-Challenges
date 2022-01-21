import React, { useState } from 'react';
import profilePicture from '../assets/images/image-jeremy.png';
import Card from '../components/Card';
import data from '../data.json';

const Dashboard = () => {
    const [frequency, setfrequency] = useState('daily');
    const handleSubmit = ({ target }) => {
        setfrequency(target.innerText.trim().toLowerCase());
    };
    const cards = data.map((i, k) => {
        return (
            <Card
                title={i.title}
                timeframe={i.timeframes[frequency]}
                freq={frequency}
                key={k}
            />
        );
    });
    return (
        <div className=" bg-darkBlue1 h-screen w-screen overflow-y-scroll overflow-x-hidden flex flex-col sm:justify-center items-center">
            <div className="w-screen font-rubik flex justify-center">
                {/* Conainer */}
                <div className="flex flex-col sm:flex-row w-5/6 sm:w-70 mt-16 sm:mt-0">
                    {/* Side */}
                    <div className="flex flex-col sm:w-54 mb-6 sm:mr-7 sm:mb-0">
                        <div className="h-full">
                            {/* Info */}
                            <div className="bg-darkBlue2 rounded-t-2xl">
                                <div className="flex flex-row sm:flex-col bg-primaryBlue rounded-2xl py-7 sm:pb-3 px-7 z-10 justify-center w-full ">
                                    <img
                                        src={profilePicture}
                                        alt="profile-picture"
                                        srcset=""
                                        className="w-14 sm:w-1/3 mr-5 sm:mr-auto border-white border-2 rounded-full "
                                    />
                                    <div className="flex flex-col justify-center sm:mt-8 sm:mb-14">
                                        <p className="text-paleBlue text-sm sm:text-md font-light">
                                            Report for
                                        </p>
                                        <p className="text-white text-2xl sm:text-4xl font-light">
                                            Jeremy Robson
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="bg-darkBlue2 text-paleBlue text-md sm:font-light rounded-b-2xl  py-6 sm:px-7 flex flex-row sm:flex-col justify-around">
                                <a
                                    className={
                                        (frequency == 'daily'
                                            ? 'text-white '
                                            : '') +
                                        'sm:mb-5 hover:text-white hover:cursor-pointer'
                                    }
                                    onClick={handleSubmit}
                                >
                                    Daily
                                </a>
                                <a
                                    className={
                                        (frequency == 'weekly'
                                            ? 'text-white '
                                            : '') +
                                        'sm:mb-5 hover:text-white hover:cursor-pointer'
                                    }
                                    onClick={handleSubmit}
                                >
                                    Weekly
                                </a>
                                <a
                                    className={
                                        frequency == 'monthly'
                                            ? 'text-white '
                                            : 'hover:text-white hover:cursor-pointer'
                                    }
                                    onClick={handleSubmit}
                                >
                                    Monthly
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex-col sm:grid sm:grid-cols-3 gap-8">
                        {cards}
                    </div>
                </div>
            </div>
            <div class="text-white align-bottom mt-12">
                Challenge by{' '}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="https://github.com/eAntillon" className='text-paleBlue hover:text-desaturatedBLue'>eantillon</a>.
            </div>
        </div>
    );
};

export default Dashboard;
