import React from "react";
import { List } from "antd";
import Item from "./Item";

export default function ItemList(props) {
  const { items, addItemToCart, removeItemToCart } = props;
  console.log(props);
  return (
    <List
      grid={{
        xxl: 4
      }}
      dataSource={items}
      renderItem={item => (
        <List.Item>
          <Item
            item={item}
            addToCard={() => addItemToCart(item.id)}
            removeFromCart={() => removeItemToCart(item.id)}
          ></Item>
        </List.Item>
      )}
    />
  );
}
