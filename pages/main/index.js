import React, { Component } from 'react';
import { StationChooser } from '../../containers/StationChooser/index';
import { Results } from '../../containers/Results/index';
import { View } from 'react-native';
import { MainContainer } from './style';
import { getPlaces } from '../../services/getPlacesServices';
import { getDistance } from '../../helpers/distanceHelper';

export class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      station: {},
      bars: []
    };

    this.onStationChosen = this.onStationChosen.bind(this);
  }

  onStationChosen(station){
    getPlaces(station)
      .then(res => {
        this.setState({bars: this.getBarList(res.results, station)});
        this.setState({station: station});
        console.log("bars", res.results);
      })
      .catch(err => console.log("error", err));
  }

  getBarList(results, station){
    const shortList = results.slice(0,3);
    const listWithDistance = [];

    shortList.forEach(bar => {
      console.log("station", this.state.station.Latitude);
      const distance = getDistance(bar.geometry.location.lat, bar.geometry.location.lng, station.Latitude, station.Longitude);
      bar[distance] = distance
      listWithDistance.push(bar);
    })

    return listWithDistance;
  }

  render(){
    return (
      <View style={ MainContainer }>
        <StationChooser onStationChosen={this.onStationChosen}/>
        { this.state.station.Station ? <Results station={this.state.station} bars={this.state.bars}/>: null}
      </View>
    )
  }
}