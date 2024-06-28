import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Address</h3>
                        <p className="btn btn-link">Berhampur, Odisha, India</p>
                        <p className="btn btn-link">+91 8079839919</p>
                        <p className="btn btn-link">info@metafia.in</p>
                        <p className="btn btn-link">metafia.mkt@gmail.com</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Services</h3>
                        <a className="btn btn-link" href="/">Powder Coating</a>
                        <a className="btn btn-link" href="/">Anodized</a>
                        <a className="btn btn-link" href="/">Acid Treatment</a>
                        <a className="btn btn-link" href="/">Interior Design</a>
                        <a className="btn btn-link" href="/">24/7 Shipment</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Quick Links</h3>
                        <a className="btn btn-link" href="/">About Us</a>
                        <a className="btn btn-link" href="/">Contact Us</a>
                        <a className="btn btn-link" href="/">Agro</a>
                        <a className="btn btn-link" href="/">Terms & Conditions</a>
                        <a className="btn btn-link" href="/">Support</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        
                        <p></p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control text-light bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-light text-center text-md-start mb-3 mb-md-0">
                            &copy; metafia.in, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-light text-center text-md-end">
                            Designed By Jyotirmayananda
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
