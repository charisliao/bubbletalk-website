import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Pricing Plans</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
                        
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Freemium Plan</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Our Freemium Plan offers limited real-time manga translation and includes ads. It’s a great way to get started and experience our services without any initial cost. With the Freemium Plan, you can enjoy:
                                    <ul className="list-disc list-inside mt-2">
                                        <li>Limited translation per month</li>
                                        <li>Access to our unique word bank</li>
                                        <li>Hands-free audio narration with limited features</li>
                                        <li>Basic data analytics and insights</li>
                                        <li>Support with community forums</li>
                                    </ul>
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/sign-up" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Sign Up for Free
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Premium Plan</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Upgrade to our Premium Plan for the ultimate manga reading experience with unlimited translation and no ads. Enjoy seamless access to all our features, including:
                                    <ul className="list-disc list-inside mt-2">
                                        <li>Unlimited real-time manga translation</li>
                                        <li>Full access to our extensive word bank</li>
                                        <li>Enhanced hands-free audio narration</li>
                                        <li>Advanced data analytics and insights</li>
                                        <li>Priority customer support</li>
                                        <li>Early access to new features</li>
                                    </ul>
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/subscribe" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Subscribe Now
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;
