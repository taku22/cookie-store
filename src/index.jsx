import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/style.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ItemCursor from './Components/ItemCursor';
import ItemFlower from './Components/ItemFlower';
import ItemBasket from './Components/ItemBasket';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      persecond:0,
      cursorQuanity:0,
      flowerQuanity:0,
      basketQuanity:0,
    }
    this.handleCursorClick = this.handleCursorClick.bind(this);
    this.handleFlowerClick = this.handleFlowerClick.bind(this);
    this.handleBasketClick = this.handleBasketClick.bind(this);
  }

  componentDidMount() {
    setInterval(
      () => this.makeCookie(),
      1000
    );
  }

  makeCookie() {
    const cursorQuanity = this.state.cursorQuanity;
    const flowerQuanity = this.state.flowerQuanity;
    const persecond = cursorQuanity + flowerQuanity * 100;
    this.setState({ persecond: persecond })
    this.setState( { count: this.state.count + persecond})
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  handleCursorClick() {
      this.setState({cursorQuanity: this.state.cursorQuanity + 1});
    }

  handleFlowerClick() {
    this.setState({flowerQuanity: this.state.flowerQuanity + 1});
  }
  handleBasketClick() {
    this.setState({basketQuanity: this.state.basketQuanity + 1});
  }



  render() {
    return (
      <div>
        <Header/>
        <div className="cookieWrapper">
          <div className="cookieContainer">
            <img
            className="img"
            src="src/images/cookie.png"
            onClick={this.handleClick.bind(this)}
            />
          </div>
          <p className="cookieCounter">cookies:{this.state.count}</p>
          <p className="incrementalNumber">{this.state.persecond} persecond</p>
        </div>
        <div className="itemList">
          <ItemCursor name={"cursor"}
            src={"src/images/cursor.png"}
            handleCursorClick={this.handleCursorClick}
            cursorQuanity={this.state.cursorQuanity}/>

          <ItemFlower name={"flower"}
            src={"src/images/flower.png"}
            handleFlowerClick={this.handleFlowerClick}
            flowerQuanity={this.state.flowerQuanity}/>

          <ItemBasket name={"basket"}
            src={"src/images/basket.png"}
            handleBasketClick={this.handleBasketClick}
            basketQuanity={this.state.basketQuanity}/>




          {/*

          <Item name={"basket"} src={"src/images/basket.png"}/>
          <Item name={"basket"} src={"src/images/basket.png"}/> */}
        </div>
        <Footer/>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
