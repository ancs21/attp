import React from 'react';
import { HMR } from '@pwa/preset-react';
import Intro from '@components/Intro';
import style from './index.sass';

function About() {
	return (
		<div className="mdl-grid">
		<div className="mdl-cell mdl-cell--3-col"></div>
		<Intro/>
		<div className="mdl-cell mdl-cell--3-col"></div>
		</div>
		
	);
}
export default HMR(About, module);
