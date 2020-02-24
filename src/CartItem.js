import React, { Component } from 'react';
import { List, Avatar } from 'antd';

class CartItem extends Component {
    constructor(props){
        super(props)
        this.item = props.item;        
    }
    
    render() { 
        return (
            <List.Item style={{maxWidth: '400px'}}
            actions={[ <span> Cost { this.item.bought * this.item.price } </span> ]}
            >
                <List.Item.Meta
                    avatar={<Avatar src={this.item.imageUrl} />}
                    title={<a href="https://ant.design">{this.item.name}</a>}
                    description={`Bought: ${this.item.bought} `}
                    />
            </List.Item>
        );
    }
}
 
export default CartItem;