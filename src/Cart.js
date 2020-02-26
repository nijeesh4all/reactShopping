import React, { Component } from "react";
import { Badge, Icon, Popover, List } from "antd";
import CartItem from "./CartItem";

export default class Cart extends Component {
  render() {
    const cartTotal = this.props.items.reduce((sum, item) => {
      return sum + item.bought * item.price;
    }, 0);
    const listContent = (
      <List
        footer={
          <div>
            <span style={{textAlign: "center"}}> Cart Total : <strong>{cartTotal}</strong> </span>
          </div>
        }
      >
        {this.cartItems()}
      </List>
    );

    return (
      <Popover
        placement="bottom"
        title="YOUR CART"
        content={listContent}
        trigger="click"
      >
        <Badge count={this.boughtItems()}>
          CART
          <Icon type="shopping-cart" style={{ marginRight: "20px" }} />
        </Badge>
      </Popover>
    );
  }

  cartItems() {
    const boughtItems = this.props.items.filter(item => item.bought !== 0);
    if (boughtItems.length !== 0) {
      return boughtItems.map(item => {
        return <CartItem key={item.id} item={item}></CartItem>;
      });
    } else {
      return <span> Your Cart Is Empty</span>;
    }
  }

  boughtItems() {
    return this.props.items.reduce((count, item) => item.bought + count, 0);
  }
}
