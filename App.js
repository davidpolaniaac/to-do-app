import React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { task: [], text: '', appLoad: true };
  }

  changeText = (value) => {
    this.setState({ text: value });
  }

  addTask = () => {
    const newTasks = [...this.state.task, { text: this.state.text, key: Date.now().toString() }];
    this.saveData(newTasks);
    this.setState({
      task: newTasks,
      text: '',
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.task.filter(task => task.key !== id);
    this.saveData(newTasks);
    this.setState({
      task: newTasks,
    });
  }

  saveData= (tasks) => {
    AsyncStorage.setItem('@to-do-app:tasks', JSON.stringify(tasks));
  }

  recoverData = () => {
    AsyncStorage.getItem('@to-do-app:tasks').then((value) => {
      this.setState({
        appLoad: false,
      });
      if (value !== null) {
        const newTasks = JSON.parse(value);
        this.setState({
          task: newTasks,
        });
      }
    }).catch(this.setState({
      appLoad: false,
    }));
  }

  componentDidMount() {
    this.recoverData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header changeText={this.changeText} addTask={this.addTask} text={this.state.text} />
        <Body data={this.state.task} deleteTask={this.deleteTask} appLoad={this.state.appLoad} />
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
