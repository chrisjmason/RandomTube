import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import { stationText, containerStyle, postcodeText } from './style';
import { ResultsCard } from '../../components/ResultsCard/index';

export class Results extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.clearResults){
      return (
        <ScrollView>
        <View style={containerStyle}>
          <Text style={stationText} numberOfLines={1}>
            {this.props.station.Station}
          </Text>
          <Text style={postcodeText}>
            {this.props.station.Postcode.split(" ")[0]}
          </Text>
          <ResultsCard showModal={this.props.showModal} bar={this.props.bars[0]} delay={200}/>
          <ResultsCard showModal={this.props.showModal} bar={this.props.bars[1]} delay={500}/>
          <ResultsCard showModal={this.props.showModal} bar={this.props.bars[2]} delay={800}/>
        </View>
        </ScrollView>
      )
    }else{
      return null;
    }
  }
}

Results.propTypes = {
  station: PropTypes.object.isRequired,
  bars: PropTypes.array.isRequired,
  clearResults: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired
}

export default Results;