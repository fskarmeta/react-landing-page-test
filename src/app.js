import React from "react"
import  Navbar from "./navbar";
import  Jumbotron  from "./jumbotron";
import  Card  from "./cards";
import  Footer from "./footer";



const App = () => (
    <>
      <Navbar logo="Start Bootstrap" features="about" home="home" pricing="services" contact="contact"/>
      <div className="container">
        <div className="row">

          <Jumbotron
            title="A Warm Welcome!"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet nisl facilisis, ultrices lorem eget, gravida nibh. Proin convallis mauris sit amet porta rhoncus. Cras ultricies diam libero. Sed pharetra vel tellus eu feugiat. Nunc sollicitudin, odio at semper mollis, erat urna laoreet ex, eu pulvinar libero elit sed mauris. Morbi tempus mauris"
            button="Learn More"
          />
        </div>
        <div className="row mb-3">
          <Card />
        </div>
     </div>
      <div className="row">
        <Footer footer="Copyright"/>
      </div>
    </>
  );
  export default App