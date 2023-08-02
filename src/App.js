import React, { Component, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}
//       </div>
//     );
//   }
// }

const App = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
    // console.log("Been loaded", anchors.length);
  }, []);
  return <div className="App"></div>;
};

export default App;
