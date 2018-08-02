import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Task </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});
