import React, { useState } from "react";
import "./App.css";

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '여자 코트 추천', '숙제']); 

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3>{ title[0] }</h3>
        <p>2021-11-14</p>
        <hr/>
      </div>      
      <div className='list'>
        <h3>{ title[1] }</h3>
        <p>2021-11-14</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ title[2] }</h3>
        <p>2021-11-14</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
