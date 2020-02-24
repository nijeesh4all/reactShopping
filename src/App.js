import React, { Component } from "react";
import { Layout, Menu } from "antd";

import ItemList from "./ItemsList";
import Cart from "./Cart";

import "antd/dist/antd.css";

const { Header, Content } = Layout;

const items = [
  {
    id: 1,
    imageUrl:
      "https://m.media-amazon.com/images/I/71w88WQmkBL._AC_UL640_QL65_ML3_.jpg",
    name: "Davidoff Coffee, Rich Aroma, 100g ",
    price: 465,
    bought: 0
  },
  {
    id: 2,
    imageUrl:
      "https://m.media-amazon.com/images/I/71w88WQmkBL._AC_UL640_QL65_ML3_.jpg",
    name: "Nescafe Gold Blend Instant Coffee Powder, 200g Eden Jar",
    price: 725.1,
    bought: 0
  },
  {
    id: 3,
    imageUrl:
      "https://m.media-amazon.com/images/I/71w88WQmkBL._AC_UL640_QL65_ML3_.jpg",
    name:
      "NESCAFÉ Travel Kit (Red) - NESCAFÉ Classic Coffee, 200g with Travel Mug (Valentines Day Gift Pack Limited Edition)",
    price: 565.12,
    bought: 0
  },
  {
    id: 4,
    imageUrl:
      "https://m.media-amazon.com/images/I/71w88WQmkBL._AC_UL640_QL65_ML3_.jpg",
    name:
      "Sleepy Owl Hot Coffee Brew Bags (Original) | Set of 10 Filter bags for Hot Coffee | 100% Arabica Beans",
    price: 255.9,
    bought: 0
  }
];

export default class App extends Component {
  state = { items }
  addItemToCart(id) {

    const item = items.find(_item => _item.id === id);
    item.bought = item.bought + 1;
    this.setState({items})
  }

  removeItemToCart(id) {
    const item = items.find(_item => _item.id === id);
    item.bought = item.bought - 1;
    this.setState({items})
  }

  render() {
    return (
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px", float: "right" }}
            selectable={false}
          >
            <Menu.Item>
              <Cart
                items={items}
                removeItemToCart={(id)=> this.removeItemToCart(id)}
              ></Cart>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "50px 50px" }}>
          <ItemList
            items={items}
            addItemToCart={(id)=>this.addItemToCart(id)}
            removeItemToCart={(id)=> this.removeItemToCart(id)}
          ></ItemList>
        </Content>
      </Layout>
    );
  }
}
