import React from 'react';


export default class Item extends React.Component {
  render() {
    return(
      <div className="itemContainer">
        <img className="img" src={this.props.src}/>
        <div className="itemDesc">
          <p className="itemName">{this.props.name}</p>
          <p className="itemQuantity">Quantity:</p>
        </div>
      </div>
    )
  }
}
