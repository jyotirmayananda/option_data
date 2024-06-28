import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

const Topbar = () => {
    return (
        <div className="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start text-light">
                    <div className="h-100  d-inline-flex align-items-center py-3 me-3">
                        <p className=" px-2" href="tel:+918079839919">+91 8079839919</p>
                        <p className=" px-2" href="mailto:info@metafia.in">info@metafia.in</p>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end text-light">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-2">
                        <p className=" px-2" href="/terms">Terms</p>
                        <p className=" px-2" href="/privacy">Privacy</p>
                    </div>
                    <div className="h-100 d-inline-flex text-light align-items-center">
                        <a className="btn btn-sm-square btn-outline-body me-1" href="https://wa.me/+918079839919">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
