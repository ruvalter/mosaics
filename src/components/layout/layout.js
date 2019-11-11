import React, {Component} from 'react';
import AuxWrapper from '../../hoc/aux-wrapper';

import classes from './layout.scss'
import Topbar from '../topbar/topbar';
import Toolbox from '../toolbox/toolbox';

class Layout extends Component {

  render () {
    return (
      <AuxWrapper>
        <Topbar/>
        <main className={classes.content}>
          {this.props.children}
        </main>
        <Toolbox />
        <div>footer</div>
      </AuxWrapper>
    );
  }
} 

export default Layout;