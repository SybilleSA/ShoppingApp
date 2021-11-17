import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image} from 'react-native';

export default class Products extends React.Component {
    render() {
        return (
           <Image source={this.props.imageSource}
            style={styles.image}>
            </Image>
        );
    }
}
  

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
