import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "숙제",
  ]);
  let [count, setCount] = useState(0);

  // function changeTitle() {
  //   // 새로운 복사본을 생성 : deep copy
  //   var newArry = [...title];
  //   newArry.sort();
  //   setTitle( newArry );
  // }



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
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

      <Modal />
      
    </div>
  );
}

function Modal() {
  return(
  <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
  )
}

export default App;
