import Login from './Login';
import { connect } from 'react-redux';
import { increaseCounter } from './_actionCreator';

const mapStateToProps = state => ({
  counter: state.auth.counter,
});

const mapDispatchToProps = dispatch => ({
  increaseCounter: () => dispatch(increaseCounter()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
