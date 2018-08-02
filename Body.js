import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import Task from './Task';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> List </Text>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <Task item={item.text} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
