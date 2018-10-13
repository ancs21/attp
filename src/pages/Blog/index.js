import React from 'react';
import { HMR } from '@pwa/preset-react';
import { Link } from 'react-router-dom';
import SellFood from '@components/SellFood';
import Card from '@components/Card';
import style from './index.sass';

function Blog(props) {
	return (
		<div className="mdl-grid">
		<div className="mdl-cell mdl-cell--3-col"></div>
		<SellFood/>
		<div className="mdl-cell mdl-cell--3-col"></div>
		</div>
	);
}

export default HMR(Blog, module);
