import React from 'react';
import './App.css';
import Text from './components/Text/Text';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  contador() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.contador()
    }, 1000)
  }

  render() {
    return (
      <>
        <p>{this.state.seconds}</p>
        <Text text="Bem vindo Bluemers!"/>
        <Text text="Teste Página 01"/>
        <Text text="Exeplo Página"/>
      </>
    )
  };
};