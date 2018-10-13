import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import style from './index.sass'
import withState from '../../HOC/withState'

class Nav extends React.Component {
  // state = {
  //   stuck: false
  // }

  // componentDidMount() {
  //   addEventListener(
  //     'scroll',
  //     () => {
  //       let stuck = window.pageYOffset > 0
  //       this.setState({ stuck })
  //     },
  //     { passive: true }
  //   )
  // }

  // shouldComponentUpdate(_, nxt) {
  //   let now = this.state
  //   return now.stuck !== nxt.stuck
  // }

  render() {
    return (
      <Fragment>
        <header className="mdl-layout__header mdl-layout__header--scroll">
          <div className="mdl-layout__header-row">
            <a href="/" className="mdl-navigation__link">
              <span className="mdl-layout-title">ATTP</span>
            </a>
            <div className="mdl-layout-spacer" />
            <nav className="mdl-navigation">
              {!this.props.state.isAuth ? <a onClick={this.props.actions.handleSignInWithGoogle} className="mdl-navigation__link">
                <i class="material-icons">account_circle</i> &nbsp; Login{' '}
              </a> : <h6>{this.props.state.user.displayName}</h6>}
			  
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">ATTP</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">
              Account
            </a>
          </nav>
        </div>
      </Fragment>
    )
  }
}

export default withState(Nav)