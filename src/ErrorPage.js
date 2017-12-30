import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class ErrorPage extends Component {
  render() {
    const { data: { loading, error } } = this.props;
    return (
      <main>
        {loading && <p>Loading…</p>}
        {error && <p style={{color: 'red'}}>{error.message}</p>}
      </main>
    );
  }
}

export default graphql(
  gql`
    query {
      wrongQuery
    }
  `
)(ErrorPage);
