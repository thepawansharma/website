import React from "react";
import image from "../src/Images/lion.png"

const Home = () => {
    return (
        <>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="row mt-5 m-margin">
                                <div className="col-md-6 mt-5 pt-5 mx-auto">
                                    <h1>Grow your business with <br /> <strong className="brandName">The Pawan Kumar Sharma</strong></h1>
                                    <h2>We are Best Professional Team</h2><br />
                                    <button className="btn btn-primary">&nbsp;Get Started&nbsp;</button>
                                </div>

                                <div className="col-md-6">
                                    <img src={image} className="img-fluid mx-auto animated" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;