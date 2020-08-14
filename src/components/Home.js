import React from 'react';
import YouTubeBtn from './YouTubeBtn';
import { Image } from 'semantic-ui-react';
import { PgTitle } from '../styledComponents/homeStyles';

const Home = () => (
  <>
    <Image 
      src='https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png' 
      size='medium' 
      circular 
      centered
    />
    <PgTitle>Coding Concepts:</PgTitle>
    <YouTubeBtn />
  </>
)

export default Home;