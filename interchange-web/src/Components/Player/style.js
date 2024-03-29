import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  background: #282828;
  color: #b3b3b3;
  padding: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Current = styled.div`
  min-width: 215px;
  display: flex;
  align-items: center;
  img {
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  }
  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    span {
      font-size: 13px;
      color: #fff;
    }
    small {
      font-size: 11px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;
  img {
    margin-right: 5px;
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    margin: 0 15px;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  span {
    font-size: 11px;
    color: #b3b3b3;
  }
`;
export const ProgressSlider = styled.div`
  width: 410px;
  margin: 0 15px;
`;
