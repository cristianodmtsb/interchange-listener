import styled, { css } from "styled-components";

import { Spinner } from "../../Components/Loading/styles";

export const Container = styled.div`
  margin-top: 30px;
  overflow: auto;

  ${Spinner} {
    height: 48px;
  }

  ${props =>
    props.loading &&
    css`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 250px;
    height: auto;
    background: #fff;
    border-radius: 4px;
  }
  div {
    margin-left: 20px;
    span {
      font-size: 11px;
      letter-spacing: 1.11px;
      font-weight: 300;
      text-transform: uppercase;
    }
    h1 {
      margin-top: 10px;
      font-size: 38px;
    }
    p {
      margin-top: 10px;
      color: #b3b3b3;
      font-size: 14px;
      letter-spacing: 1.11px;
    }
    button {
      background: #1db854;
      height: 32px;
      border-radius: 16px;
      color: #fff;
      line-height: 32px;
      padding: 0 36px;
      border: 0;
      margin-top: 10px;
      font-size: 12px;
      letter-spacing: 1.11px;
      cursor: pointer;
    }
  }
`;

export const AudioList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  thead th {
    font-size: 11px;
    color: #b3b3b3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;
    &:last-child {
      text-align: right;
    }
  }
`;

export const SongItem = styled.tr`
  td {
    border-top: 1px solid #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;
    background: ${props =>
      props.selected ? "rgba(0, 0, 0, 0.2)" : "transparent"};
    color: ${props => (props.playing ? "#1ed760" : "#ffffff")};
    &:first-child {
      width: 80px;
      text-align: right;
      padding: 15px 0 0 0;
    }
    &:last-child {
      text-align: right;
    }
  }
  &:hover td {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const PlayIconPlay = styled.img`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
