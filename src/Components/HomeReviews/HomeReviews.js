import React from "react";

const HomeReviews = ({ review }) => {
  console.log(review);
  const { name, picture, ratting, about } = review;
  return (
    <div>


      <div className="  w-[90%] border my-10 bg-slate-100 shadow-lg px-5 pb-8 rounded-md relative ">
        <div>
          <img className="h-24 w-24  rounded-full absolute left-[35%]  top-[-35px]" src={picture} alt="" />
        </div>
     <div className="mt-20 b ">
        <h1 className="text-3xl text-center"> {name}</h1>
        <h4 className="text-xl text-center my-2">Ratting : <span className="text-yellow-700 text-xl">{ratting}</span> </h4>
        <p>{about.slice(0,250)} ....</p>
     </div>
      </div>
    </div>
  );
};

export default HomeReviews;
