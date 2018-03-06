import React, { Component } from 'react';
import { NetInfo } from 'react-native';

// redux 相关
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './src/redux/actions';

import Main from './src/config/route';

class ReduxRoute extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.checkNet();
  }

  // 检测网络是否连接
  async checkNet() {
    const netInfo = await NetInfo.getConnectionInfo();
    this.props.setUserInfo({ connectNetType: netInfo.type });

    NetInfo.addEventListener('connectionChange', (netInfoObj) => {
      this.props.setUserInfo({ connectNetType: netInfoObj.type });
    });
  }

  render() {
    return <Main />;
  }
}

// 关联 redux store
function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxRoute);
