import React from 'react';
import { Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import { zone, text, selected } from './style';
import { colours } from '../../../constants/styles';

export const Zone = ({number, isSelected, onClick}) => (
    <TouchableHighlight underlayColor={colours.yellow}
                        onPress={() => onClick(number)}
                        style={[zone, checkSelected(isSelected)]}>
      <Text style={text}>{number}</Text>
    </TouchableHighlight>
);

const checkSelected = (isSelected) => isSelected ? selected : null;

Zone.propTypes = {
  number: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Zone;