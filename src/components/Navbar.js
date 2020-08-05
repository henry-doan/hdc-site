import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, SetActiveItem] = useState('home')

  return (
    <Menu secondary>
      <Link to='/'>
        <Menu.Item
          name='Home'
          active={activeItem === 'home'}
          onClick={() => SetActiveItem('home')}
        />
      </Link>
      <Link to='/about'>
        <Menu.Item
          name='About'
          active={activeItem === 'about'}
          onClick={() => SetActiveItem('about')}
        />
      </Link>
      <Link to='/contact'>
        <Menu.Item
          name='Contact'
          active={activeItem === 'contact'}
          onClick={() => SetActiveItem('contact')}
        />
      </Link>
    </Menu>
  )
}    

export default Navbar;