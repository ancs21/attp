import React, { Fragment } from 'react';
import { HMR } from '@pwa/preset-react';
import { Link } from 'react-router-dom';
import News from '@components/News';
import Card from '@components/Card';
import style from './index.sass';

function Blog(props) {
	return (
		<Fragment>
			<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
				<div class="mdl-tabs__tab-bar">
					<a href="#panel1" class="mdl-tabs__tab is-active">Organic Food</a>
					<a href="#panel2" class="mdl-tabs__tab">Climate Change</a>
					<a href="#panel3" class="mdl-tabs__tab">Others</a>
				</div>
				<div class="mdl-tabs__panel is-active" id="panel1">
					<div className="mdl-grid">
						<News/>
						<News/>
						<News/>
						<News/>
					</div>
				</div>
				<div class="mdl-tabs__panel" id="panel2">
					<div className="mdl-grid">
						<News/>
						<News/>
						<News/>
						<News/>
					</div>
				</div>
				<div class="mdl-tabs__panel" id="panel3">
					<div className="mdl-grid">
						<News/>
						<News/>
						<News/>
						<News/>
					</div>
				</div>
			</div>
		</Fragment>

  		
		
	);
}

export default HMR(Blog, module);
