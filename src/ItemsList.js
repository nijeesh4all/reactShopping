import React from "react";
import { List } from "antd";
import Item from "./Item";

export default function ItemList({ items, addItemToCart, removeItemToCart }) {
  return (
    <List
      grid={{
        xxl: 6,
        sm: 1,
        lg: 4,
        md: 2
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
