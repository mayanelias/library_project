import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import ReadingList from "./pages/readingList/ReadingList";
import CompletedList from "./pages/completedList/CompletedList";
import Details from "./pages/Details";
import "./App.css";
function App() {
  const [auth, setAuth] = useState(null);
  const [readingList, setReadingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [details, setDetails] = useState("");
  const [showRates, setShowRates] = useState("");
  const USERֹֹ_INFORMATIOM = "userInformation";
  useEffect(()=>{
  const userInformation = JSON.parse(localStorage.getItem(USERֹֹ_INFORMATIOM))
  userInformation ? setAuth(userInformation) : null
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        {auth ? (
          <>
        <button className="signOut"
          onClick={() => {
            localStorage.clear();
            setAuth(null);
          }}
        >
          sign out
        </button>
            <Redirect to="/Search" />
            <Link to="/CompletedList">CompletedList</Link>
            <Link to="/ReadingList">ReadingList</Link>
            <Link to="/Search">Search</Link>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to={"/Search"} />}
              />
              <Route
                exact
                path="/Search"
                render={() => (
                  <Search
                    setAuth={setAuth}
                    readingList={readingList}
                    setReadingList={setReadingList}
                  />
                )}
              />
              <Route
                exact
                path="/ReadingList"
                render={() => (
                  <ReadingList
                    readingList={readingList}
                    setReadingList={setReadingList}
                    completedList={completedList}
                    setCompletedList={setCompletedList}
                    details={details}
                    setDetails={setDetails}
                    setShowRates={setShowRates}
                  />
                )}
              />
              <Route
                exact
                path="/CompletedList"
                render={() => (
                  <CompletedList
                  completedList={completedList}
                  setCompletedList={setCompletedList}
                    details={details}
                    setDetails={setDetails}
                    setShowRates={setShowRates}
                  />
                )}
              />
              <Route
                exact
                path="/Details"
                render={() => (
                  <Details
                    details={details}
                    setDetails={setDetails}
                    readingList={readingList}
                    completedList={completedList}
                    showRates={showRates}
                  />
                )}
              />
            </Switch>
          </>
        ) : (
          <Home
            setAuth={setAuth}
            USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
export default App;
