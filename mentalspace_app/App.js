import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Flex = () => {
  return (
    
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
    
    <View style={{ flex: 1, backgroundColor: "red"}}
    /><Text>Mental Space</Text>
    <View style={{ flex: 2, backgroundColor: "darkorange"}}/>
    <View style={{ flex: 3, backgroundColor: "green"}}/>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Flex;