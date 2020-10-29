import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import "jquery";
import "popper.js";
import "bootstrap";
import App from "./app"

// import { Navbar } from "./navbar";
// import { Jumbotron } from "./jumbotron";
// import { Card } from "./cards";
// import { Footer } from "./footer";

// const App = () => (
//   <>
//     <Navbar logo="Start Bootstrap" />
//     <div className="container">
//       <div className="row">
//         <Jumbotron
//           title="Hello, world!"
//           description="This is a simple hero unit, a simple jumbotron-style component for calling extra
//                         attention to featured content or information."
//           button="Learn More"
//         />
//       </div>
//       <div className="row mb-3">
//         <Card />
//       </div>
//    </div>
//     <div className="row">
//       <Footer footer="Copyright"/>
//     </div>
//   </>
// );

ReactDOM.render(<App />, document.querySelector("#root"));
