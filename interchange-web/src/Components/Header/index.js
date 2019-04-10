import React from "react";

import { Container, Search, User } from "./style";

const Header = () => {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Pesquisar..." />
      </Search>
      <User>
        <img
          src="https://avatars3.githubusercontent.com/u/8363039?v=4"
          alt="Cristiano Castro"
        />
        Cristiano Castro
      </User>
    </Container>
  );
};

export default Header;
