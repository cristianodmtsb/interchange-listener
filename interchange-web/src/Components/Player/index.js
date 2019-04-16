import React from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./style";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import Forwardicon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = ({ player }) => {
  return (
    <Container>
      {!!player.currentSong && (
        <Sound url={player.currentSong.audio} playStatus={player.status} />
      )}
      <Current>
        <img
          src="https://images.emojiterra.com/google/android-oreo/512px/1f1fa.png"
          alt="Player"
        />
        <div>
          <span>03 Grammar Focus</span>
          <small>Unit: 01, Pg 003</small>
        </div>
      </Current>

      <Progress>
        <Controls>
          <button>
            <img src={ShuffleIcon} alt="Shuffle" />
          </button>
          <button>
            <img src={BackwardIcon} alt="Voltar" />
          </button>
          <button>
            <img src={PlayIcon} alt="Play" />
          </button>
          <button>
            <img src={Forwardicon} alt="Próximo" />
          </button>
          <button>
            <img src={RepeatIcon} alt="Repetir" />
          </button>
        </Controls>
        <Time>
          <span>1:25</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: "#404040", borderRadius: 10 }}
              trackStyle={{ background: "#1ed760" }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>3:40</span>
        </Time>
      </Progress>

      <Volume>
        <img src={VolumeIcon} alt="Volume" />
        <Slider
          railStyle={{ background: "#404040", borderRadius: 10 }}
          trackStyle={{ background: "#fff" }}
          handleStyle={{ display: "none" }}
          value={100}
        />
      </Volume>
    </Container>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      audio: PropTypes.string
    })
  }).isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
