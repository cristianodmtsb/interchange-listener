import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./Config/reactotron";
import Sidebar from "./Components/Sidebar";
import Player from "./Components/Player";
import Header from "./Components/Header";
import ErrorBox from "./Components/ErrorBox";
import Routes from "./Routes";
import store from "./Store";
import "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <Container>
              <Sidebar />
              <Content>
                <ErrorBox />
                <Header />
                <Routes />
              </Content>
            </Container>
            <Player />
          </Wrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
