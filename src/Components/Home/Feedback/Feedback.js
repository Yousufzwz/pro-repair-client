import React, { useState } from 'react';
import { useEffect } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

import { css } from "@emotion/core";
import { RotateLoader } from 'react-spinners';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Feedback = () => {
    const [review , setReview] = useState([])
    useEffect(() => {
        fetch('https://blooming-reef-97776.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    },[])
    return (
        <section style={{padding:'100px'}}>
            <div className='container'>
                <h1 className='my-5 text-center'>Our Customers Feedback</h1>
            </div>
                <div className="row">
                    {
                        review.length === 0 &&
                        <RotateLoader
                            css={override}
                            size={150}
                            color={"#0f3057"}
                        />
                    }
                    {
                      review.map(feed => <FeedbackCard key={review._id} feed={feed} ></FeedbackCard>)  
                    }
                </div>
            
        </section>
    );
};

export default Feedback;