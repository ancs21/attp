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
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
				<label class="mdl-button mdl-js-button mdl-button--icon" for="search">
				<i class="material-icons">search</i>
				</label>
				<div class="mdl-textfield__expandable-holder">
				<input class="mdl-textfield__input" type="text" id="search"/>
				<label class="mdl-textfield__label" for="search">Search</label>
				</div>
			</div>
			&nbsp; &nbsp; 
              {!this.props.state.isAuth ? <a onClick={this.props.actions.handleSignInWithGoogle} className="mdl-navigation__link">
                <i class="material-icons">account_circle</i> &nbsp; Login{' '}
              </a> : <h6 className="mdl-navigation__link">{this.props.state.user.displayName}</h6>}
			  
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">ATTP</span>
          <nav className="mdl-navigation">
		  <Link className="mdl-navigation__link" to="/"><i class="material-icons">home</i> &nbsp;
              Home</Link>
			<Link className="mdl-navigation__link" to="/blog"><i class="material-icons">add_circle</i> &nbsp;
              Sell your food</Link>
			<Link className="mdl-navigation__link" to="/blog"><i class="material-icons">archive</i> &nbsp;
			Manage your food</Link>
          </nav>
        </div>
      </Fragment>
    )
  }
}

export default withState(Nav)