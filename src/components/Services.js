import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to enhancing manga reading experiences.</h2>
                </div>

                <div className="px-6 lg:px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-4 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Real-Time Manga Translation" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Real-Time Manga Translation</h2>
                                <p className="text-md font-medium">
                                    Provide a service where manga content is translated into different languages in real-time, allowing readers to enjoy their favorite manga series without language barriers.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-4 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Unique Word Bank" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Unique Word Bank</h2>
                                <p className="text-md font-medium">
                                    Develop and maintain a specialized vocabulary database tailored for manga readers, helping users understand specific terms and expressions commonly found in manga.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-4 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Hands-Free Audio Narration" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl text-center ">Hands-Free Audio Narration</h2>
                                <p className="text-md font-medium">
                                    Offer an audio narration feature that reads manga content aloud, providing an accessible and immersive reading experience for users who prefer or need audio format.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-4 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Data Analytics and Insights" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                <h2 className="font-semibold my-4 text-2xl text-center ">Data Analytics and Insights</h2>
                                <p className="text-md font-medium">
                                    Offer analytics services to track user behavior within manga apps, providing insights that can be used to improve content recommendations, optimize user interfaces, and enhance overall user satisfaction.
                                </p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
