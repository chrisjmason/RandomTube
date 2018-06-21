import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Zone } from './Zone/index';
import PropTypes from 'prop-types';

export class ZoneChooser extends Component{

  constructor(props){
    super(props);

    this.zones = [
      {
        number: 1,
        selected: false
      },
      {
        number: 2,
        selected: false
      },
      {
        number: 3,
        selected:false
      },
      {
        number: 4,
        selected:false
      },
      {
        number: 5,
        selected:false
      }
    ];

    this.state = {
      zones: this.zones
    };

    this.onZoneChosen = this.onZoneChosen.bind(this);
  }
  
  onZoneChosen(number){
    const chosenZone = this.zones[number-1];
    chosenZone.selected = !chosenZone.selected;
    this.setState({ zone: this.zones } );
    this.props.onZonesChosen(this.zones.filter(zone => zone.selected))
  }

  render(){
    return(
      <View style={{flex: 1, flexDirection: 'row', marginRight:20, marginLeft:20}}>
        {this.state.zones.map(zone => {
          return <Zone number={zone.number} key={zone.number} isSelected={zone.selected} onClick={this.onZoneChosen}/>
        })}
      </View>
    )
  }
}

ZoneChooser.propTypes = {
  onZonesChosen: PropTypes.func.isRequired
};