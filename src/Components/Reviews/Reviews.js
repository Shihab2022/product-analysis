import React from 'react';
import useReviewData from '../../Hooks/Review';
import AllReviews from '../AllReviews/AllReviews';

const Reviews = () => {

    const [reviewAllData]=useReviewData()


    return (
        <div>
                 <h1 className="text-center md:my-16 mb-5 mt-8 text-5xl text-amber-500 font-mono font-extrabold">
        Our Customer Reviews
      </h1>

      <div className="grid md:grid-cols-3  md:px-24 px-7">
        { reviewAllData.map((review) => (
          <AllReviews key={review.id} review={review}></AllReviews>
        ))}

       
      </div>
        </div>
    );
};

export default Reviews;