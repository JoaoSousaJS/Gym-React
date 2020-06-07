import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/" className="active">
        Instructors
      </Link>
      <Link to="/members"> Members</Link>
    </Container>
  );
}

export default Header;
