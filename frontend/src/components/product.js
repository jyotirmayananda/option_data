import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import logoalu from "../img/icons7.png";



const Facts = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container pt-5">
                <div className="row g-4">



                <div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                            <div className="fact-icon">
                                <img src={logoalu} alt="Icon" />
                            </div>
                            <h4 className="mb-3">Stock Market</h4>
                            <p className="mb-0">Live Option chain data, Derivative Feture data</p>
                            <a className="btn btn-outline-secondary" href="optiondata" role="button">CLICK HERE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;
