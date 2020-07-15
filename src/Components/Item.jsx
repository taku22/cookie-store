import React from 'react';


export default class Item extends React.Component {

  render() {
    return(
      <div className="itemContainer">
        <div className="popMessage">{this.props.text}</div>
        <img className="img" src={this.props.src}/>
        <div className="itemDesc">
          <p className="itemName">{this.props.name}</p>
          <p className="itemQuantity">
            Quantity:{this.props.quanity}
          </p>
        </div>
        <button onClick={this.props.handleBuyItemClick} name={this.props.name}>Buy</button>
      </div>
    )
  }
}
