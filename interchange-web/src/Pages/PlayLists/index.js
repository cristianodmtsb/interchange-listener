import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsDetailsActions } from "../../Store/Ducks/playlistDetails";
import { Creators as ChapterListsActions } from "../../Store/Ducks/chapterList";

import { Container, Header, AudioList } from "./styles";

import Loading from "../../Components/Loading";

class Playlist extends Component {
  componentDidMount() {
    this.props.getPlaylistDetailsRequest(this.props.match.params);
    this.props.getChapterListRequest();
  }

  renderDetails = () => {
    const playlist = this.props.playlists.data;
    console.log("playlist data:", playlist);

    return (
      <Container>
        <Header>
          <img src={playlist.image} alt={playlist.title} />
          <div>
            <span>PlayList</span>
            <h1>{playlist.title}</h1>
            <p>{playlist.description}</p>
          </div>
        </Header>

        <AudioList cellPadding={0} cellSpacing={0}>
          <h2>Chapter List</h2>
          <tbody>
            {!playlist.exercises ? (
              <div>No chapters to listing</div>
            ) : (
              playlist.exercises.map(exercise => (
                <Link
                  to={`/books/${playlist.id}/unit/${playlist.unit}`}
                  key={exercise.unit}
                >
                  Unit {exercise.unit}
                </Link>
              ))
            )}
          </tbody>
        </AudioList>
      </Container>
    );
  };

  render() {
    // {this.props.playlists.loading && <Loading />}
    return this.props.playlists.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
  unit: state.units
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsDetailsActions, ChapterListsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
