import React, { Component } from 'react';
import { StationChooser } from '../../containers/StationChooser/index';
import { Results } from '../../containers/Results/index';
import { View } from 'react-native';
import { MainContainer } from './style';
import { getPlaces } from '../../services/getPlacesServices';
import { getDistance } from '../../helpers/distanceHelper';
import { Popup } from 'react-native-map-link';

export class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      station: {},
      bars: [],
      clearResults: true,
      modalVisible:false
    };

    this.onStationChosen = this.onStationChosen.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  onStationChosen(station){
    this.setState({clearResults:true});
    getPlaces(station)
      .then(res => {
        this.setState({bars: this.getBarList(res.results, station)});
        this.setState({station: station});
        this.setState({clearResults:false});
      })
      .catch(err => console.log("error", err));
  }

  getBarList(results, station){
    const shortList = results.slice(0,3);
    const listWithDistance = [];

    shortList.forEach(bar => {
      const distance = getDistance(bar.geometry.location.lat, bar.geometry.location.lng, station.Latitude, station.Longitude);
      bar.distanceTo = distance
      listWithDistance.push(bar);
    })

    return listWithDistance;
  }

  showModal(){
    this.setState({modalVisible: true})
  }

  render(){
    return (
      <View style={ MainContainer }>
        <StationChooser onStationChosen={this.onStationChosen}/>
        { this.state.station.Station ? <Results showModal={this.showModal} station={this.state.station} bars={this.state.bars} clearResults={this.state.clearResults}/>: null}
        <Popup
          isVisible={this.state.modalVisible}
          onCancelPressed={() => this.setState({ modalVisible: false })}
          onAppPressed={() => this.setState({ modalVisible: false })}
          onBackButtonPressed={() => this.setState({ modalVisible: false })}
          modalProps={{ // you can put all react-native-modal props inside.
            animationIn: 'slideInUp'
          }}
          appsWhiteList={['google-maps']}
          options={{latitude: this.state.station.Latitude, longitude:this.state.station.Longitude}}
        />
      </View>
    )
  }
}