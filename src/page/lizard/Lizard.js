import React from 'react';

import {Image} from 'react-native';
import {styles} from './styles.js';

import Header from '../../component/header';
import {lizard} from '../../../images';

const Lizard = () => {
  return (
    <>
      <Header title="Harry the Wizard Lizard" />
      <Image source={lizard} style={styles.lizard} />
    </>
  );
};

export default Lizard;
