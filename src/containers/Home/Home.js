import React, { Component, Fragment } from 'react';
import randomstring from 'randomstring';
import { PoseGroup } from 'react-pose';
import { Item, Button } from './style';

export default class Main extends Component {
  state = {
    items: []
  }
  addItem = () => {
    const newItem = {
      id: Math.random(),
      name: randomstring.generate(),
    };
    this.setState({ items: [...this.state.items, newItem] });
    // setTimeout(this.addItem, 3000);
  }
  shuffle = () => {
    const items = [];
    while (this.state.items.length) {
      const randomIndex = Math.floor(Math.random() * this.state.items.length);
      items.push(this.state.items.splice(randomIndex, 1)[0]);
    }
    this.setState({ items });
  }
  removeItem = () => {
    const randomIndex = Math.floor(Math.random() * this.state.items.length);
    this.state.items.splice(randomIndex, 1);
    this.setState({items: [...this.state.items]});
  }
  render() {
    const { items } = this.state;
    return (
      <Fragment>
        <Button onClick={this.addItem}>add item</Button>
        <Button onClick={this.shuffle}>shuffle</Button>
        <Button onClick={this.removeItem}>remove item</Button>
        <PoseGroup>
          {
            items.map(d => <Item key={d.id}>{d.name}</Item>)
          }
        </PoseGroup>
      </Fragment>
    );
  }
}
