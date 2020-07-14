import React from 'react';


export default class ItemFlower extends React.Component {

  render() {
    return(
      <div className="itemContainer">
        <div className="popMessage">The flower is great.<br/>For the reason, The flower can make cokkie.</div>
        <img className="img" src={this.props.src}/>
        <div className="itemDesc">
          <p className="itemName">{this.props.name}</p>
          <p className="itemQuantity">
            Quantity:{this.props.flowerQuanity}
          </p>
        </div>
        <button onClick={this.props.handleFlowerClick}>Buy</button>
      </div>
    )
  }
}
