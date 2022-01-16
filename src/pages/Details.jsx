import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
const Details = ({ details,showRates }) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/Search" />;
  }
  function addNoteInDetailsPage(e, bookDetails) {
    bookDetails.note = e.target.value;
  }
  return (
    <div>
      <div>
        {showRates == "completed"
          ? [...Array(5)].map((star, i) => (
              <FaStar
                color={i < details[0].rate ? "orange" : "gray"}
                size={60}
              />
            ))
          : ""}
      </div>
      <img src={details[0].img} />
      <h2>{details[0].title}</h2>
      <h4>{details[0].author}</h4>
      <p>{details[0].description}</p>
      <button onClick={() => setRedirect(true)}><TiArrowBack/></button>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => addNoteInDetailsPage(e, details[0])}
        defaultValue={details[0].note ? details[0].note : ""}
      />
      <h1 style={{ textAlign: "center" }}>Details-Page </h1>
    </div>
  );
};
export default Details;
