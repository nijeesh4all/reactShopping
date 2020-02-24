import React, { Component } from "react";
import { Badge, Icon } from "antd";

export default class Cart extends Component {
  constructor(props) {
      super(props)
      this.items = props.items;
      this.removeItemToCart = props.removeItemToCart;
  }
    
  render() {
    return (
      <Badge count={this.boughtItems()}>
        CART
        <Icon type="shopping-cart" style={{ marginRight: "20px" }} />
      </Badge>
    );
  }
  boughtItems(){
      return this.items.reduce((count, item)=> item.bought + count , 0)
  }
}
