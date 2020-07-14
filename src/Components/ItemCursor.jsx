import React from 'react';


export default class ItemCusor extends React.Component {

  render() {
    return(
      <div className="itemContainer">
        <div className="popMessage">The cursor is the basis of cookie production.<br/> Work exactly as your hand.</div>
        <img className="img" src={this.props.src}/>
        <div className="itemDesc">
          <p className="itemName">{this.props.name}</p>
          <p className="itemQuantity">
            Quantity:{this.props.cursorQuanity}
          </p>
        </div>
        <button onClick={this.props.handleCursorClick}>Buy</button>
      </div>
    )
  }
}
