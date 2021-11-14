import logo from "./logo.svg";
import "./App.css";

function App() {

  let posts = {color : 'blue', fontSize: '30px' }
  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div className={ posts } style={ posts }>개발 Blog</div>
      </div>
      <img src={ logo } />
      <h4> { posts + 함수() } </h4>
    </div>
  );
}

export default App;
