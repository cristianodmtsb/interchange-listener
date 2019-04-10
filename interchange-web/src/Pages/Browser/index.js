import React from "react";

import { Container, Title, List, PlayList } from "./styles";

const Browse = () => (
  <Container>
    <Title>Select your level</Title>
    <List>
      <PlayList to="/playlists/1">
        <img
          src="https://images.emojiterra.com/google/android-oreo/512px/1f1fa.png"
          alt="Player"
        />
        <strong>Interchange Fourth Edition Intro Class Audio</strong>
        <p>
          The Interchange Fourth Edition Intro Class Audio, prepared for your
          portable media player.
        </p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://images.emojiterra.com/google/android-oreo/512px/1f1fa.png"
          alt="Player"
        />
        <strong>Interchange Fourth Edition Intro Class Audio</strong>
        <p>
          The Interchange Fourth Edition Intro Class Audio, prepared for your
          portable media player.
        </p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://images.emojiterra.com/google/android-oreo/512px/1f1fa.png"
          alt="Player"
        />
        <strong>Interchange Fourth Edition Intro Class Audio</strong>
        <p>
          The Interchange Fourth Edition Intro Class Audio, prepared for your
          portable media player.
        </p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://images.emojiterra.com/google/android-oreo/512px/1f1fa.png"
          alt="Player"
        />
        <strong>Interchange Fourth Edition Intro Class Audio</strong>
        <p>
          The Interchange Fourth Edition Intro Class Audio, prepared for your
          portable media player.
        </p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
