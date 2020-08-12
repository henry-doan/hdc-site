import React from 'react';
import YouTubeBtn from './YouTubeBtn';
import { Image } from 'semantic-ui-react';

const Home = () => (
  <>
    <Image 
      src='https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png' 
      size='medium' 
      circular 
      centered
    />
    <YouTubeBtn />
  </>
)

export default Home;