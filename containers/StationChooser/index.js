import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ContainerStyle, TitleStyle } from './style';
import { ZoneChooser } from '../../components/ZoneChooser/index';
import { GoButton } from '../../components/GoButton/index';
import { getRandomStation } from '../../helpers/randomStationHelper';
import PropTypes from 'prop-types';

export class StationChooser extends Component{
  constructor(props){
    super(props);
    this.state = {
      buttonText: 'Go!',
      zones: []
    };
    this.onButtonPressed = this.onButtonPressed.bind(this);
    this.onZonesChosen = this.onZonesChosen.bind(this);
  }

  onButtonPressed(){
    this.setState({buttonText:"Try again!"});
    const stationChosen = getRandomStation(this.state.zones);
    console.log("chosen station", stationChosen);
    this.props.onStationChosen(stationChosen);
  }

  onZonesChosen(zones){
    this.setState({zones: zones})
  }

  render(){
    return (
      <View style={ContainerStyle}>
        <Text style={TitleStyle}>Which Zones?</Text>
        <ZoneChooser onZonesChosen={this.onZonesChosen}/>
        <GoButton buttonText={this.state.buttonText} onClick={this.onButtonPressed}/>
      </View>
    )
  }
}

StationChooser.propTypes = {
  onStationChosen: PropTypes.func.isRequired
};

export default StationChooser;