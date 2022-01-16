import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiHeartAddFill } from "react-icons/ri";
import ReactTooltip from "react-tooltip";
import "./search.css";
function Search({ setReadingList, readingList }) {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState([]);
  useEffect(getBooks, []);
  function getBooks() {
    axios
      .get("./data/books.json")
      .then(function (response) {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function addBookToReadingList(id) {
    const tempArray = [...books];
    const tempReadingList = [...readingList];
    let foundBook = tempArray.find((book) => book.id == id);
    // if (!foundBook.id) return alert("aaaa");
    tempReadingList.push(foundBook);
    setReadingList(tempReadingList);
  }
  function userSearch(searchTerm) {
    let searchArray = books.filter((book) => {
      if (
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return book;
      }
    });
    setShowSearchResults(searchArray);
  }
  let searchElement = showSearchResults.map((book) => {
    return (
      <div className="card" key={book.id}>
        <img onClick={() => addBookToReadingList(book.id)} src={book.img} />
        <h1>{book.title}</h1>
        <h1>{book.author}</h1>
        <h1 id="hide">{book.description}</h1>
        <button
          className="add"
          onClick={() => addBookToReadingList(book.id)}
        >
          <RiHeartAddFill />
        </button>
        <ReactTooltip id="addBookToTheReadingList" place="top" effect="solid">
          Add Book To The Reading-List
        </ReactTooltip>
      </div>
    );
  });
  let elements = books.map((book, id) => {
    if (id < 10) {
      return (
        <div className="card" key={book.id}>
          <img src={book.img} />
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <p id="hide">{book.description}</p>
          <button
            className="add"
            data-tip
            data-for="addBookToTheReadingList"
            onClick={() => addBookToReadingList(book.id)}
          >
            <RiHeartAddFill />
          </button>
          <ReactTooltip id="addBookToTheReadingList" place="top" effect="solid">
            Add Book To The Reading-List
          </ReactTooltip>
        </div>
      );
    }
  });
  return (
    <>
      <input
        style={{ color: "black" }}
        type="text"
        placeholder="...Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          userSearch(searchTerm);
        }}
      />
      <div className="info">{searchTerm ? searchElement : elements};</div>
    </>
  );
}
export default Search;
