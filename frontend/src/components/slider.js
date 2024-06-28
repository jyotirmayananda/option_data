import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import carouserhome from '../img/cal.jpg'; // Make sure the path to your image is correct

const SingleSlide = () => {
    const slideStyle = {
        backgroundImage: `url(${carouserhome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh', // Adjust height as needed
    };

    return (
        <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="position-relative" style={slideStyle}>
                <div className="carousel-inner">
                    <div className="container mt-4 pt-5">
                        <div className="row justify-content-start align-items-end">
                            <div className="col-10 col-lg-8 text-white">
                                <h5 className="display-5 animated slideInDown">TO MEET CUSTOMERS NEEDS IS OUR RESPONSIBILITY</h5>
                                <p className="fs-5 fw-medium mb-4 pb-3">The company specializes in the Powder coating & anodizing of aluminium.</p>
                                <a href="/" className="btn btn-secondary py-3 px-5 animated slideInLeft">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSlide;
