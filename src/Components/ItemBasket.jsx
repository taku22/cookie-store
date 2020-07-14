import React from 'react';


export default class ItemBasket extends React.Component {

  render() {
    return(
      <div className="itemContainer">
        <img className="img" src={this.props.src}/>
        <div className="itemDesc">
          <p className="itemName">{this.props.name}</p>
          <p className="itemQuantity">
            Quantity:{this.props.basketQuanity}
          </p>
        </div>
        <button onClick={this.props.handleBasketClick}>Buy</button>
      </div>
    )
  }
}
