import { useState } from "react";
import { Redirect } from "react-router-dom";
import { RiHeartAddFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import "./readingList.css";
const ReadingList = ({
  setReadingList,
  readingList,
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
  function addBookToComplitedList(id) {
    const tempArray = [...readingList];
    const tempComplitedList = [...complitedList];
    let foundBook = tempArray.find((book) => book.id == id);
    tempComplitedList.push(foundBook);
    setReadingList(tempArray.filter((book) => book.id !== id));
    setComplitedList(tempComplitedList);
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
      <><h1 style={{ textAlign: "center" }}>ReadingList-Page </h1>
      <div className="cardImages">
      {readingList.map((book) => {
        return (
          <div className="infoRead"key={book.id}>
            <img
              onClick={() => {
                showBookInDetailsPage(book.id);
                setShowRates("");
              } }
              src={book.img} />
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p id="hide">{book.description}</p>
            <button className="add"  onClick={() => addBookToComplitedList(book.id)}>
              <RiHeartAddFill />
            </button>
            <button className="add" onClick={() => removeBookFromReadingList(book.id)}>
              <MdDeleteForever />
            </button>
          </div>
        );
      })}
    </div></>
  );
};

export default ReadingList;
