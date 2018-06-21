import React from 'react';
import { Main } from './pages/main/index';
import { ImageBackground, View } from 'react-native';
import { backgroundImage } from './style';

export default class App extends React.Component {
  render() {
    return (
        <ImageBackground source={require('./assets/images/tubemap.png')} style={backgroundImage}>
          <Main/>
        </ImageBackground>
    );
  }
}

