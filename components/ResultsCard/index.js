import React, { Component } from 'react';
import { Animated, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { animatedContainerStyle, innerContainerStyle } from './style';
import PropTypes from 'prop-types';
import { container, iconStyle, barNameStyle, imageWrapperStyle, ratingStyle, textWrapperStyle, touchableHighlightStyle} from './style';``
import { openMap } from 'react-native-open-map';

export class ResultsCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
    };

    this.openMap = this.openMap.bind(this);
  };

  componentDidMount(){
    Animated.timing(this.state.opacity,
      {
        toValue: 1,
        duration: 250,
        delay: this.props.delay
      }
    ).start();
  }

  openMap(){
    openMap({
      latitude: this.props.bar.geometry.location.lat,
      longitude: this.props.bar.geometry.location.lng,
      title: this.props.bar.name,
      cancelText: 'Close',
    });
  }

  render(){
    return(

      <Animated.View style={[{opacity: this.state.opacity}, animatedContainerStyle]}>
        <TouchableWithoutFeedback style={touchableHighlightStyle} onPress={this.openMap}>
        <View style={innerContainerStyle}>
          <View style={imageWrapperStyle}>
            <Image style={iconStyle} source={require('../../assets/images/cocktail.png')}></Image>
          </View>

          <View style={textWrapperStyle}>
            <Text style={barNameStyle} numberOfLines={1} ellipsizeMode='tail'>{this.props.bar.name} ({Math.round(this.props.bar.distanceTo * 100) / 100}km)</Text>
            <Text style={ratingStyle}>Rating: {this.props.bar.rating}</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Animated.View>

    )
  }
}

ResultsCard.propTypes = {
  bar: PropTypes.object.isRequired,
  delay: PropTypes.number,
  showModal: PropTypes.func.isRequired
};

ResultsCard.defaultProps = {
  delay: 0
}

export default ResultsCard;