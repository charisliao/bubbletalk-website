import React from 'react';
import charisPic from '../images/charis-pic.jpeg';
import apratimPic from '../images/apratim-pic.jpeg';
import joshuaPic from '../images/IMG_2145.JPG'; // Assuming this is Joshua's picture

const teamMemberStyle = {
    height: '10rem',
    width: '10rem',
    objectFit: 'cover',
    borderRadius: '50%',
    mixBlendMode: 'colorBurn'
}

const Team = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Team</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Meet our team members.</h2>
                </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6">
                            <div className="flex justify-center mb-4">
                                <img src={charisPic} alt="Charis Liao" style={teamMemberStyle} className="bg-gray-300 w-32 h-32 rounded-full flex items-center justify-center" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl">Charis Liao</h4>
                                <p className="text-md font-medium leading-5">
                                    Recent Master's in Molecular Science and Software Engineering graduate from Cal.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6">
                            <div className="flex justify-center mb-4">
                                <img src={joshuaPic} alt="Joshua Blomgren" style={teamMemberStyle} className="bg-gray-300 w-32 h-32 rounded-full flex items-center justify-center" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl">Joshua Blomgren</h4>
                                <p className="text-md font-medium leading-5">
                                    Recent Master's in Molecular Science and Software Engineering graduate from Cal.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6">
                            <div className="flex justify-center mb-4">
                                <img src={apratimPic} alt="Apratim Banerjee" style={teamMemberStyle} className="bg-gray-300 w-32 h-32 rounded-full flex items-center justify-center" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl">Apratim Banerjee</h4>
                                <p className="text-md font-medium leading-5">
                                    Recent Master's in Electrical Engineering and Computer Science from Cal.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team;
