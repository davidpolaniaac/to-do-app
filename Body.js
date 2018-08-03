import React, { Component } from 'react';
import {
  View, StyleSheet, FlatList, ActivityIndicator,
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
        {this.props.appLoad && <ActivityIndicator size="large" color="#640064" />}
        {!this.props.appLoad && (
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <Task item={item} deleteTask={this.props.deleteTask} />
          )}
        />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#98FB98',
  },
});
