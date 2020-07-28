import React, { Fragment, Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerTogggleHander = () => {
    this.setState((prevState) => { 
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerTogggleHander} />
        <SideDrawer closed={this.sideDrawerClosedHandler} 
                    open={this.state.showSideDrawer} />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
} 

export default Layout;
