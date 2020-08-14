import React from 'react';
import { Image, Container } from 'semantic-ui-react';
import { AboutTxt, PgTitle } from '../styledComponents/homeStyles';

const About = () => (
  <Container>
    <Image 
      src='https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png' 
      size='medium' 
      circular 
      centered
    />
    <PgTitle>About</PgTitle>
    <AboutTxt>
      My name Henry Doan I am the fastest coder alive <span role='img' aria-label='laptop'>💻</span>! ... well, 
      I'm getting there. But welcome to my YouTube videos page, an ongoing project to showcase 
      my latest programming concepts and tutorials. I started to make videos as a resource with 
      a twist of explaining things. A bit about me is that I have taken quite a few programming 
      classes and got some certificates and degrees <span role='img' aria-label='cap'>🎓</span> but the most that 
      I ever learn and grew was by attending a coding boot camp <span role='img' aria-label='boot'>🥾</span> from 
      DevPoint Labs where I got to found my calling in web development and education and ended up 
      working for them for a few years up until now, developing projects and teaching classes. With 
      all my knowledge and experience <span role='img' aria-label='brain'>🧠</span>, I am now proficient to create content 
      to share my knowledge with the world <span role='img' aria-label='erath'>🌎</span>! 
      <br />
      Enjoy! 
    </AboutTxt>
  </Container>
)

export default About;