import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "숙제",
  ]);
  let [count, setCount] = useState(0);

  function changeTitle() {
    // 새로운 복사본을 생성 : deep copy
    var newArry = [...title];
    newArry[0] = '남자 가디건 추천';
    setTitle( newArry );
  }



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ changeTitle }>버튼</button>
      <div className="list">
        <h3>
          {title[0]}{" "}
          <span
            onClick={() => {
              setCount(count++);
            }}
          >
            ✨
          </span>{" "}
          {count}
        </h3>
        <p>2021-11-14</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2021-11-14</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2021-11-14</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
