import React from 'react';
import icon1 from '../../../images/logos/hosoren.png';
import icon2 from '../../../images/logos/bearbrand.png';
import icon3 from '../../../images/logos/authentic.png';
import icon4 from '../../../images/logos/stores.png';

const Clients = () => {
    const icons ={
        padding : '60px 0'
    }
    const iconStyle = {
        width : '140px',
        height : '120px'
    }
    return (
        
        <div className='container' style={{backgroundColor:'#eaf0e9',color:'#5e6353', marginBottom:'20px'}}>
            <br/>
            <h1 className='text-center'>Our Satisfied Clients </h1>
            <div className='row' style={icons}>
                <div className="col-md-1 col-md-2 offset-md-1 text-center mt-4">
                    <img style={iconStyle} src={icon1} alt="icon"/>
                </div>
                <div className="col-md-1 col-md-2 offset-md-1 text-center mt-4">
                    <img style={iconStyle} src={icon2} alt="icon"/>
                </div>
                <div className="col-md-1 col-md-2 offset-md-1 text-center mt-4">
                    <img style={iconStyle} src={icon3} alt="icon"/>
                </div>
                <div className="col-md-1 col-md-2 offset-md-1 text-center mt-4">
                    <img style={iconStyle} src={icon4} alt="icon"/>
                </div>
               
            </div>
        </div>
    );
};

export default Clients;