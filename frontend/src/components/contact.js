import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

const Contact = () => {
    return (
        <div className="container-xxl py-5" id="Contact">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h4 className="section-title">Contact Us</h4>
                    <h4 className="display-6 mb-4">If You Have Any Query, Please Feel Free Contact Us</h4>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="d-flex flex-column justify-content-between h-100">
                            <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                                    <i className="fa fa-map-marker-alt text-secondary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Address</p>
                                    <h5 className="mb-0">Berhampur, Odisha, India</h5>
                                </div>
                            </div>
                            <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                                    <i className="fa fa-phone-alt text-secondary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Call Us Now</p>
                                    <h5 className="mb-0">+91 8079839919 </h5>
                                </div>
                            </div>
                            <div className="bg-light d-flex align-items-center w-100 p-4">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                                    <i className="fa fa-envelope-open text-secondary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Mail Us Now</p>
                                    <h5 className="mb-0">info@metafia.in</h5>
                                    <h5 className="mb-0">metafia.mkt@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '100px' }}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
