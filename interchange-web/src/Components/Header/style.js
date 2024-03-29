import styled from "styled-components";
import Searchicon from "../../assets/images/search.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 26px;
  background: #fff url(${Searchicon}) no-repeat 7px center;
  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
    background: none;
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  color: #b3b3b3;
  font-size: 13px;
  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
