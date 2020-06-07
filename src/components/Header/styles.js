import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 32px;

  background: white;
  text-align: center;
  a {
    color: #777;
    font-size: 22px;
    line-height: 32px;
    margin: 0 16px;
    text-decoration: none;
    position: relative;

    &:hover {
      color: #50fa7b;
      transition: color 200ms;

      &::after {
        content: '';
        width: 100%;
        transition: width 200ms ease-in-out;
      }
    }
    &::after {
      content: '';
      width: 0;
      height: 2px;
      background-color: #7159c1;
      position: absolute;
      left: 0;
      bottom: -4px;
    }
  }
  .active {
    font-weight: bold;
    color: #7159c1;
  }
`;
