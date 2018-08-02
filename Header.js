import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hola</Text>
        <TextInput style={styles.input} placeholder="Ingresa la nueva tarea" value={this.props.text} onChangeText={this.props.changeText} onSubmitEditing={this.props.addTask} />
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
