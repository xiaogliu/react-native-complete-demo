import { Component } from 'react';
import view from './view';

export default class ScreenSome1 extends Component {
  static navigationOptions = {
    title: 'some1',
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return view(this);
  }
}
