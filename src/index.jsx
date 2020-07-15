import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/style.scss';
import Footer from './Components/Footer';
import Item from './Components/Item';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      persecond: 0,
      cursorQuanity: 0,
      flowerQuanity: 0,
      basketQuanity: 0,
      cursorItemAmount: 1,
      flowerItemAmount: 1000,
      basketItemAmount: 10000,
    }
    this.handleBuyItemClick = this.handleBuyItemClick.bind(this);
  }

  componentDidMount() {
    setInterval(
      () => this.makeCookie(),
      1000
    );
  }

  handleBuyItemClick(e) {
    const ItemName = e.target.name;
    const totalCookie = this.state.count;
    const quanityKey = ItemName + 'Quanity';
    const amountKey = ItemName + 'ItemAmount';

    if(totalCookie >= this.state[amountKey]){
      this.setState({count: totalCookie - this.state[amountKey]});
      this.setState({[quanityKey]: this.state[quanityKey]+ 1});
      this.setState({[amountKey]: this.state[amountKey] * 2});
    }
  }

  makeCookie() {
    const cursorQuanity = this.state.cursorQuanity;
    const flowerQuanity = this.state.flowerQuanity;
    const basketQuanity = this.state.basketQuanity;
    const persecond = cursorQuanity + flowerQuanity * 100 + basketQuanity * 1000;
    this.setState({ persecond: persecond })
    this.setState( { count: this.state.count + persecond})
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
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
          <Item
            name={"cursor"}
            text={`The cursor is the basis of cookie production.\n Work exactly as your hand.`}
            src={"src/images/cursor.png"}
            handleBuyItemClick={this.handleBuyItemClick}
            quanity={this.state.cursorQuanity}
            amount={this.state.cursorItemAmount}/>

          <Item
            name={"flower"}
            text={"The flower is great.\n For the reason, The flower can make cokkie."}
            src={"src/images/flower.png"}
            handleBuyItemClick={this.handleBuyItemClick}
            quanity={this.state.flowerQuanity}
            amount={this.state.flowerItemAmount}/>

          <Item
            name={"basket"}
            text={"Since ancient times, Cookies are known to live in baskets"}
            src={"src/images/basket.png"}
            handleBuyItemClick={this.handleBuyItemClick}
            quanity={this.state.basketQuanity}
            amount={this.state.basketItemAmount}/>

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
