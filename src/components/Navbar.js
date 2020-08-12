import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { createMedia } from "@artsy/fresnel";
import { NavSec } from '../styledComponents/homeStyles';

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920
  }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home')

  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <NavSec inverted secondary fluid size='huge'>
          <Dropdown
            item
            icon ='bars'
            as={Media} at="mobile"
          >
            <Dropdown.Menu>
              <Dropdown.Item text='Home' as={Link} to='/' />
              <Dropdown.Item text='About' as={Link} to='/about' />
              <Dropdown.Item text='Contact' as={Link} to='/contact'/>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu as={Media} greaterThanOrEqual="tablet">
            <Menu.Item
              name='Home'
              as={Link}
              to='/'
              active={activeItem === 'home'}
              onClick={() => setActiveItem('home')}
            />
            <Menu.Item
              name='About'
              as={Link}
              to='/about'
              active={activeItem === 'about'}
              onClick={() => setActiveItem('about')}
            />
            <Menu.Item
              name='Contact'
              as={Link}
              to='contact'
              active={activeItem === 'contact'}
              onClick={() => setActiveItem('contact')}
            />
          </Menu.Menu>
        </NavSec>
      </MediaContextProvider>
    </>
  )
}    

export default Navbar;