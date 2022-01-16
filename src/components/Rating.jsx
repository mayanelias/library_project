import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Rating = ({complitedList,index,setComplitedList,details}) => {
  const [rating, setRating] = useState(false);
  const [hover, setHover] = useState(false);
  function keepRate(rate){
      const temp=[...complitedList]
      temp[index].rate=rate
      setComplitedList(temp)
  }
  return (
    <div> 
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              onClick={() => {keepRate(ratingValue); setRating(ratingValue)}}
              type="radio"
              name="rating"
              
            />
            <FaStar
              className="star"
              value={ratingValue}
              color={ratingValue <= (hover || rating) ? "orange" : "gray"}
              size={60}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(false)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
