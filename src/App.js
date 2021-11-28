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
      <div className="header">
        <div className="logo">
          <img className="logo_img" src="https://img.cgv.co.kr/R2014/images/title/h1_cgv.png" width="100%" height="100%" alt="cgv logo"></img>
        </div>
        <div className="content">
          <span>영화</span>
          <span>예매</span>
          <span>극장</span>
        </div>
      </div>
      <div className="ad_poster">
        <img src="https://img.cgv.co.kr/Front/Main/2021/1111/16365958530740.jpg" alt="호빗 3부작" width="100%"/>
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
