import { useState } from "react";
import { Redirect } from "react-router-dom";
import { RiHeartAddFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import "./readingList.css";
const ReadingList = ({
  setReadingList,
  readingList,
  completedList,
  setCompletedList,
  setDetails,
  setShowRates,
}) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/Details" />;
  }
  function addBookToComplitedList(id) {
    const tempArray = [...readingList];
    const tempCompletedList = [...completedList];
    let foundBook = tempArray.find((book) => book.id == id);
    tempCompletedList.push(foundBook);
    setReadingList(tempArray.filter((book) => book.id !== id));
    setCompletedList(tempCompletedList);
  }
  function showBookInDetailsPage(id) {
    const tempArray = [...readingList].filter((book) => book.id === id);
    setDetails(tempArray);
    setRedirect(true);
  }
  function removeBookFromReadingList(id) {
    const tempArray = [...readingList].filter((book) => book.id !== id);
    setReadingList(tempArray);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>ReadingList-Page </h1>
      <div className="cardImages">
        {readingList.map((book) => {
          return (
            <div className="infoRead" key={book.id}>
              <img style={{width:"300px",height:"300px"}}
                onClick={() => {
                  showBookInDetailsPage(book.id);
                  setShowRates("");
                }}
                src={book.img}
              />
              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <p id="hide">{book.description}</p>
              <button
                data-tip
                data-for="addBookToTheCompletedList"
                className="add"
                onClick={() => addBookToComplitedList(book.id)}
              >
                <RiHeartAddFill />
              </button>
              <ReactTooltip
                id="addBookToTheCompletedList"
                place="top"
                effect="solid"
              >
                Add Book To The Completed-List
              </ReactTooltip>
              <button
                data-tip
                data-for="removeBookFromReadingList"
                className="add"
                onClick={() => removeBookFromReadingList(book.id)}
              >
                <MdDeleteForever />
              </button>
              <ReactTooltip
                id="removeBookFromReadingList"
                place="top"
                effect="solid"
              >
                Remove Book From Reading-List
              </ReactTooltip>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReadingList;
