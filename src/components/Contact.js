import React from 'react';
import { Image, Icon, Grid, Container } from 'semantic-ui-react';
import { PgTitle, Ig, Yt, SocialTitle, SocialSubTitle } from '../styledComponents/homeStyles';
import ContactForm from './ContactForm';

const Contact = () => (
  <Container>
    <Image 
      src='https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png' 
      size='medium' 
      circular 
      centered
    />
    <PgTitle>Contact</PgTitle>
    <Grid 
      columns={2} 
      stackable 
      divided 
      textAlign='center'
      verticalAlign='middle'
    >
      <Grid.Column>
        <SocialTitle>Social Media</SocialTitle>
        <SocialSubTitle>Follow me for updates!</SocialSubTitle>
        <a href="https://twitter.com/nightwing819" target='_blank' rel="noopener noreferrer">
          <Icon 
            name='twitter' 
            size='huge' 
            link 
            color='blue'
          />
        </a>
        <a href="https://www.youtube.com/user/SuperSexyboy911" target='_blank' rel="noopener noreferrer">
          <Yt 
            name='youtube' 
            size='huge' 
            link 
          />
        </a>
        <a href="https://www.instagram.com/hdcoding/" target='_blank' rel="noopener noreferrer">
          <Ig 
            name='instagram' 
            size='huge' 
            link 
          />
        </a>
      </Grid.Column>
      <Grid.Column>
      <SocialTitle>Got A Message?</SocialTitle>
        <SocialSubTitle>Fill out below!</SocialSubTitle>
        <ContactForm />
      </Grid.Column>
    </Grid>
  </Container>
)

export default Contact;