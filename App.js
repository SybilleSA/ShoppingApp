import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './app/components/header';
import Banner from './app/components/banner';
import ContentContainer from './app/components/ContentContainer';

export default class App extends React.Component{
  render() {
    return (
      <ScrollView 
        style={styles.ScrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Header />
        <Banner />
        <ContentContainer/>
      </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
