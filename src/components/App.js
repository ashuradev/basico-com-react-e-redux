import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateMessage } from '../actions';

class App extends React.Component {
  render() {
    const { message, updateMessage } = this.props;

    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Digite algo aqui"
          onChange={(e) => updateMessage(e.target.value)}
        />

        <h1>Você digitou: {message}</h1>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => ({
  message: store.message
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateMessage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);