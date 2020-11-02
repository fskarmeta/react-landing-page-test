import React from "react";

class Card extends React.Component {
constructor(){
  super();
  this.state = [
    {
      card_title: "Card Title 1",
      card_description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      card_button: "Find Out More!",
      card_img: "http://placehold.it/500x325/",
    },
    {
      card_title: "Card Title 2",
      card_description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      card_button: "Find Out More!",
      card_img: "http://placehold.it/500x325/",
    },
    {
      card_title: "Card Title 3",
      card_description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      card_button: "Find Out More!",
      card_img: "http://placehold.it/500x325/",
    },
    {
      card_title: "Card Title 4",
      card_description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      card_button: "Find Out More!",
      card_img: "http://placehold.it/500x325/",
    },
  ]
}
  
render() {
  return (
    this.state.map((item, index) => (
      <div className="col-md-3 col-sm-6" key={index}>
        <div className="card text-center">
          <img className="card-img-top" src={item.card_img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{item.card_title}</h5>
            <p className="card-text">{item.card_description}</p>
            <div className="card-footer text-center ">
              <a href="#" className="btn btn-primary btn-block mt-3">
                {item.card_button}
              </a>
            </div>
          </div>
        </div>
      </div>
    ))
  )
}
};

export default Card