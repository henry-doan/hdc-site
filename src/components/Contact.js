import React from 'react';
import { Image } from 'semantic-ui-react';
import { PgTitle } from '../styledComponents/homeStyles';
import ContactForm from './ContactForm';

const Contact = () => (
  <>
    <Image 
      src='https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png' 
      size='medium' 
      circular 
      centered
    />
    <PgTitle>Coming Soon!</PgTitle>
    <h1>Social Media</h1>
    <Icon name='twitter' />
    <Icon name='youtube' />
    <Icon name='instagram' />
    <hr />
    <ContactForm />
  </>
)

export default Contact;