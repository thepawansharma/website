import React from "react";

const Footer = () => {
    return (
        <>
            <div className='container-fluid footer' style={{background: '#f8f9fa', borderTop: '1px solid #dddddd'}}>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className="m-1">
                            <div className="col-md-6">
                                <p className="mb-0 py-2 float-start">Copyright © 2023. All Rights Reserved.</p>
                            </div>
                            <div className="col-md-6 float-end">
                                <p className="mb-0 py-2 float-end">Designed & Developed by <a href="https://thepawansharma.com/" target="_blank"> pawan@radhe. </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;