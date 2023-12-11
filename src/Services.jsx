import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import "../src/services/customize-app.jpg";

const Services = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row my-5'>
                    <div className='col-10 mx-auto'>
                        {/* <h1 className="my-4 text-center">Our Services</h1> */}
                        <div className="row gy-4">
                            {
                                Sdata.map((val, ind) => {
                                    return <Card 
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        </>
    )
};

export default Services;