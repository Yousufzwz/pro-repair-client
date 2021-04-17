import React from 'react';
import { Card } from 'react-bootstrap';
import user from '../../../images/user.png';
import './FeedbackCard.css'

const FeedbackCard = ({feed}) => {
    return (
        <div className='col-md-4 col-sm-10 mt-2'>
            <div className=''>
                <Card className='feedbackCard' style={{padding:'10px'}}>
                    <div className='d-flex'>
                        <div style={{width:'90px'}}>
                        <Card.Img style={{width:'75px', height : '75px', margin: 'auto' }}
                         variant="top" src={user} />
                        </div>
                        <div>
                            <Card.Title> <h3>{feed.name}</h3> </Card.Title>
                            <Card.Title> <small>{feed.email}</small> </Card.Title>
                        </div>
                    </div>
                    <Card.Body>
                    <Card.Title>
                         <small>{feed.company}</small> 
                    </Card.Title>
                        <Card.Text>
                        {feed.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default FeedbackCard;