import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { stationText, containerStyle } from './style';
import { ResultsCard } from '../../components/ResultsCard/index';

export class Results extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.reset){
      return (
        <View style={containerStyle}>
          <Text style={stationText} numberOfLines={1}>
            {this.props.station.Station}
          </Text>
          <ResultsCard bar={this.props.bars[0]} delay={200}/>
          <ResultsCard bar={this.props.bars[1]} delay={500}/>
          <ResultsCard bar={this.props.bars[2]} delay={800}/>
        </View>
      )
    }
  }
}

Results.propTypes = {
  station: PropTypes.object.isRequired,
  bars: PropTypes.array.isRequired,
  reset: PropTypes.bool.isRequired
}

export default Results;