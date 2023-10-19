import { Component, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


const App = () => {
  const [searchInput, setsearchInput] = useState([]);
  const [defination, setdefination] = useState({});

  const fetchDefination = async () => {
    const resp = await axios.get(`http://localhost:5000/${searchInput}`);
   // const word = resp.data?.meaning.split(' ')
  
  //  const def = word[1]
    console.log(resp.data);
    setdefination(resp.data);
  };

  const handleClick = () => {
  console.log(defination);
    fetchDefination();
  };

  // const Filter = (e)=>{
  //   setdefination(searchInput.filter(f=>f.))
  // }

  return (
    <div>
      <div className="main">
        <div className="header">
          <h1 className="title">The Online Dictionary</h1>
        </div>

       <div className="formInput">
       <input
          className="search"
          id="word"
          name="searchWord"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value);
          }}
          placeholder="Enter the Word"
        />
        <button className="btn" onClick={handleClick}>
          search
        </button>
       </div>
      </div>

      <div>
      
   

        <p className="result">{defination[0]}</p>
         <p className="results">{defination}</p>
      </div>
    </div>
  );
};

export default App;
