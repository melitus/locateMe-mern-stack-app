import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getGeolocation from '../actions/location_action';


class Location extends React.Component {

  componentDidMount() {
    this.props.onGelocation();
  }
  render() {
    return (
      <div>
        <div>Latitude is: <span>{this.props.location.latitude}</span></div>
        <div>Longitude is: <span>{this.props.location.longitude}</span></div>
      </div>
    );
  }
}


 // THe state here is the one set in the reducer .is from the store.not from the container.
const mapStateToProps = state =>
  // Location refers to the property name set in the reducer
   ({ location: state.location });

const mapDispatchToProps = dispatch => ({
  onGelocation: bindActionCreators(getGeolocation, dispatch)
});


// Here connect give LOcation component conatiner access to the state
export default connect(mapStateToProps, mapDispatchToProps)(Location);
