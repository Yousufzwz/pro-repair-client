import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{height:'100vh' , background:'#f1f1f1'}} className='d-flex justify-content-center align-items-center text-danger'>
            
            <Link to='/home'></Link>
            <h1>404! Error, Page Not Found!</h1>
            
        </div>
    );
};

export default NotFound;