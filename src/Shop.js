import React, { Component } from "react";
import Webframeshop from "./pagedraw/webframeshop";
import Button from "./pagedraw/button" ;
class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'pink'
    };
    this.total = 0.0;
}     
  render() {
    return (
      <div>
        <h2>Shop</h2>
          <p>Our shoes come in a variety of quality styles and sizes.</p>
          <p>Materials are all fairly traded and organic.</p>
          <p>Items that arrive damaged or do not fit can be returned 
            within 60 days.
          </p>
          <Webframeshop
           onClick={this.onClick.bind(this)}
          />
          <div>
           <Button  
           buttonHandler={this.buttonHandler.bind(this)}
         />
          </div>
      </div>
    );
  }

  onClick (){
    alert("hello shoes!");
    this.total +=40.00;
    this.setState({
      text: "$" + this.total.toFixed(2)
  
    });
  }

  buttonHandler (){
    alert("hello button!");
    this.total =0;
    this.setState({
      text: "$" + this.total.toFixed(2)
    });
  }
}
 
export default Shop;