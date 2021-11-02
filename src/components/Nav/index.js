import React from 'react';

import { NavLink } from 'react-router-dom';

import './style.scss';
import { Dropdown, Menu } from 'semantic-ui-react';

const Nav = () => (
  <Menu stackable compact inverted>
    <Menu.Item
      as={NavLink}
      to="/"
      exact
    >
      Accueil
    </Menu.Item>
    <Dropdown item text="Jeux">
      <Dropdown.Menu>
        <Dropdown.Item
          as={NavLink}
          to="/ohanami"
          exact
        >
          Ohanami
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
);

Nav.propTypes = {

};

export default Nav;
