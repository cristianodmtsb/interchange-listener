import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../Store/Ducks/playlists";

import { Container, Title, List, PlayList } from "./styles";

import Loading from "../../Components/Loading";

class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          image: PropTypes.string,
          subtitle: PropTypes.string
        })
      ),
      Loading: PropTypes.bool
    }).isRequired
  };
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <Title>
          Select your level {this.props.playlists.loading && <Loading />}
        </Title>
        <List>
          {this.props.playlists.data.map(playlist => (
            <PlayList key={playlist.id} to={`/books/${playlist.id}`}>
              <img
                src="https://images.emojiterra.com/google/android-oreo/512px/1f1fa.png"
                alt={playlist.title}
              />
              <strong>{playlist.title}</strong>
              <p>{playlist.subtitle}</p>
            </PlayList>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ playlists: state.playlists });

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
