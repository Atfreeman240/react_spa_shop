import React, { Component } from "react";
import Webframeshop from "./pagedraw/webframeshop";
 
class Shop extends Component {
  render() {
    return (
      <div>
        <h2>Shop</h2>
          <p>Our shoes come in a variety of quality styles and sizes.</p>
          <p>Materials are all fairly traded and organic.</p>
          <p>Items that arrive damaged or do not fit can be returned 
            within 60 days.
          </p>
          <Webframeshop/>
      </div>
    );
  }
}
 
export default Shop;