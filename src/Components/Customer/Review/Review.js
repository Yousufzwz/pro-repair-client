import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/repair_450x141.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser] = useContext(UserContext);
    const logoStyle = {
        width : '150px',
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        data.email = `${loggedInUser.email}` ;
        fetch('https://blooming-reef-97776.herokuapp.com/addReview', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                alert('Your Review Added Successfully!')
            }
        })
    }
     
    return (
        <div style={{background: '#FFFFFF'}}>
        <div className='container'>
            <div style={{padding: '20px 0'}} className="Topbar d-flex">
                <div style={{width: '20%'}} className="top">
                <Link to='/home'><img style={logoStyle} src={logo} alt=""/></Link>  
                </div>
                <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                    <h5 style={{marginTop: '15px'}}>Review Area</h5>
                    <h5 style={{marginTop: '15px'}}>
                        {loggedInUser.email ? loggedInUser.name : 'User Name'}
                    </h5>
                </div>
            
            </div> 
        </div>
        
        <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                
                <div className="col-md-9">
                    <div className="orderSubmit">
                    <form onSubmit={handleSubmit(onSubmit)} >
                            <input name="name" style={{width:'570px', padding:'20px 10px'}} placeholder='Your name ' className='form-control form_input' ref={register({ required: true })} /> <br/> 
                            <input name="company" style={{width:'570px', padding:'20px 10px'}} placeholder='Company’s name, Designation' className='form-control form_input' ref={register({ required: true })} /> <br/>
                            <textarea name="description" style={{width:'570px', padding:'20px 10px'}} placeholder='Description' className='form-control form_input' ref={register({ required: true })} /> <br/>
                            <input type="submit" value='SUBMIT' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#42375c' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} />
                            </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Review;