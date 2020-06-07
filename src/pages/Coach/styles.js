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
  height: 500px;
  background: url(https://source.unsplash.com/collection/190727/500x500)
    no-repeat center center;
  object-fit: cover;
`;

export const Details = styled.div`
  padding: 32px;
`;

export const Item = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border: none;
  }

  div:nth-child(1) {
    color: #aaa;
  }
  div:nth-child(2) {
    color: #555;
    font-weight: bold;
    font-size: 18px;
  }
`;
