import React from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlayerActions } from "../../Store/Ducks/player";

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

const Player = ({ player, play, pause }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.audio} playStatus={player.status} />
    )}

    <Current>
      {!!player.currentSong && (
        <>
          <img
            src="https://images.emojiterra.com/google/android-oreo/512px/1f1fa.png"
            alt={player.currentSong.ex}
          />
          <div>
            <span>{player.currentSong.ex}</span>
            <small>
              Pg {player.currentSong.pg}, Unit: {player.currentSong.unit}
            </small>
          </div>
        </>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Voltar" />
        </button>
        {!!play.currentSong && play.status === Sound.status.PLAYING ? (
          <button onClick={pause}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button onClick={this.play}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}

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

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      audio: PropTypes.string,
      ex: PropTypes.string,
      unit: PropTypes.number,
      pg: PropTypes.number
    })
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
