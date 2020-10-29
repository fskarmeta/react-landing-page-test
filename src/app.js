import React from "react"
//import  Navbar from "./navbar";
import  Jumbotron  from "./jumbotron";
//import  Card  from "./cards";
//import  Footer from "./footer";

const App = () => (
    <>
      {/* <Navbar logo="Start Bootstrap" /> */}
      <div className="container">
        <div className="row">
          <Jumbotron
            title="A Warm Welcome!"
            description=""
            button="Learn More"
          />
        </div>
        <div className="row mb-3">
          {/* <Card /> */}
        </div>
     </div>
      <div className="row">
        {/* <Footer footer="Copyright"/> */}
      </div>
    </>
  );
  export default App