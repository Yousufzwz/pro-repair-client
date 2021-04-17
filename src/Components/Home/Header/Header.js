import React from 'react';
import TopBar from '../../Shared/TopBar/TopBar';
import bg from '../../../images/logos/mobile-device-repair-abstract-concept-illustration_335657-1896.jpg';
import './Header.css'

const Header = () => {
    return (
        <header>
            <TopBar></TopBar>

            <div className='container'>
                <div className="row d-flex align-items-center mt-5">
                    <div className="col-md-4 col-sm-12">
                        <div>
                            <h1>Best advanced repair provided by us</h1>
                            <p id='header_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <button style={{width:'180px' , height:'40px' , fontSize:'16px' , background:'#365559' ,color:'#FFFFFF'}}  className='btn mt-3'> View Our All Services </button>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-2">
                        <div>
                            <img className='img-fluid body_img' src={bg} alt="bg"/>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;