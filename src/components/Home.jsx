import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setLoadingStatus } from '../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.updateStatus(false);
  }
  render() {
    return (
      <React.Fragment>
        <h2>This is the home page</h2>
        <p>121212</p>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  isLoading: PropTypes.bool,
  updateStatus: PropTypes.func
};

const mapStateToProps = state => {
  return {
    isLoading: state.loadingStatus.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStatus: e => {
      dispatch(setLoadingStatus(e));
    }
  };
};

const ConnectHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default ConnectHome;
