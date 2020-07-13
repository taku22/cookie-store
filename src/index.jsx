import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/style.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Item from './Components/Item';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0}
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
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
          <p className="cookieCounter">cookie:{this.state.count}</p>
          <p className="incrementalNumber">something persecond</p>
        </div>
        <div className="itemList">
          <Item name={"Cursor"} src={"src/images/cursor.png"}/>
          <Item name={"Flower"} src={"src/images/flower.png"}/>
          <Item name={"basket"} src={"src/images/basket.png"}/>
          <Item name={"basket"} src={"src/images/basket.png"}/>
          <Item name={"basket"} src={"src/images/basket.png"}/>

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
