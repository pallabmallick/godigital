import React, { useState } from 'react';
// import data from './data'
import data from "../data"

const Service = () => {
    const [noOfElement, setnoOfElement] = useState(4);
    const loadmore = () => {
        setnoOfElement(noOfElement + noOfElement);
    }

    const slice = data.slice(0, noOfElement);
    return (
        <div className="section-bg">
        <section id="Service" className="py-4 container">
            {/* <h1 className="my-4 display-5 text-center">Our Services</h1> */}
            <div className="section-title">
                {/* <h2>Clients</h2> */}
                <p>Our Service</p>
            </div>
            <div className="row justify-content-center">
                {slice.map((item, index) => {
                    return (
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.img} className="card-img-top" alt="img" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.desc}</p>

                                </div>

                            </div>

                        </div>

                    )
                })}


            </div>

            <button className="btn-get-service"
                onClick={() => loadmore()}
            >
                Lodemore
            </button>


        </section>
        </div>
    );
};

export default Service
