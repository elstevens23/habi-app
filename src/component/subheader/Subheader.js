import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles.js';

const Subheader = (props) => {
    return (
        <View>
            <Text style={styles.headerStyle}>{props.title}</Text>
        </View>
    );
};

export default Subheader;
