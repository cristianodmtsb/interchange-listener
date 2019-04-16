import styled from "styled-components";

import { Spinner } from "../../Components/Loading/styles";

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    color: #444;
  }
  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: 700;
      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
    ${Spinner} {
      height: 15px;
      margin-left: 5px;
    }
    h4 a {
      font-size: 18px;
      text-transform: uppercase;
      padding: 10px 0;
      display: block;
    }
  }
`;

export const Copy = styled.div`
  background: rgba(255, 255, 255, 0.02);
  padding: 0;
  font-size: 11px;
  a {
    text-decoration: none;
    &:hover {
      color: #ccc;
    }
  }
`;
