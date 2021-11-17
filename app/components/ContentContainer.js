import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Products from './Products';

export default class ContentContainer extends React.Component {
    render() {
        return (
            <View style={styles.contentContainer}>

                <View style={styles.product1}>
                    <Products imageSource={require('../images/pencilset2.png')}
                    />
                </View>

                <View style={styles.product2}></View>
                    <Products imageSource={require('../images/pencilset1.png')}
                    />

                <View style={styles.product4}></View>
                <Products imageSource={require('../images/penset1.png')}
                    />

                <View style={styles.product5}></View>
                <Products imageSource={require('../images/penset2.png')}
                    />

                <View style={styles.product6}></View>
                <Products imageSource={require('../images/notebook2.png')}
                    />

                <View style={styles.product7}></View>
                <Products imageSource={require('../images/pinkpencilcase.png')}
                    />

                <View style={styles.product8}></View>
                <Products imageSource={require('../images/gelpenset1.png')}
                    />

                <View style={styles.product9}></View>
                <Products imageSource={require('../images/sharpiegelpens.png')}
                    />

                <View style={styles.product10}></View>
                <Products imageSource={require('../images/journal1.png')}
                    />

                <View style={styles.product11}></View>
                <Products imageSource={require('../images/journal2.png')}
                    />

                <View style={styles.product12}></View>
                <Products imageSource={require('../images/journal3.png')}
                    />

                <View style={styles.product13}></View>
                <Products imageSource={require('../images/notebook1.png')}
                    />

            </View>
            
        );
    }
}
  

const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: 3,
    },
    product1: {
        flex: 3,
        padding: 3,
    },
    product2: {
        flex: 3,
        padding: 3,
    },
    product4: {
        flex: 3,
        padding: 3,
    },

    product5: {
        flex: 3,
        padding: 3,
    },
    product6: {
        flex: 3,
        padding: 3,
    },
    product7: {
        flex: 3,
        padding: 3,
    },
    product8: {
        flex: 3,
        padding: 3,
    },
    product9: {
        flex: 3,
        padding: 3,
    },
    product10:{
        flex: 3,
        padding: 3,
    },
    product11: {
        flex: 3,
        padding: 3,
    },
    product12: {
        flex: 3,
        padding: 3,
    },
    product13: {
        flex: 3,
        padding: 3,
    }
  
});
