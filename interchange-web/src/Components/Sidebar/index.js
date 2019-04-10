import React from "react";
import { Container, Nav, Copy } from "./style";

const Sidebar = () => {
  return (
    <Container>
      <div>
        <Nav>
          <li>
            <span>Units</span>
          </li>
          <li>
            <a href="#">Intro</a>
          </li>
          <li>
            <a href="#">Level One</a>
          </li>
          <li>
            <a href="#">Level Two</a>
          </li>
          <li>
            <a href="#">Level Three</a>
          </li>
        </Nav>
      </div>
      <Copy>
        Criado por:{" "}
        <a href="https://cristianocastro.net" target="_blank">
          Cristiano Castro
        </a>
      </Copy>
    </Container>
  );
};

export default Sidebar;
