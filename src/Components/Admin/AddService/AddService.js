import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
 import logo from '../../../images/logos/repair_450x141.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const AddService = () => {
    const [loggedInUser] = useContext(UserContext);
    const logoStyle = {
        width : '150px',
    }
    const servicesStyle = {
        width : '900px',
        height : '300px',
        background : '#ffffff',
        borderRadius : '15px' ,
        padding :'20px'
    }
    
    const { register, handleSubmit} = useForm();
    const onSubmit = data =>{ 
        data.email = `${loggedInUser.email}`;
        fetch('https://blooming-reef-97776.herokuapp.com/addService', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                alert('Your Service Added Successfully!')
            }
        })
    };
    
    return (
        <div style={{background: '#FFFFFF'}}>
        <div className='container'>
            <div style={{padding: '20px 0'}} className="Topbar d-flex">
                <div style={{width: '20%'}} className="top">
                <Link to='/home'><img style={logoStyle} src={logo} alt=""/></Link>  
                </div>
                <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                    <h5 style={{marginTop: '15px'}}>Add Service</h5>
                    <h5 style={{marginTop: '15px'}}>
                        {loggedInUser.email ? loggedInUser.name : 'user Name'}
                    </h5>
                </div>
            </div> 
        </div>
        
        <div className="row">
                <div className="col-md-3">
                    <div className="orderList">
                        <NavLink className="orderLi" activeClassName='text-primary' to="/adminService">
                        Service list
                        </NavLink>
                        <NavLink className="orderLi" activeClassName='text-primary' to="/addService">
                        Add Service
                        </NavLink>
                        <NavLink className="orderLi" activeClassName='text-primary' to="/makeAdmin">
                        Make Admin
                        </NavLink>
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="orderSubmit">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className='d-flex' style={servicesStyle}>
                                <div>
                                    <label>Service Title</label>
                                    <input name="title" style={{width:'500px', padding:'20px 10px'}} placeholder='Enter title' className='form-control' ref={register({ required: true })} /> <br/> 
                                    <label>Description</label>
                                    <textarea name="designation" style={{width:'500px', padding:'20px 10px'}} placeholder='Enter Designation' className='form-control' ref={register({ required: true })} />
                                </div>
                                <div>
                                    <label style={{width:'270px', backgroundColor: "#8ecae8", color: "black",  marginTop :'30px' }} class="custom-file-upload ml-3 p-2 text-center">
                                        <input style={{ display: "none" }} type="file" />
                                         upload service 
                                    </label>
                                </div>
                            </div>
                            
                            <div className='d-flex justify-content-end'>
                                <input type="submit" value='SEND' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#245563' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px' , marginRight:'35px'}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddService;