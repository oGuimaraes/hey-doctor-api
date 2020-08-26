import { darken } from 'polished';

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

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

    hr {
      border: 0;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 36px;
      background: #0c0c0ca1;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 13px;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#0c0c0ca1')};
      }
    }
  }
  > button {
    margin: 10px 0 0;
    width: 100%;
    height: 36px;
    background: #f53d6ac4;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 13px;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#f53d6ac4')};
      transition: background 0.5s;
    }
  }
`;
