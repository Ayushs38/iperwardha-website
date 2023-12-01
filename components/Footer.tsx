import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-700">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-wrap justify-between ">
                    <div className="w-full md:w-1/3 text-white mt-4">
                        <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
                        <hr className="mb-2 border-white" />
                        <p className="text-lg">
                            Institute of Pharmaceutical Education And Research,
                            <br />
                            Borgaon (Meghe), Wardha.
                            <br />
                            Maharashtra State, India – 442 001
                            <br />
                            <i className="fa fa-phone"></i>: 07152 – 240284
                            <br />
                            <i className="fa fa-fax"></i>: 07152 – 241684
                            <br />
                            <i className="fa fa-envelope" style={{ fontWeight: 'bold' }}>
                                {' '}
                            </i>
                            : iper4160@gmail.com
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mt-4">
                        <div className="text-white">
                            <h3 className="text-2xl font-semibold mb-3">Important Link</h3>
                            <hr className="mb-2 border-white" />
                            <p>
                                <a
                                    href="http://vyws.org/"
                                    target="_blank"
                                    className="text-lg text-white hover:underline"
                                >
                                    Vidarbha Youth Welfare Society
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 mt-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Reach Us</h3>
                        <hr className="mb-2 border-white" />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3731.7657948489245!2d78.603893!3d20.719733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x373769eedb7aedbb!2sInstitute%20Of%20Pharmaceutical%20Education%20And%20Research!5e0!3m2!1sen!2sus!4v1611012940463!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            frameBorder="0"
                            style={{ border: '0' }}
                            //   allowFullScreen=""
                            aria-hidden="false"
                        //   tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="bottom-footer text-center mt-4 bg-black py-3">
                <div className="container">
                    <p className="text-white text-lg">
                        Copyright ©2023 Institute of Pharmaceutical Education and Research,
                        Borgaon(Meghe), Wardha. All rights reserved. | Design by{' '}
                        <a
                            href="https://primathink.com/"
                            target="_blank"
                            className="text-blue-500"
                            rel="noopener noreferrer"
                        >
                            PrimaThink
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
