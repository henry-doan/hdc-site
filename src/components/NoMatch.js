import React from 'react';
import { Link } from 'react-router-dom';
import { PgTitle, NoMatchLogo } from '../styledComponents/homeStyles';

const NoMatch = () => (
  <>
    <NoMatchLogo
      src='https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png' 
      size='medium' 
      circular 
      centered
    />
    <PgTitle>
      404 
      <br />
      Page Not Found
      <br />
      <Link to='/'>
        Return Home
      </Link>
    </PgTitle> 
  </>
)

export default NoMatch;