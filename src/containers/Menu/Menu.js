import React, { Component } from 'react';
import { MenuButton, MenuContainer, MenuItem } from './style';

const MENU_STATE = {
  OPEN: 'open',
  CLOSED: 'closed',
};

export default class Menu extends Component {
  state = {
    menuState: MENU_STATE.CLOSED
  }

  toggleMenu = () => {
    this.setState({
      menuState: this.state.menuState === MENU_STATE.CLOSED ? MENU_STATE.OPEN : MENU_STATE.CLOSED
    });
  }
  render() {
    return (
      <div>
        <MenuButton onClick={this.toggleMenu}>Open Menu</MenuButton>
        <MenuContainer pose={this.state.menuState}>
          <MenuItem onClick={this.toggleMenu} />
          <MenuItem onClick={this.toggleMenu} />
          <MenuItem onClick={this.toggleMenu} />
        </MenuContainer>
      </div>
    );
  }
}
