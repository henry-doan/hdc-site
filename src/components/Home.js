import React from 'react';
import YouTubeBtn from './YouTubeBtn';
import { Image } from 'semantic-ui-react';
import { PgTitle } from '../styledComponents/homeStyles';
import { Flip, Fade } from 'react-reveal';
import Snowfall from 'react-snowfall';

const Home = () => (
  <>
    <Snowfall style={{ height: 2000 }} />
    <Flip top>
      <Image 
        src='https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png' 
        size='medium' 
        circular 
        centered
      />
    </Flip>
    <Fade top>
      <PgTitle>Coding Concepts:</PgTitle>
    </Fade>
    <YouTubeBtn />
  </>
)

export default Home;