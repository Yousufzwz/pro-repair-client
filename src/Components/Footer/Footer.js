import React from 'react';

const Footer = () => {
    return (
        <footer style= {{background: '#233257' , color:'white', padding: '100px 0 30px 0'}}>
            <div className='container'>
                <div className="row">
                <div className="col-md-5">
                    <h2 className='mb-3'>Accelerate innovation with Pro Repair Services.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolor!</p>
                </div>
                <div className="col-md-6 offset-md-1">
                  
                    <form action="">
                    <h2>If Any Inquiry Inform Us</h2>
                    <br/>
                        <div className="form-group">
                            <input type="text" className="form-control py-4" placeholder="Your Email Address "/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control py-4" placeholder="Subject "/>
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="20" rows="10" placeholder="Your Message "></textarea>
                        </div>
                        <div className="form-group">
                            <button style={{width:'200px' , height:'40px' , fontSize:'16px' , background:'#365559' ,color:'#FFFFFF'}} type="button" className="btn"> Submit </button>
                        </div>
                    </form>
                </div>
                </div>


                <div style={{fontSize:'20px'}} className="mt-5 text-center">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved By Pro-Repair Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;