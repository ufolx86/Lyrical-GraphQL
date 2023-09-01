import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item"check>
          {song.title}
        </li>
      );
    });
  }

  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return <ul className="collection">{this.renderSongs()}</ul>;
  }
}

// GRAPHQL CALL RETURNS A FUNCTION THAT IS IMMEDIATELY INVOCATED BY SECOND SET OF PARENTHESIS
export default graphql(query)(SongList);
