import React from 'react';
import { List, Avatar } from 'antd';

const CartItem = (props) =>{
        return (
            <List.Item style={{maxWidth: '400px'}}
            actions={[ <span> Cost { props.item.bought * props.item.price } RS</span> ]}
            >
                <List.Item.Meta
                    avatar={<Avatar src={props.item.imageUrl} />}
                    title={<a href="https://ant.design">{props.item.name}</a>}
                    description={`Bought: ${props.item.bought} `}
                    />
            </List.Item>
        );
}

export default CartItem;