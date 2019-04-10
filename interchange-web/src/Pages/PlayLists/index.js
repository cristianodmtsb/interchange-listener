import React from "react";

import { Container, Header, AudioList } from "./styles";
import ClockIcon from "../../assets/images/clock.svg";
import PlayIcon from "../../assets/images/play.svg";

const PlayLists = () => (
  <Container>
    <Header>
      <img
        src="https://images.emojiterra.com/google/android-oreo/512px/1f1fa.png"
        alt="Player"
      />
      <div>
        <span>PlayList</span>
        <h1>Interchange Fourth Edition Intro Class Audio</h1>
        <p>
          The Interchange Fourth Edition Intro Class Audio, prepared for your
          portable media player.
        </p>
        <button>PLAY</button>
      </div>
    </Header>

    <AudioList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Exercise</th>
        <th>Page</th>
        <th>
          <img src={ClockIcon} alt="Duration" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlayIcon} alt="Play" />
          </td>
          <td>01 Conversation Pt A</td>
          <td>002</td>
          <td>0:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlayIcon} alt="Play" />
          </td>
          <td>01 Conversation Pt A</td>
          <td>002</td>
          <td>0:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlayIcon} alt="Play" />
          </td>
          <td>01 Conversation Pt A</td>
          <td>002</td>
          <td>0:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlayIcon} alt="Play" />
          </td>
          <td>01 Conversation Pt A</td>
          <td>002</td>
          <td>0:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlayIcon} alt="Play" />
          </td>
          <td>01 Conversation Pt A</td>
          <td>002</td>
          <td>0:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlayIcon} alt="Play" />
          </td>
          <td>01 Conversation Pt A</td>
          <td>002</td>
          <td>0:45</td>
        </tr>
        <tr>
          <td>
            <img src={PlayIcon} alt="Play" />
          </td>
          <td>01 Conversation Pt A</td>
          <td>002</td>
          <td>0:45</td>
        </tr>
      </tbody>
    </AudioList>
  </Container>
);

export default PlayLists;
