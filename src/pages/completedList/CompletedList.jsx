import { useState } from "react";
import { Redirect } from "react-router-dom";
import Rating from "../../components/Rating";
import { MdDeleteForever } from "react-icons/md";
import "./completedList.css";
const CompletedList = ({
  complitedList,
  setComplitedList,
  details,
  setDetails,
  setShowRates,
}) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/Details" />;
  }
  function showBookInDetailsPage(id) {
    const tempArray = [...complitedList].filter((book) => book.id === id);
    setDetails(tempArray);
    setRedirect(true);
  }
  function removeBookFromComplitedList(id) {
    const tempArray = [...complitedList].filter((book) => book.id !== id);
    setComplitedList(tempArray);
  }
  return (
    <div className="cardImages">
      <h1 style={{ textAlign: "center" }}>CompletedList-Page </h1>
      {console.log("hello")}
      {complitedList.map((book, i) => {
        return (
          <>
          <Rating
            complitedList={complitedList}
            index={i}
            setComplitedList={setComplitedList}
            details={details} />
            <div className="infoCompleted" key={book.id}>
              <img
                onClick={() => {
                  showBookInDetailsPage(book.id);
                  setShowRates("complited");
                } }
                src={book.img} />
              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <p id="hide">{book.description}</p>
              <button onClick={() => removeBookFromComplitedList(book.id)}>
                <MdDeleteForever />
              </button>
            </div></>
        );
      })}
    </div>
  );
};

export default CompletedList;
