import React, { Component } from "react";
import { Card, Icon, Avatar, Badge, Button } from "antd";

const { Meta } = Card;

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.item = props.item;

    this.addToCard = props.addToCard;
    this.removeFromCart = props.removeFromCart;

    this.state = {
      bought: this.item.bought || 0
    };
  }

  render() {
    const { name, imageUrl, price } = this.item;    
    const actions =
      this.state.bought
        ? [
            <Icon
              type="minus-circle"
              onClick={() => this.removeItemFromCart()}
            />,
            <Badge
              count={this.state.bought}
              style={{ backgroundColor: "#52c41a" }}
            ></Badge>,
            <Icon type="plus-circle" onClick={() => this.addItemToCart()} />
          ]
        : [
            <Button type="default" onClick={() => this.addItemToCart()}>
              Add to cart
              <Icon type="shopping-cart" />
            </Button>
          ];
    return (
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt={name}
            src={imageUrl}
            style={{ width: "300px", height: "300px" }}
          />
        }
        actions={actions}
      >
        <Meta
          avatar={<Avatar src={imageUrl} />}
          title={name}
          description={price + " RS"}
        />
      </Card>
    );
  }

  addItemToCart() {
    this.setState({ bought: this.state.bought + 1 });
    this.addToCard();
  }

  removeItemFromCart() {
    this.setState({ bought: this.state.bought - 1 });
    this.removeFromCart();
  }
}
