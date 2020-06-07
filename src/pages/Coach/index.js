import React from 'react';

import { Container, Avatar, Details, Item } from './styles';

function Coach() {
  return (
    <Container>
      <Avatar />
      <Details>
        <h3> Details </h3>
        <Item>
          <div>Instructor</div>
          <div>Joao</div>
        </Item>
        <Item>
          <div>Age</div>
          <div>28</div>
        </Item>
        <Item>
          <div>Gender</div>
          <div>M</div>
        </Item>
        <Item>
          <div>Duties</div>
          <Item>
            <span>Crossfit</span>
            <span>Spinning</span>
          </Item>
        </Item>
        <Item>
          <div>Since</div>
          <div>01/01/2019</div>
        </Item>
      </Details>
    </Container>
  );
}

export default Coach;
