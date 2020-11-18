import React, { Fragment, Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import LoadBar from '../UI/LoadBar/LoadBar';

class Layout extends Component {
  state = {
    progress: '0%',
    showSideDrawer: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ progress: '100%' }), 200);
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerTogggleHander = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <LoadBar progress={this.state.progress} />
        <Toolbar drawerToggleClicked={this.sideDrawerTogggleHander} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
