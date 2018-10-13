import React from 'react';
import { HMR } from '@pwa/preset-react';
import NewsDetails from '@components/NewsDetails';

function About() {
	return (
		<div className="mdl-grid">
		<div className="mdl-cell mdl-cell--3-col"></div>
		<NewsDetails/>
		<div className="mdl-cell mdl-cell--3-col"></div>
		</div>
		
	);
}
export default HMR(About, module);
