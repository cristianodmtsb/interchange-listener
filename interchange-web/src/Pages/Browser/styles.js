import styled from "styled-components";

import { Link } from "react-router-dom";

import { Spinner } from "../../Components/Loading/styles";

export const Container = styled.div`
  flex: 1;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 48px;
  display: flex;
  align-items: center;

  ${Spinner} {
    height: 25px;
    margin-left: 15px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const PlayList = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  img {
    width: 250px;
    height: auto;
    background: #fff;
    border-radius: 4px;
  }
  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }
  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
  &:hover img {
    opacity: 0.8;
  }

  &:first-child {
    margin: 0;
  }
`;
