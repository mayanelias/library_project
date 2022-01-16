import { useState } from "react";
import { Redirect } from "react-router-dom";
import Rating from "../../components/Rating";
import { MdDeleteForever } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import "./completedList.css";
const CompletedList = ({
  completedList,
  setCompletedList,
  details,
  setDetails,
  setShowRates,
}) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/Details" />;
  }
  function showBookInDetailsPage(id) {
    const tempArray = [...completedList].filter((book) => book.id === id);
    setDetails(tempArray);
    setRedirect(true);
  }
  function removeBookFromComplitedList(id) {
    const tempArray = [...completedList].filter((book) => book.id !== id);
    setCompletedList(tempArray);
  }
  return (
    <div className="cardImages">
      <h1 style={{ textAlign: "center" }}>CompletedList-Page </h1>
      {console.log("hello")}
      {completedList.map((book, i) => {
        return (
          <>
            <Rating
              completedList={completedList}
              index={i}
              setCompletedList={setCompletedList}
              details={details}
            />
            <div className="infoCompleted" key={book.id}>
              <img style={{width:"300px",height:"300px"}}
                onClick={() => {
                  showBookInDetailsPage(book.id);
                  setShowRates("completed");
                }}
                src={book.img}
              />
              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <p id="hide">{book.description}</p>
              <button
                className="add"
                data-tip
                data-for="removeBook"
                onClick={() => removeBookFromComplitedList(book.id)}
              >
                <MdDeleteForever />
              </button>
              <ReactTooltip id="removeBook" place="top" effect="solid">
                Remove Book
              </ReactTooltip>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CompletedList;
