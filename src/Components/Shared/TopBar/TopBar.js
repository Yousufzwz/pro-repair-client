import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
import Logo from '../../../images/logos/repair_450x141.png';
import { UserContext } from '../../../App';

const TopBar = () => {
    const [loggedInUser ] = useContext(UserContext);
    return (
        <Navbar expand="lg">
            <div className='container
            '>
                <Navbar.Brand style={{float:'left'}}> 
                    <img style={{width:'150px', height:'50px'}} src={Logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{width:'900px',float:'right'}} id="basic-navbar-nav">
                    <Nav  className="ml-auto">
                        <li className="list_li">
                            <NavLink activeClassName='text-primary'
                                to='/home' className='nav_li'>Home</NavLink>
                        </li>
                        <li className="list_li">
                            <NavLink activeClassName='text-primary'
                                to='/projects' className='nav_li'>Projects</NavLink>
                        </li>
                        <li className="list_li">
                            <NavLink activeClassName='text-primary'
                                to='/information' className='nav_li'>About Us</NavLink>
                        </li>
                        <li className="list_li">
                            <NavLink activeClassName='text-primary'
                                to='/address' className='nav_li'>Contact Us</NavLink>
                        </li>

                        <li>
                            <NavLink to='/addService'> 
                            <button style={{width:'150px' , height:'40px' , fontSize:'16px' , marginTop:'18px', marginRight:'21px', background:'#315a94' ,color:'#FFFFFF'}}  className='btn mt-2'>
                                Admin
                            </button> 
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/login'> 
                            <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#315a94' ,color:'#FFFFFF'}}  className='btn mt-2'>
                                 {
                                    loggedInUser.email ? loggedInUser.name : 'Login'
                                }
                            </button> 
                            </NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default TopBar;