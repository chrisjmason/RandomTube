import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { colours } from '../../constants/styles';
import { goButton, textStyle } from './style';

export const GoButton = ({buttonText, onClick}) => (
  <TouchableHighlight onPress={() => onClick()} underlayColor={colours.orange} style={goButton}>
    <Text style={textStyle}>{buttonText}</Text>
  </TouchableHighlight>
);

GoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default GoButton;