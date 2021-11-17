import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image} from 'react-native';

export default class Banner extends React.Component {
    render() {
        return (
           <Image source={require('../images/logo5.png')}
            style={styles.banner}>
            </Image>
        );
    }
}
  

const styles = StyleSheet.create({
    banner:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
 
});
