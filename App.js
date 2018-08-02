import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { task: [], text: '' };
  }

  changeText = (value) => {
    this.setState({ text: value });
  }

  addTask = () => {
    this.setState({
      task: [...this.state.task, { text: this.state.text, key: Date.now().toString() }],
      text: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header changeText={this.changeText} addTask={this.addTask} text={this.state.text} />
        <Body data={this.state.task} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EB90',
  },
});
