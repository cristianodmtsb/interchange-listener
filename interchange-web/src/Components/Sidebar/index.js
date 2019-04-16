import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../Store/Ducks/playlists";

import { Container, Nav, Copy } from "./style";

import Loading from "../Loading";

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
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
        <div>
          <Nav>
            <li>
              <h4>
                <Link to="/">Home</Link>
              </h4>
            </li>
            <li>
              <h4>BOOKS {this.props.playlists.loading && <Loading />}</h4>
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/books/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
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
  }
}

const mapStateToProps = state => ({ playlists: state.playlists });

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
