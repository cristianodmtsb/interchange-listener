import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../Store/Ducks/playlistDetails";
import { Creators as PlayerActions } from "../../Store/Ducks/player";

import { Container, Header, AudioList, SongItem } from "./styles";
import Loading from "../../Components/Loading";
import ClockIcon from "../../assets/images/clock.svg";
import PlayIcon from "../../assets/images/play.svg";

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number
      })
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        exercises: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            ex: PropTypes.string,
            unit: PropTypes.number,
            pg: PropTypes.number
          })
        )
      }),
      loading: PropTypes.bool
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.string
    }).isRequired
  };

  state = {
    selectedSong: null
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;

    return (
      <Container>
        <Header>
          <img
            src="https://images.emojiterra.com/google/android-oreo/512px/1f1fa.png"
            alt={playlist.title}
          />
          <div>
            <span>PlayList</span>
            <h1>{playlist.title}</h1>
            <p>{playlist.description}</p>
            <button>PLAY</button>
          </div>
        </Header>

        <AudioList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Exercise</th>
            <th>Unit</th>
            <th>Page</th>
            <th>
              <img src={ClockIcon} alt="Duration" />
            </th>
          </thead>
          <tbody>
            {!playlist.exercises ? (
              <tr>
                <td colSpan={5}>Sem exercicios</td>
              </tr>
            ) : (
              playlist.exercises.map(exercise => (
                <SongItem
                  key={exercise.id}
                  onClick={() => this.setState({ selectedSong: exercise.id })}
                  onDoubleClick={() => this.props.loadSong(exercise)}
                  selected={this.state.selectedSong === exercise.id}
                  playing={
                    this.props.currentSong &&
                    this.props.currentSong.id === exercise.id
                  }
                >
                  <td>
                    <img src={PlayIcon} alt="Play" />
                  </td>
                  <td>{exercise.ex}</td>
                  <td>{exercise.unit}</td>
                  <td>{exercise.pg}</td>
                  <td>0:45</td>
                </SongItem>
              ))
            )}
          </tbody>
        </AudioList>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
