import React from "react";

const Contact = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-10 mx-auto'>
                        <div className="row">
                        <h2 className="headborder text-center mb-4 p-3">Get in touch with us</h2>
                            <div className="col-md-8">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your full name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
                                </div>
                                <div className="float-end">
                                    <button className="btn btn-outline-primary">Submit</button>
                                </div>
                            </div>

                            <div className="col-md-4 mt-3">
                                <h3 className="contact">Contact Us</h3>
                                <ul class="contact-info">
                                    <li><label>Registered Office :</label> G-1, 2nd Floor, Mohan Baba Nagar, Gali No.-1, Tajpur Pahar, Badarpur, New Delhi-110044 </li>
                                    <li><label>Phone :</label> 011-24371699 / 24371700 <br /> 0120-2554922/0120-2554933</li>
                                    <li><label>Email : </label> info@uvt.co.in</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;