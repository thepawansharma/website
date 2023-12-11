import React from "react";

const Card = (pros) => {
    return (
        <>
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <img src={pros.imgsrc} className="card-img-top img-fluid" style={{height: '200px'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{pros.title}</h5>
                        <p className="card-text">Some quick example text to build on ..</p>
                        <a href="#" className="btn btn-primary">View More</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;