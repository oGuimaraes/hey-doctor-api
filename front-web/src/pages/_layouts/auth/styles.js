import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    color: #fff;
    width: 120px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  span {
    color: #ff9494;
    align-self: flex-start;
    margin: 0 0 10px;
    font-size: 12px;
  }

  button {
    margin: 5px 0 0;
    height: 32px;
    background: #0c0c0ca1;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#0c0c0ca1')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 13px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
