import styled, { keyframes } from 'styled-components';

const up = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  background-color: white;
  width: 800px;
  min-height: 400px;
  margin: 45px auto;
  /* grud */
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* shadow */
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.4);

  /* animation */

  animation-name: ${up};
  animation-duration: 200ms;
  animation-timing-function: ease-out;
`;

export const Avatar = styled.div`
  width: 400px;
  min-height: 400px;
  background: url(https://source.unsplash.com/collection/9785920/600x600)
    no-repeat center center;
  object-fit: cover;
`;

export const Details = styled.div`
  padding: 32px;

  h3 {
    font-size: 14px;
    line-height: 24px;
    color: #7159c1;
    letter-spacing: 0.7px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const Item = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border: none;
  }

  div:nth-child(1) {
    font-size: 14px;
    line-height: 24px;
    color: #777;
    letter-spacing: 0.7px;
    font-weight: normal;
  }
  div:nth-child(2) {
    color: #555;
    font-weight: bold;
    font-size: 18px;
  }

  span {
    padding: 8px 16px;
    background-color: #f7df1e;
    border-radius: 16px;
    color: #777;
    margin-right: 4px;
    margin-top: 8px;
    display: inline-block;
    text-transform: uppercase;
    font-size: 12px;
  }
`;
