import React, { useState, useEffect } from 'react';
// import data from "../data"
import { Redirect } from "react-router-dom";

const Service = () => {
    // const history = useHistory();
    const user = JSON.parse(localStorage.getItem('token'));
    console.log(user);
    const [allData, setAllData] = useState([]);
    const [petCount, setDataCount] = useState(4);
    const loadmore = () => {
        setDataCount(allData.length)
    };
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/productlist')
            .then((res) => res.json())
            .then((data) => {
                setAllData(data)
                console.log(data)
            });
    }, [])
    return (
        <div>
            {
                localStorage.getItem('token') ?
                    <>

                        {
                            alert("You Still Logedin Please Logout!")
                        }

                        <Redirect to="/admin/addservice" />
                    </>
                    :
                    <>
                        <div className="section-bg">
                            <section id="Service" className="py-4 container">
                                <div className="section-title">
                                    {/* <h2>Clients</h2> */}
                                    <p>Our Service</p>
                                </div>
                                <div className="row justify-content-center" >
                                    {allData.slice(0, petCount).map((pet, id) => (
                                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                                            <div className="card p-0 overflow-hidden h-100 shadow">
                                                <img src={"http://127.0.0.1:8000/" + pet.ServiceImg} className="card-img-top" alt="img" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{pet.ServiceName}</h5>
                                                    <p className="card-text">{pet.ServiceDesc}</p>

                                                </div>
                                            </div>
                                        </div>))}
                                </div>
                                <button className="btn-get-service"
                                    onClick={() => loadmore()}
                                >
                                    Lodemore
            </button>
                            </section>
                        </div>


                    </>
            }


        </div>

    );
};

export default Service
