import React, { useState } from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./cards";
import Footer from "./footer";

const App = () => {
  const [state, setState] = useState({
    navbar: {
      logo: "Start Bootstrap",
      features: "about",
      home: "home",
      services: "services",
      contact: "contact",
    },
    jumbotron: {
      title: "A Warm Welcome!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet nisl facilisis, ultrices lorem eget, gravida nibh. Proin convallis mauris sit amet porta rhoncus. Cras ultricies diam libero. Sed pharetra vel tellus eu feugiat. Nunc sollicitudin, odio at semper mollis, erat urna laoreet ex, eu pulvinar libero elit sed mauris. Morbi tempus mauris",
      button: "Learn More",
    },
    footer: {
      footer: "Copyright",
    },
  });

  return (
    <>
      <Navbar
        logo={state.navbar.logo}
        features={state.navbar.features}
        home={state.navbar.home}
        pricing={state.navbar.pricing}
        contact={state.navbar.contact}
      />
      <div className="container">
        <div className="row">
          <Jumbotron
            title={state.jumbotron.title}
            description={state.jumbotron.description}
            button={state.jumbotron.button}
          />
        </div>
        <div className="row mb-3">
          <Card />
        </div>
      </div>
      <div className="row">
        <Footer footer={state.footer.footer} />
      </div>
    </>
  );
};
export default App;
