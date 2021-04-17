import React, { useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../images/logos/repair_450x141.png';
import './Order.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';

const Order = () => {
    const [loggedInUser] = useContext(UserContext);
    const {title,price} = useParams()
    const logoStyle = {
        width : '150px',
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        data.email = `${loggedInUser.email}` ;
        data.Design = {title};
        fetch('https://blooming-reef-97776.herokuapp.com/NewOrder', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                alert('Your Order Placed Successfully!')
            }
        })
    };

    return (
        
        <div style={{background: '#FFFFFF'}}>
            <div className='container'>
                <div style={{padding: '20px 0'}} className="Topbar d-flex">
                    <div style={{width: '20%'}} className="top">
                    <Link to='/home'><img style={logoStyle} src={logo}  alt=""/></Link>  
                    </div>
                    <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                        <h5 style={{marginTop: '15px'}}>Order Area</h5>
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
                    
                    <div className="col-md-7">
                        <div className="orderSubmit">
                            <form onSubmit={handleSubmit(onSubmit)} >
                            <input name="name" style={{width:'570px', padding:'20px 10px'}} placeholder='Your name ' className='form-control form_input' ref={register({ required: true })} /> <br/> 
                            <input name="email" value={loggedInUser.email || ''} style={{width:'570px', padding:'20px 10px'}} placeholder='Your email address' className='form-control form_input' ref={register({ required: true })} disabled /> <br/>
                            <input name="Service" value={title} style={{width:'570px', padding:'20px 10px'}} placeholder='Phone Repair Service' className='form-control form_input' ref={register({ required: true })} disabled/> <br/>
                            <input name="Price"value={price} style={{width:'288px', padding:'20px 10px'}} placeholder='Price' className='form-control'  ref={register({ required: true })} /> 
                                  
                            <input type="submit" value='SEND' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#42375c' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} />
                            </form>
                            <div className="col-md-6" style={{marginTop:'50px'}}>
                            <ProcessPayment/>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div >
            </div>
    );
};

export default Order;