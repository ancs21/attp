import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './index.sass';

export default class Nav extends React.Component {
	state = {
		stuck: false,
	};

	componentDidMount() {
		addEventListener('scroll', () => {
			let stuck = window.pageYOffset > 0;
			this.setState({ stuck });
		}, { passive:true });
	}

	shouldComponentUpdate(_, nxt) {
		let now = this.state;
		return now.stuck !== nxt.stuck;
	}

	render() {
		let cls = style.nav;
		if (this.state.stuck) {
			cls += ` ${style.stuck}`;
		}

		return (
			<Fragment>
			<header className="mdl-layout__header mdl-layout__header--scroll">
			<div className="mdl-layout__header-row">
			<a href= "/" className="mdl-navigation__link"><span className="mdl-layout-title" >ATTP</span></a>
			<div className="mdl-layout-spacer"></div>
			<nav className="mdl-navigation">
				<a className="mdl-navigation__link" href="">
				<i class="material-icons">account_circle</i> &nbsp; Demo Name </a>
			
			</nav>
			</div>
		</header>
		<div className="mdl-layout__drawer">
			<span className="mdl-layout-title">ATTP</span>
			<nav className="mdl-navigation">
			<a className="mdl-navigation__link" href="">Acount</a>
			</nav>
		</div>
			</Fragment>
		
		);
	}
}
