import React from 'react';

import { ImageBackground } from 'react-native';

import Header from '../../component/header';
import {styles} from './styles.js';
import {snakeSkin} from '../../../images';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={snakeSkin}
      style={{width: '100%', height: '100%', flex: 1}}>
      <Header title="Habi" style={styles.splashTitle} />
    </ImageBackground>
  );
};

export default SplashScreen;
