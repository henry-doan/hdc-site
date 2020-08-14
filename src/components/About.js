import React from 'react';
import { Image, Container, Header } from 'semantic-ui-react';
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
    My name Henry Doan I am the fastest coder alive 💻! ... well, I'm getting there. But welcome to my YouTube videos page, an ongoing project to showcase my latest programming concepts and tutorials. I started to make videos as a resource with a twist of explaining things. A bit about me is that I have taken quite a few programming classes and got some certificates and degrees 🎓 but the most that I ever learn and grew was by attending a coding boot camp 🥾 from DevPoint Labs where I got to found my calling in web development and education and ended up working for them for a few years up until now, developing projects and teaching classes. With all my knowledge and experience 🧠, I am now proficient to create content to share my knowledge with the world 🌎! 
    <br />
    Enjoy! 
    </AboutTxt>
  </Container>
)

export default About;