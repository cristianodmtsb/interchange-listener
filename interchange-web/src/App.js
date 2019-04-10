import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Player from "./Components/Player";
import Header from "./Components/Header";
import Routes from "./Routes";
import "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
